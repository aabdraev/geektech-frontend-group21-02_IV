import { useState, useCallback, useMemo, useEffect } from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import AppRouter from "./common/AppRouter";
import { routes } from "./common/routeConfig";
// import ClassComp from "./ClassComp";
// import ExampleMemo from "./components/ExampleMemo";
import "./index.css"
import AboutPage from "./pages/AboutPage";
import IdTodo from "./pages/IdTodo";
import MainPage from "./pages/MainPage";

const sum = (a, b) => {
    return a + b
}

function App() {
    const [value, setValue] = useState("")
    const [math, setmath] = useState({
        a: 2,
        b: 4
    })
    // const [isShow, setIsShow] = useState(false)

    // const log = useCallback((title) => {
    //     console.log(title);
    // }, [])

    // const amount = useMemo(() => {
    //     return sum(math.a, math.b)
    // }, [math.a, math.b])

    //error for error boundary
    // useEffect(() => {
    //     throw new Error()
    // })

    return (
        <div className="App">
            {/* {isShow && (<ClassComp />)}
            <button onClick={() => { setIsShow(!isShow) }}>Change</button> */}
            {/* <input value={value} onChange={(e) => setValue(e.target.value)} />
            <ExampleMemo log={log} amount={amount} /> */}
            {/* <MainPage /> */}
            <NavLink to={"/"}>Main Page</NavLink>
            <NavLink to={"/about"}>About Page</NavLink>
            <AppRouter />
        </div>
    );
}

export default App;
