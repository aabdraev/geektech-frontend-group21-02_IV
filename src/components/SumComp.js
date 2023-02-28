import React, { useState } from 'react'
//render props - для хранения функции и последующего использования в других компонентах
const SumComp = ({ render }) => {
    const [sum, setSum] = useState(2)
    const [sum2, setSum2] = useState(2)

    return (
        <>
            {render(sum, sum2)}
        </>
    )
}

export default SumComp