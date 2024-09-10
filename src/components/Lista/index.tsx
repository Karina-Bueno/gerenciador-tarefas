import { Itarefa } from "../../types/tarefa";
import style from "../Lista/Lista.module.scss";
import Item from "./Item";

interface Props {
  tarefas: Itarefa[],
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  //forma nova de utilizar o Components
  //criando um array de tarefas

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {/* o metodo .map renderiza de forma dinamica */}
        {tarefas.map((item => (
          <Item 
          selecionaTarefa={selecionaTarefa}
          key={item.id}
          {...item}
          />
        )))} 
      </ul>
    </aside>
  );
}

export default Lista;
