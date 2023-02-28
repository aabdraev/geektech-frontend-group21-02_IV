import { Component } from "react";


class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    render() {

        if (this.state.hasError) {
            return (
                <div className="errorboundary">
                    <h1>Oops, something went wrong...</h1>
                    <button onClick={() => { window.location.reload() }}>reload</button>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary