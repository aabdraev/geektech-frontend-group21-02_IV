import React from 'react'
import classes from "../components.module.css"

const Input = (props) => {
    return <input className={classes.input_custom}{...props} />
}

export default Input