import React from 'react'


const Title = ({ size, margin, fweight, children }) => {
    return (
        <div style={{ fontSize: size, marginBottom: margin, fontWeight: fweight }}>{children}</div>
    )
}

export default Title