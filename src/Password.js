import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';

const Password = ({ length, symbols, capitalLetter, number }) => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const getPasswordStrength = () => {
    const result = zxcvbn(password);

    // Map the zxcvbn score to a strength level
    const strengthLevels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
    const strengthLevel = strengthLevels[result.score];

    return strengthLevel;
  };

  const isPasswordStrong = () => {
    if (getPasswordStrength() === "Very Weak" || "Weak") {
        return false;
    } else {
        return true;
    }
  }

  const isSymbolIncluded = () => {
    return symbols ? /[!@#$%^&*(),.?":{}|<>]/.test(password) : true;
  };

  const isCapitalLetterIncluded = () => {
    return capitalLetter ? /[A-Z]/.test(password) : true;
  };

  const isNumberIncluded = () => {
    return number ? /\d/.test(password) : true;
  };

  return (
    <div>
        
        <h3> <u>9. Password evaluator:</u> </h3>

        <div className='input-container'>
            <label className='input-label'>Password:</label>
            <input
                className='input-field'
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handleChange}
            />
        </div>
      
      <small>
            Minimum Length: {length},
            Symbols: {symbols ? 'Required' : 'Optional'},
            Capital Letter: {capitalLetter ? 'Required' : 'Optional'},
            Number: {number ? 'Required' : 'Optional'}
        </small>

      <div className="criteria">
        
      </div>

      <div className="strength">
        
      </div>

      <div className="requirements">
        <p>Strength: {getPasswordStrength()}</p>
        <p>{isSymbolIncluded() ? '✅ Includes at least one symbol' : '❌ Missing symbol'}</p>
        <p>{isCapitalLetterIncluded() ? '✅ Includes at least one capital letter' : '❌ Missing capital letter'}</p>
        <p>{isNumberIncluded() ? '✅ Includes at least one number' : '❌ Missing number'}</p>
      </div>

      <hr />
    </div>
  );
};

export default Password;
