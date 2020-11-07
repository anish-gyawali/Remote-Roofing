import React from 'react';
import './components.css';

 const InputText=({placeholder})=> {
    return (
        <div >
            <input id='location-logo' className='text-input' placeholder={placeholder}/>
        </div>
    )
}
export default InputText;