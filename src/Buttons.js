import React from 'react';
import { Tooltip } from 'react-tooltip';

const handleClickAlert = () => {
    alert('This is a dummy alert!');
};
const handleClickChangeText = () => {
    const spanElement = document.getElementById('change-text-id');
    if (spanElement.textContent == "Boom!") {
      spanElement.textContent = 'Try me';
    } else{
        spanElement.textContent = 'Boom!';
    }
};

const Buttons = () => {
    return (

        <div>
            <h3> <u>1. Button variations:</u> </h3>

            <button className="alert-button" onClick={handleClickAlert}>
                Alert
            </button>

            <button className="hover-button" >
                <span> Hover </span>
            </button>

            <button className="change-text-button" onClick={handleClickChangeText}> 
                <span id='change-text-id'> Try me </span>
            </button>

            <button className="tooltip-button"  
                data-tooltip-id="my-tooltip"
                data-tooltip-content="cool, right?"
                data-tooltip-place="top">
                Tooltip
            </button>
            <Tooltip id='my-tooltip' />

            <hr/>
            
        </div>
    );
};

export default Buttons;