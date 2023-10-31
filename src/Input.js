import React from 'react';
import { useState } from 'react';

const Input = () => {

    const [name, setName] = React.useState('');
    const [fullName, setFullName] = React.useState('');
    const [age, setAge] = React.useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    return (

        <div>
            <h3><u> 2. Input fields: </u></h3>

            <div className='input-container'>
                <label className='input-label'>Enter your name:</label>
                <input
                    type="text"
                    className="input-field"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Name"
                />
                <p className='input-p'>Howdy, {name}!</p>
            </div>

            <div className='input-container'>
                <label>Enter your full name:</label>
                <textarea
                    type="text"
                    className="input-field"
                    value={fullName}
                    onChange={handleFullNameChange}
                    placeholder="Full name"
                />
                <p className='input-p'>what a cool name, {fullName}!</p>
            </div>

            <div className='input-container'>
                <label>Enter your Age:</label>
                <input
                    type="number"
                    className="input-field"
                    value={age}
                    onChange={handleAgeChange}
                    placeholder="Age"
                />
                <p className='input-p'>{age}? Oh you poor thing!</p>
            </div>
            

        </div>
    )
}

export default Input;