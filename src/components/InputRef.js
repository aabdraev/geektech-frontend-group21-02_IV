import React, { useRef } from 'react'

//неуправляемый способ
function InputRef() {

    const inputRef = useRef(null)

    return (
        <>
            <input ref={inputRef} style={{ border: "1px solid #304f6d", padding: "5px", margin: "10px" }} placeholder="Enter text" />
            <button onClick={() => console.log(InputRef)}>Get Text</button>
        </>
    )
}

export default InputRef