import  React  from "react";
import style from './Button.module.scss';

class Button extends React.Component <any, any> {
    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type} className={style.button}>
              {this.props.children} {/*PROPS é uma forma externa de mandar informações para dentro do componente| CHILDREN é a permissão para conseguirmos utilizar alguma coisa dentro do componente*/}
            </button>
        );
    }
}

export default Button;