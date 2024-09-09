import Button from "../Button";
import Relogio from "../Cronometro/Relogio";
import style from "../Cronometro/Cronometro.module.scss";

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio /> 
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}