import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const IdTodo = () => {

    const { id } = useParams()
    const location = useLocation()
    console.log(id)
    console.log(location)

    return (
        <div>ID TODO</div>
    )
}

export default IdTodo