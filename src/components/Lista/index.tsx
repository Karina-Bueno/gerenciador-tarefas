import { Itarefa } from "../../types/tarefa";
import style from "../Lista/Lista.module.scss";
import Item from "./Item";

function Lista({ tarefas }: { tarefas: Itarefa[]}) {
  //forma nova de utilizar o Components
  //criando um array de tarefas

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {/* o metodo .map renderiza de forma dinamica */}
        {tarefas.map((item, index) => (
          <Item 
          key={index}
          {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
