import React from "react";
import Button from "../Button";
import style from "./Formulario.module.scss";
import { Itarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid"; //criando um id aleatório

// com o htmlFor, clicando no label o nosso input fica focado

class Formulario extends React.Component<{ setTarefas: React.Dispatch<React.SetStateAction<
Itarefa[]>> //reponsavel por resetar o formulario
}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas, 
        { 
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4() //função que retornara um id 
        }
      ]
    );
    this.setState ({
      tarefa:"",
      tempo: "00:00"
    });
  }
  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
            placeholder="O que você quer estudar?" //vai aparecer em uma barra para a pessoa digitar
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo} //será o valor atual do input
            onChange={evento =>
              this.setState({ ...this.state, tempo: evento.target.value })
            } //estamos dizendo que o valor do input precisa ser mudado no state, para isso criamos um evento onChange
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit">
          Adicionar
        </Button>
      </form>
    );
  }
}

export default Formulario;
