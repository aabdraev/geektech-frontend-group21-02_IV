import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'
// import Input from '../components/ui/Input'
import SumComp from './SumComp'
import Hoc from './Hoc'
// import TodoCardClass from './ToDoCardClass'
import InputClass from './ui/InputClass'

import classes from "./components.module.css"
import { classNames } from './helpers'

const types = ["asc", "desc", "letter"]

const Todolist = ({ handleDelete, handleOpen, handleNextPage, handlePrevPage, list, page }) => {

    const [type, setType] = useState("asc")
    const [searchValue, setSearchValue] = useState("")

    const filterSort = (type) => {

        const searched = list.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

        switch (type) {
            case "asc": {
                return searched.sort((a, b) => a.id - b.id)
            }
            case "desc": {
                return searched.sort((a, b) => b.id - a.id)
            }
            case "letter": {
                return searched.sort((a, b) => a.title.localeCompare(b.title))
            }
            default: return searched
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
            {/* <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search todo..." /> */}
            <InputClass value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search todo..." />
            {/* <div className='todolist'>
                {filterSort(type).slice(pag.offset, pag.offset + pag.limit).map((item) =>
                    <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete} />
                )
                }
            </div > */}
            <div className='todolist_class_component'>
                {filterSort(type).map((item) =>
                    <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete} />
                )}
            </div>
            <div className='sort_main'>
                <div style={{ fontSize: 20 }}>Sort</div>
                <div className='sort_btn'>
                    {types.map((elem) =>
                        <button
                            key={elem}
                            className={classNames(classes.button_active, classes.button, elem === type)}
                            onClick={() => handleChangeType(elem)}>
                            {elem}
                        </button>
                    )}
                </div>
            </div>
            <div className='pages'>
                <button onClick={handlePrevPage}>Previous page</button>
                <h2 className='pages_count'>{page}</h2>
                <button onClick={handleNextPage}>Next Page</button>
            </div>

            {/* <Hoc Component={SumComp} hocDisplayName={"SumCompWrapper"} /> */}
        </>
    )
}

export default Todolist;