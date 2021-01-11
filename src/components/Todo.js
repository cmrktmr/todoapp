import React, { memo,} from 'react'

const Todo = memo(props => {
    const {todo, CompletedTodos,deleteTodo } = props
    return (
        <li className={`${todo.isCompleted ? 'completed' : ''}`}>
         
        <div className="view">
            <input
            className="toggle" type="checkbox"checked={todo.isCompleted} onChange={() => CompletedTodos(todo.id)}
            />
                <label>{todo.text}</label>
                <button className="destroy" onClick={() => deleteTodo(todo.id)} />

        </div> 
    </li>
    )
})

export default Todo