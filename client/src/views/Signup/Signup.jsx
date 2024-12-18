import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./Signup.css";
import "./mqsign.css";

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
      });
      const [message, setMessage] = useState('');
      const navigate = useNavigate();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://amazonserver-rox2.onrender.com/signup', formData)

          .then((res) => {
            setMessage(res.data.message);
            navigate('/login');
            alert("Account created successfully")
            setFormData({
              email: '',
              password: '',
              name: ''
            });
          })
          .catch((err) => {
            console.error('Signup error:', err.response?.data || err.message);
            setMessage(err.response?.data?.message || 'Error signing up');
        });
        
      };
    
    return (
        <div className='wholesignup' >
            <div className="logo">
        <img className='logoimage' src="https://th.bing.com/th/id/OIP.ic6vXZ809mtBUKu_8dknPAHaC4?w=312&h=136&c=7&r=0&o=5&pid=1.7"/>
    </div>
    <div className="myFrom">
    <form onSubmit={handleSubmit}>
        <h2>Create account</h2>
        <label><b>Your name</b></label><br/>
        <input type="text"
        name='name'
        placeholder='First name and Last name'
        value={formData.name}
        onChange={handleChange}
          required
        className="name"/><br/><br/>
        <div className="v2"></div>
        <label><b>email</b></label><br/>
        <input type="email"
         name="email"
         placeholder="email"
         value={formData.email}
         onChange={handleChange}
         required
         className="mobile"/><br/><br/>
        <div className="v1"></div>
        <label><b>Password</b></label><br/>
        <input type="password"
         name="password"
        
         value={formData.password}
         onChange={handleChange}
         required
          className="pass" placeholder="At least 6 characters"/><br/>
        <br/>
        <div className="valclassName"></div>
      
        <button type="submit"
        className="button">Create your Amazon account</button><br/><br/>
        <p class="dlr">By creating an account or logging in,you agree to Amazon's Conditions of Use and Privacy Policy.</p>
        </form>
        {message && <p className="message">{message}</p>}
</div>
 </div>
    );
};

export default Signup;
