import React from 'react';
import style from '../Item/Item.module.scss';
import { Itarefa } from '../../../types/tarefa';

interface Props extends Itarefa {
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export default function Item(
    { 
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id,
        selecionaTarefa 
    }: Props) 
    {
    return (
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} //se estiver selecionado, retornamos um style.itemSelecionado; do contrário, retornamos uma string vazia.
            onClick={() => !completado &&selecionaTarefa(
                {
                    tarefa, 
                    tempo,
                    selecionado, 
                    completado,
                    id
                }
            )}
        >
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}