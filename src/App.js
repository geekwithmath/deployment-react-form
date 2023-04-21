import React, { useState, useEffect } from "react";
import './App.css'

function App() {
  const [formData, setFormData] = useState({});

  useEffect(() =>{
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if(storedFormData){
      setFormData(storedFormData)
    }
  }, [])
 
  const formSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  }

  return (
    <div>
      <form className="form-app">
        <label>Enter First Name:
          <input type="text" name="firstName" value={formData.firstName || ''} onChange={handleInputChange} />
        </label>
        <br />
        <label>Enter Last name:
          <input type="text" name="lastName" value={formData.lastName || ''} onChange={handleInputChange} />
        </label>
        <br />
        <label>Enter Mobile name:
          <input type="phone" name="mobileNumber" value={formData.mobileNumber || ''} onChange={handleInputChange} />
        </label>
        <br />
        <label>Enter Email Id:
          <input type="email" name="email" value={formData.email || ''} onChange={handleInputChange} />
        </label>
        <br />
        <label>Enter Age:
          <input type="text" name="age" value={formData.age || ''} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit" onClick={formSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;

