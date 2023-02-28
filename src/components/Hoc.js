import React from 'react'
//higher-order component

const Hoc = ({ Component, hocDisplayName }) => {

    Hoc.displayName = hocDisplayName
    Component.displayName = "Example"

    return (
        <div className='hoc_wrapper'>
            <Component render={(sum, sum2) => {
                return (
                    <div>
                        <h1>{sum} + {sum2} = {sum + sum2}</h1>
                    </div>
                )
            }} />
        </div>
    )
}

export default Hoc