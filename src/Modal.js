import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`Submitted value: ${inputValue}`);
    closeModal();
  };

  const handleCancel = () => {
    console.log('Modal canceled');
    closeModal();
  };

  return (
    <div>
        
        <h4> Feedback modal </h4>
        
        <button className='submit-button' onClick={openModal}>Feedback</button>

        <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
            <div className="modal-content">
                <span className="close-btn" onClick={closeModal}>&times;</span>
                <h2>Have you tried our products?</h2>
                <p>Provide a feedback and tell us what do you think!</p>
                <textarea 
                    className='input-field'  
                    cols={60}
                    rows={8} 
                    value={inputValue} 
                    onChange={handleInputChange}
                    placeholder='Type here...'
                />
               
                <div className="button-container">
                <button className='send-button' onClick={handleSubmit}>Submit</button>
                <button className='alert-button' onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
        <hr/>
    </div>
    
  );
};

export default Modal;
