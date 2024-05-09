import { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
    // State variables to hold form data
    const [formData, setFormData] = useState({
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
        email: '',
        password: ''
      });
    };
  
    return (
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default LoginForm;
