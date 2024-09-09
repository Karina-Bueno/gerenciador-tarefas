import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Lista from '../components/Lista';
import style from '../pages/style.module.scss';
import Cronometro from "../components/Cronometro";
import { Itarefa } from "../types/tarefa";

function App() { //para renderizar um component no react utilizamos a tag html </>
  const [tarefas, setTarefas] = useState<Itarefa[]| []>([]);
  return ( //aqui returno todos os components passando o nome do component dentro de tags
    <div className={style.AppStyle}> 
      <Formulario setTarefas={setTarefas} /> 
      <Lista tarefas={tarefas} />
      <Cronometro  /> 
    </div>
  );
}

export default App;
