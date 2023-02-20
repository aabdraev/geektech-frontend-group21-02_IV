import React from 'react'
import TodoCard from './TodoCard'

const Todolist = ({ handleDelete, handleOpen, list }) => {
    return (
        <div className='todolist'>
            {list.map((item) =>
                <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete} />
            )
            }
        </div >
    )
}

export default Todolist