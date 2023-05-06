import React from 'react'
import classes from './Button.module.css'

const Button = ({ children, handleClick, }) => {
    return (
        <button className={classes.button} onClick={handleClick}>{children}</button>
    )
}

export default Button