import React from 'react'
import { useNavigate } from 'react-router-dom'

const TodoCard = ({ todo, handleOpen, handleDelete }) => {

    const navigate = useNavigate()

    return (
        <div className="todocard" onClick={() => navigate(`${todo.id}`)}>
            <div className="todocard_txt">
                <h4>{todo.title}</h4>
                <div>{todo.description}</div>
            </div>
            {/* <div className="todocard_btn">
                <button onClick={() => handleOpen(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div> */}
        </div >
    )
}

export default TodoCard