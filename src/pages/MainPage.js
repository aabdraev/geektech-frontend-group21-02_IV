import React, { useState } from 'react'
import ModalWindow from '../components/ModalWindow'
import Title from '../components/Title'
import Todolist from '../components/Todolist'

const list = [
    { id: 1, title: "Do tasks", description: "task 2" },
    { id: 2, title: "Buy groceries", description: "take some vegies and fruits" },
    { id: 3, title: "Learn react", description: "throw hooks" },
    { id: 4, title: "Go to shop", description: "jeans and shirts" },
]

const MainPage = () => {


    const [isShow, setIsShow] = useState(false)
    const [todolist, setTodolist] = useState(list)
    const [currentTodo, setCurrentTodo] = useState({})

    const handleAdd = (data) => {
        const newTodolist = [...todolist, { ...data, id: Date.now() }]
        handleClose()
        setTodolist(newTodolist)
    }

    const handleDelete = (id) => {
        const newTodolist = [...todolist].filter((item) => item.id !== id)

        setTodolist(newTodolist)
    }

    const handleEdit = (data) => {
        const newTodolist = todolist.map((item) => {
            if (item.id === data.id) {
                return data
            } else {
                return item
            }
        })

        setTodolist(newTodolist)
    }

    const handleOpen = (todo) => {
        setIsShow(true)
        setCurrentTodo(todo)
    }

    const handleClose = () => {
        setCurrentTodo({})
        setIsShow(false)
    }

    const sortByDate = () => {
        const sorted = todolist.sort((a, b) => b.id - a.id)
        setTodolist([...sorted])
    }

    return (
        <div className="main_page">
            <Title size={32} margin={10} fweight={1000}>
                Todo list
            </Title>
            <Todolist list={todolist} handleDelete={handleDelete} handleOpen={handleOpen} />
            {
                isShow && (
                    <ModalWindow currentTodo={currentTodo} handleAdd={handleAdd} handleClose={handleClose} handleEdit={handleEdit} />
                )
            }
            <button onClick={() => setIsShow(true)}>Add todo note</button>
            <button onClick={sortByDate}>Sort</button>
        </div>
    )
}

export default MainPage