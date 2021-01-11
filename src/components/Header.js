import React, { memo, useState } from 'react'
const Header = memo((props) => {
    const [text, setText] = useState('')
    const { addTodo } = props
    const AddTodo = (event) => {
        if (event.key === 'Enter' && text) { addTodo({
                id: new Date().valueOf(),text, isCompleted: false
            })
            setText('')
        }
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <input
                className="new-todo"placeholder="What needs to be done?" value={text} 
                onChange={(e) => setText(e.target.value)} onKeyPress={AddTodo}
            />
        </header>
    )
})

export default Header