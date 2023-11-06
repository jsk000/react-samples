import React from 'react';
import { useState } from 'react';

const Dropdown = () => {

    const options = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    

    return (

        <div>
            <h3><u> 3. Dropdown menus: </u></h3>

            <div className='input-container'>
                <label className='input-label'>Meal:</label>
                <select className=' input-field dropdown-select' value={selectedOption} onChange={handleOptionChange}>
                    <option value="">-- Select an option --</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <p className='input-p'>You selected: {selectedOption}</p>
            </div>

        </div>
    )
}

export default Dropdown;