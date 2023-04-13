import React from 'react'
import { todoType } from './appTypes'

type PropsType = {
    task: todoType;
    deleteTask(nameToDelete:string):void
};

export default function TodoItem({ task, deleteTask }: PropsType) {
    return (
        <div>
            <div>
                <p>{task.taskName}</p>
                <p>{task.workDay}</p>
                <button onClick={() => deleteTask(task.taskName)}>Sil</button>
            </div>
        </div>
    )
}
