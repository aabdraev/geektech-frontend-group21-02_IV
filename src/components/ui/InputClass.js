import { Component } from "react";
import classes from "../components.module.css"

class InputClass extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <input className={classes.input_custom}{...this.props} />
        )
    }
}

export default InputClass