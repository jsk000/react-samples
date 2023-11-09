import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For demonstration purposes, alert the form data to the console
    console.log('Form submitted:', formData);

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (

    <div>
        
        <h3> <u>5. Forms:</u> </h3>

        <h4> Contact form </h4>

        <form onSubmit={handleSubmit}>

            <div className='input-container' >
                <label className='input-label' htmlFor="name">Name:</label>
                <input
                    className='input-field'
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Max Mustermann'
                    required
                />
            </div>
            
            
            <div className='input-container' >
                <label className='input-label'htmlFor="email">Email:</label>
                <input
                    className='input-field'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Example@email.com'
                    required
                />
            </div>
            
            <div className='input-container' >
                <label className='input-label' htmlFor="phone">Phone:</label>
                <input
                    className='input-field'
                    type="phone"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='(+49) 123456789'
                    required
                />
            </div>

            <div className='input-container' >
                <label className='input-label' htmlFor="message">Message:</label>
                <textarea
                    className='input-field'
                    id="message"
                    name="message"
                    cols={30}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Type here...'
                    required
                />
            </div>

            <button className="submit-button" type='submit'> 
                <span id='change-text-id'> Submit </span>
            </button>
        </form>

        <hr/>
    </div>
    

  );
};

export default ContactForm;
