import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <div>
            <input {...props} className={classes.sendInput}/>
        </div>
    )
}

export default Input;