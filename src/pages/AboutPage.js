import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="about_page">
                <div className='about_inner'>
                    <p>Todo list made by Atai Abdraev while studying frontend at Geektech</p>
                    <p>Application is developed using HTML, CSS, JavaScript and React</p>
                    <p>Different hooks and third party libraries are used in develompent</p>
                </div>
                <button onClick={() => navigate("/")}>to main page</button>
            </div>
            {/* <button onClick={() => navigate("/go")}>to go</button>
            <button onClick={() => navigate(-1)}>-1</button> */}
        </>
    )
}

export default AboutPage