import React, { useState } from "react";
import Button from "../Button";
import style from "./Formulario.module.scss";
import { Itarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid"; //criando um id aleatório

// com o htmlFor, clicando no label o nosso input fica focado

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

function Formulario({ setTarefas }: Props) {

  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00")

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4() //função que retornara um id 
        }
      ]
    );
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={evento => setTarefa(evento.target.value)}
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
          value={tempo} //será o valor atual do input
          onChange={evento => setTempo(evento.target.value)} //estamos dizendo que o valor do input precisa ser mudado no state, para isso criamos um evento onChange
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
  )
}

export default Formulario;
