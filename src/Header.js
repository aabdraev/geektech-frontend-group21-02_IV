import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATHS } from './common/routeConfig'

const Header = () => {
    return (
        <div className="header">
            <div className="header_inner">
                <NavLink to={PATHS.MAIN}>Main Page</NavLink>
                <NavLink to={PATHS.ABOUT}>About Page</NavLink>
            </div>
        </div >
    )
}

export default Header