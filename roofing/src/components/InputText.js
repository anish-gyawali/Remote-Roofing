import React from 'react';
import './components.css';

 const InputText=({placeholder})=> {
    return (
        <div >
            <input className='text-input' placeholder={placeholder}/>
        </div>
    )
}
export default InputText;