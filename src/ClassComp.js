import { Component } from "react";

class ClassComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "Hello World"
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate() {
        this.setState({ value: "Updated" })
    }

    componentDidMount() {
        console.log("Mount");

    }
    componentDidUpdate() {
        console.log("Update")
    }
    componentWillUnmount() {
        console.log("Unmount")
    }

    render() {
        return (
            <h1 onClick={this.handleUpdate}>{this.state.value}</h1>
        )
    }

}

export default ClassComp