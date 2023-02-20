import React from 'react'

const TodoCard = ({ todo, handleOpen, handleDelete }) => {
    return (
        <div className="todocard">
            <div className="todocard_txt">
                <h4>{todo.title}</h4>
                <div>{todo.description}</div>
            </div>
            <div className="todocard_btn">
                <button onClick={() => handleOpen(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
        </div >
    )
}

export default TodoCard