import React from "react";


type TodoListPropsType = {

    topic1?: string
    arr: Array<inArrayPropsType>
}

type inArrayPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {
    return (
        <div className='TodoList'>
            <h3>{props.topic1}</h3>
            <div>
                <input />
               
            </div>
            <ul>
                {props.arr.map((el: inArrayPropsType) => {
                    return (
                        <li> <input type="checkbox" checked={el.isDone} /> <span>{el.title}</span></li>
                    )
                })}


            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>

    );
}

