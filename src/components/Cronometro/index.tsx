import Button from "../Button";
import Relogio from "../Cronometro/Relogio";
import style from "../Cronometro/Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado: Itarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();
    
    // if (selecionado?.tempo) { 
    //     setTempo(tempoParaSegundos(selecionado.tempo)); //verifica a presença de selecionado?.tempo e, em caso positivo, passaremos tempoParaSegundos(seleciado.tempo) para dentro de setTempo()
    // } esse código renderiza a pag infinitamente e acaba quebrando a pag

    //Atualizando o cronometro de acordo com a tarefa que selecionarmos
    useEffect(() => { //será executada quando alguma coisa mudar
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]) //está validando no if se existe selecionado e se existe selecionado.tempo
    
    //Iniciando a regressiva
    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
             setTempo(contador -1);
             return regressiva(contador - 1);
            }
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} /> 
            </div>
            <Button onClick={() => regressiva (tempo)}>
                Começar!
            </Button>
        </div>
    )
}