import { Component } from "react";

class TodoCardClass extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="todocard">
                <div className="todocard_txt">
                    <h4>{this.props.todo.title}</h4>
                    <div>{this.props.todo.description}</div>
                </div>
                <div className="todocard_btn">
                    <button onClick={() => this.props.handleOpen(this.props.todo)}>Edit</button>
                    <button onClick={() => this.props.handleDelete(this.props.todo.id)}>Delete</button>
                </div>
            </div >
        )
    }
}

export default TodoCardClass
