import React, { memo } from 'react'
import Todo from './Todo'

const TodoList = memo(props => {
    const { listTodos } = props
    return (
        <section className="main">
            <input
                className="toggle-all"
                type="checkbox"
            />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">

                {listTodos.map((todo, index) => <Todo index={index} key={todo.id} todo={todo} {...props} />)}

            </ul>

        </section>
    )
})

export default TodoList