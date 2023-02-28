import { useEffect } from 'react'
import Form from './Form'
import ModalWrapper from './ModalWrapper'

const ModalWindow = ({ handleClose, handleAdd, currentTodo, handleEdit }) => {

    const keydown = (e) => {
        if (e.key === "Escape") {
            handleClose()
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", keydown)

        return () => { window.removeEventListener("keydown", keydown) }
    }, [])

    return (
        <ModalWrapper>
            <div className="modal_wrapper">
                <div className="modal_inner" onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <div className="modal_header">
                        <h2>Todo note</h2>
                        <button id="modalCloseBtn" onClick={handleClose}>X</button>
                    </div>
                    <Form handleAdd={handleAdd} currentTodo={currentTodo} handleEdit={handleEdit} handleClose={handleClose} />
                </div>
            </div>
        </ModalWrapper>
    )
}

export default ModalWindow