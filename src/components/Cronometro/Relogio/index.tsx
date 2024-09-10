import style from "../Relogio/Relogio.module.scss";

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0'); 
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');//permite que tenhamos uma cadeia de caracteres padrão e se não tiver o número mínimo de cadeia de caracteres, ele pega esses valores e transforma em padrão.

    return (
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}