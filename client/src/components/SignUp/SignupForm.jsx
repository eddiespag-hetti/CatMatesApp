import { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
    // State variables to hold form data
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    });
  
    // Function to handle input changes
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with the form data, e.g., send it to a server
      console.log(formData);
      // Clear the form after submission
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    };
  
    return (
        <div className="signup-form">
      <form  onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
    
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      </div>
    );
  };
  
  export default SignUpForm;