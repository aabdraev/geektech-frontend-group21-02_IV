import React, { useRef } from 'react'
import Input from './ui/Input'

//неуправляемый способ
function InputRef() {

    const inputRef = useRef(null)

    return (
        <>
            <Input ref={inputRef} style={{ border: "1px solid #304f6d", padding: "5px", margin: "10px" }} placeholder="Enter text" />
            <button onClick={() => console.log(InputRef)}>Get Text</button>
        </>
    )
}

export default InputRef