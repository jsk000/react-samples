import React, { useState } from 'react';
import Alert from './Alert';

const AlertTest = () => {
  const [inputValue, setInputValue] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckAnswer = () => {
    if (inputValue.trim() === '1') {
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
    } else {
      setShowSuccessAlert(false);
      setShowErrorAlert(true);
    }
  };

  const handleCloseAlerts = () => {
    setShowSuccessAlert(false);
    setShowErrorAlert(false);
  };

  return (
    <div>
      <h3> <u>8. Alerts and modals:</u> </h3>
      <h4> Success/Error Alert </h4>


      <label className='input-label'>What is 1 x 1? </label>
      <input
        className='input-field'
        type="text"
        placeholder="Test your intelligence"
        value={inputValue}
        onChange={handleInputChange}
      />

      <button className='submit-button' onClick={handleCheckAnswer}>Check</button>

      {/* Success Alert */}
      {showSuccessAlert && (
        <Alert message="Good Job!" type="success" onClose={handleCloseAlerts} />
      )}

      {/* Error Alert */}
      {showErrorAlert && (
        <Alert message="Please go study!" type="error" onClose={handleCloseAlerts} />
      )}
    </div>
  );
};

export default AlertTest;
