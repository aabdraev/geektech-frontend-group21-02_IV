import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'

import classes from "./components.module.css"
import { classNames } from './helpers'

const types = ["asc", "desc", "letter"]

const Todolist = ({ handleDelete, handleOpen, list }) => {

    const [type, setType] = useState("asc")

    const filterSort = (type) => {
        switch (type) {
            case "asc": {
                return list.sort((a, b) => a.id - b.id)
            }
            case "desc": {
                return list.sort((a, b) => b.id - a.id)
            }
            case "letter": {
                return list.sort((a, b) => a.title.localeCompare(b.title))
            }
            default: return list
        }
    }

    const handleChangeType = (type) => {
        setType(type)
        localStorage.setItem("type", type)
    }

    useEffect(() => {
        const type = localStorage.getItem("type")
        if (!type) return
        setType(type)
    }, [])


    return (
        <>

            <div className='todolist'>
                {filterSort(type).map((item) =>
                    <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete} />
                )
                }
            </div >
            <div className='sort_main'>
                <div style={{ fontSize: 20 }}>Sort</div>
                <div className='sort_btn'>
                    {types.map((elem) =>
                        <button key={elem} className={classNames(classes.button_active, classes.button, elem === type)} onClick={() => handleChangeType(elem)}>{elem}</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Todolist;