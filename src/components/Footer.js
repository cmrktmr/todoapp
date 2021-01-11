/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react'
const Footer = memo((props) => {
    const { setStatusFilter, activeButton, clearCompleted, TodosLeft, Todos } = props
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{TodosLeft}</strong>
                <span>{TodosLeft > 1 ? 'items' : 'item'}</span>
                <span> left</span>
            </span>
            <ul className="filters">
                <li>
                    <a  className={`${activeButton === 'ALL' ? "selected" : ''}`} onClick={() => setStatusFilter('ALL')} > All
                    </a>
                </li>
                <li>
                    <a  className={`${activeButton === 'ACTIVE' ? "selected" : ''}`} onClick={() => setStatusFilter('ACTIVE')}> Active
                    </a>
                </li>
                <li>
                    <a  className={`${activeButton === 'COMPLETED' ? "selected" : ''}`} onClick={() => setStatusFilter('COMPLETED')}> Completed
                    </a>
                </li>
            </ul>
            {
                TodosLeft < Todos && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
            }
        </footer>
    )
})
export default Footer