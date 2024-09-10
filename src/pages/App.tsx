import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Lista from '../components/Lista';
import style from '../pages/style.module.scss';
import Cronometro from "../components/Cronometro";
import { Itarefa } from "../types/tarefa";

function App() { //para renderizar um component no react utilizamos a tag html </>
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);

  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa, //condição que verifica qual tarefa está selecionada e atribui o valor true somente a ela
      selecionado: tarefa.id === tarefaSelecionada.id ? true: false //verificando se a tarefa que estamos iterando no momento, tarefa.id, é igual a tarefaSelecionada.id. Em caso positivo, retornaremos true, valor colocado após o ponto de interrogação; do contrário, retornaremos false, valor colocado após os dois pontos.
    })));
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return ( //aqui returno todos os components passando o nome do component dentro de tags
    <div className={style.AppStyle}> 
      <Formulario setTarefas={setTarefas} /> 
      <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa} /> 
    </div>
  );
}

export default App;
