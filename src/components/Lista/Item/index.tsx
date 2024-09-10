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
    console.log('item atual: ', { tarefa, tempo, selecionado, completado, id });

    return (
        <li 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} //se estiver selecionado, retornamos um style.itemSelecionado; do contrário, retornamos uma string vazia.
            onClick={() => selecionaTarefa(
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
        </li>
    )
}