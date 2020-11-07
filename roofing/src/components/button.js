import React from 'react';
import './components.css';

const Button =({title})=>{
    return(
    <div className='button-wrapper' >
        <button className="button">{title}</button>
        </div>
)
}
export default Button;