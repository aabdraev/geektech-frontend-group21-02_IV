import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div>AboutPage</div>
            <button onClick={() => navigate("/")}>to main</button>
            {/* <button onClick={() => navigate("/go")}>to go</button>
            <button onClick={() => navigate(-1)}>-1</button> */}
        </>
    )
}

export default AboutPage