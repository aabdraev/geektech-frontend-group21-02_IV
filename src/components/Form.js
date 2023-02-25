import React from "react"
import { useState } from "react"
import Input from './ui/Input'

const Form = ({ handleAdd, currentTodo, handleEdit, handleClose }) => {

    const [value, setValue] = useState(currentTodo.title
        ? currentTodo
        : {
            title: "",
            description: ""
        })

    const isEdit = currentTodo.title ? true : false

    const handleOnChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const action = () => {
        if (isEdit) {
            handleEdit(value)
            handleClose()
        } else {
            handleAdd(value)
            handleClose()
        }
    }

    return (
        <>
            {
                Object.keys(value).map((item) =>
                    item !== "id" && (
                        <Input key={item} name={item} value={value[item]} onChange={handleOnChange} placeholder="Enter text" />
                    )

                )
            }

            <button onClick={action}> {isEdit ? "Edit" : "Add"}</button>
        </>
    )
}

export default Form