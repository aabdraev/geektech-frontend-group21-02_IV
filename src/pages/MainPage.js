import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ModalWindow from '../components/ModalWindow'
import Title from '../components/Title'
import Todolist from '../components/Todolist'
import { $api } from '../requester'
import { fetchTodos, fetchTodosById, fetchTodosByParams } from '../requests'


const MainPage = () => {

    const [isShow, setIsShow] = useState(false)
    const [todolist, setTodolist] = useState([])
    const [currentTodo, setCurrentTodo] = useState({})
    const [page, setPage] = useState(1)


    const handleAdd = (data) => {
        const newTodolist = [...todolist, { ...data, id: Date.now() }]
        handleClose()
        setTodolist(newTodolist)
    }

    const handleDelete = (id) => {
        const newTodolist = [...todolist].filter((item) => item.id !== id)

        // if (newTodolist.length === 0) {
        //     localStorage.setItem("list", JSON.stringify(newTodolist))
        // }

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


    const handlePrevPage = () => {
        if (page === 1) return
        setPage(page - 1)
    }

    const handleNextPage = () => {
        setPage(page + 1)
    }

    // useEffect(() => {
    //     const list = JSON.parse(localStorage.getItem("list"))
    //     setTodolist(list)
    // }, [])

    // useEffect(() => {
    //     if (todolist.length === 0) {
    //         return
    //     }
    //     localStorage.setItem("list", JSON.stringify(todolist))
    // }, [todolist])


    useEffect(() => {
        const params = {
            _limit: 3,
            _page: page
        }

        fetchTodosByParams(params).then(({ data }) => {
            setTodolist(data);
        })
    }, [page])


    // useEffect(() => {
    //     if (searchValue === "") {
    //         setFilteredList(todolist)
    //     }
    //     const filteredList = todolist.filter((todolist => todolist.title.toLowerCase().includes(searchValue.toLowerCase())))
    //     setFilteredList(filteredList)
    // }, [searchValue, todolist])

    return (
        <div className="main_page">
            {/* <Link to="/about">About Page</Link> */}

            <Title size={32} margin={10} fweight={1000}>
                Todo list
            </Title>
            <button onClick={() => setIsShow(true)}>Add todo note</button>
            {todolist.length === 0
                ? <h2 style={{ margin: 20 }}> Nothing to do :(</h2>
                :
                <Todolist
                    list={todolist}
                    page={page}
                    handleDelete={handleDelete}
                    handleOpen={handleOpen}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage} />
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