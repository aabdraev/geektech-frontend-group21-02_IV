import React, { useEffect, useState } from 'react'
import ModalWindow from '../components/ModalWindow'
import Title from '../components/Title'
import Todolist from '../components/Todolist'
import Input from '../components/ui/Input'


const MainPage = () => {


    const [isShow, setIsShow] = useState(false)
    const [todolist, setTodolist] = useState([])
    const [currentTodo, setCurrentTodo] = useState({})
    const [searchValue, setSearchValue] = useState("")
    const [filteredList, setFilteredList] = useState(todolist)


    const handleAdd = (data) => {
        const newTodolist = [...todolist, { ...data, id: Date.now() }]
        handleClose()
        setTodolist(newTodolist)
    }

    const handleDelete = (id) => {
        const newTodolist = [...todolist].filter((item) => item.id !== id)

        if (newTodolist.length === 0) {
            localStorage.setItem("list", JSON.stringify(newTodolist))
        }

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

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem("list"))
        setTodolist(list)
    }, [])

    useEffect(() => {
        if (todolist.length === 0) {
            return
        }
        localStorage.setItem("list", JSON.stringify(todolist))
    }, [todolist])

    useEffect(() => {
        if (searchValue === "") {
            setFilteredList(todolist)
        }
        const filteredList = todolist.filter((todolist => todolist.title.includes(searchValue)))
        setFilteredList(filteredList)
        console.log(filteredList);
    }, [searchValue, todolist])

    return (
        <div className="main_page">
            <Title size={32} margin={10} fweight={1000}>
                Todo list
            </Title>
            <button onClick={() => setIsShow(true)}>Add todo note</button>
            <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search todo..." />
            {todolist.length === 0
                ? <h2 style={{ margin: 20 }}> Nothing to do :(</h2>
                :
                <Todolist list={filteredList} handleDelete={handleDelete} handleOpen={handleOpen} />
            }
            {
                isShow && (
                    <ModalWindow currentTodo={currentTodo} handleAdd={handleAdd} handleClose={handleClose} handleEdit={handleEdit} />
                )
            }
        </div>
    )
}

export default MainPage