import  React  from "react";
import style from './Button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void,
    children: React.ReactNode
}

function Button({ onClick, type, children }: Props) {
    return (
        <button 
        onClick={onClick} 
        type={type} 
        className={style.button}>
        {children} {/*PROPS é uma forma externa de mandar informações para dentro do componente| CHILDREN é a permissão para conseguirmos utilizar alguma coisa dentro do componente*/}
      </button>
    )
}

export default Button;