import { useState, useCallback, useMemo, useEffect } from "react";
import ExampleMemo from "./components/ExampleMemo";
import "./index.css"
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

    const log = useCallback((title) => {
        console.log(title);
    }, [])

    const amount = useMemo(() => {
        return sum(math.a, math.b)
    }, [math.a, math.b])

    // useEffect(() => {
    //     throw new Error()
    // })

    return (
        <div className="App">
            {/* <input value={value} onChange={(e) => setValue(e.target.value)} />
            <ExampleMemo log={log} amount={amount} /> */}
            <MainPage />
        </div>
    );
}

export default App;
