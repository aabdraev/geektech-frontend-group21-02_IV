import React from 'react'
import Form from './Form'

const ModalWindow = ({ handleClose, handleAdd, currentTodo, handleEdit }) => {
    return (
        <>
            <div className="modal_wrapper">
                <div className="modal_inner">
                    <div className="modal_header">
                        <h2>Todo note</h2>
                        <button id="modalCloseBtn" onClick={handleClose}>X</button>
                    </div>
                    <Form handleAdd={handleAdd} currentTodo={currentTodo} handleEdit={handleEdit} handleClose={handleClose} />
                </div>
            </div>
        </>
    )
}

export default ModalWindow