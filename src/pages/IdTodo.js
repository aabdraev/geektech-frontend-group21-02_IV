import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchTodosById } from '../requests'

const IdTodo = () => {

    const { id } = useParams()
    const location = useLocation()
    // console.log(id)
    // console.log(location)
    const navigate = useNavigate()
    const [info, setInfo] = useState({})
    // useEffect(() => {
    //     const params = {
    //         _limit: 3,
    //         _page: page
    //     }

    //     fetchTodosByParams(params).then(({ data }) => {
    //         setTodolist(data);
    //     })
    // }, [page])

    useEffect(() => {

        fetchTodosById(id).then(({ data }) => {
            setInfo(data);
        })
    }, [id])

    return (
        <div className="todo_page">
            <h2>todo information</h2>
            <div className="todo_page_inner">
                <p><b>Todo id:</b> {info.id}</p>
                <p><b>Todo title:</b> {info.title}</p>
            </div>
            <button onClick={() => navigate("/")}>to main page</button>
        </div>
    )
}

export default IdTodo