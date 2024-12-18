import React,{useState} from "react";
import "./Login.css";
import "./mql.css";
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const [message, setMessage] = useState('');
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post('https://amazonserver-rox2.onrender.com/login', formData)
          .then((res) => {
            const { user } = res.data;
            localStorage.setItem('isLoggedIn', 'true'); 
            localStorage.setItem('user', JSON.stringify(user)); 
    
            setMessage('Login successful!');
            navigate('/'); 
            alert("Login successfully")
          })
          .catch((err) => {
            setMessage(err.response?.data?.message || 'Error logging in');
          });
      };
    return (
        <div className="fulllog">
           
            <div id="mid-div">
                <div>
                    <img
                        src="https://th.bing.com/th/id/OIP.ic6vXZ809mtBUKu_8dknPAHaC4?w=312&h=136&c=7&r=0&o=5&pid=1.7"
                        alt="Logo"
                    />
                </div>
                <form onSubmit={handleSubmit}>
                <div id="m1">
                    <div id="m2">
                        <div>
                            <h1 id="si">Sign in</h1>
                            <div className="edd">
                                <div className="ema">
                                    <label htmlFor="email">
                                        email 
                                    </label>
                                    <br />
        <input
          type="email"
          name="email"
          
          value={formData.email}
          onChange={handleChange}
          required
        />
                                    <br />
                                </div>
                                <div className="ema">
                                    <label htmlFor="email">
                                    Password
                                    </label>
                                    <br />
                                    <input
          type="password"
          name="password"
          
          value={formData.password}
          onChange={handleChange}
          required
        />
                                    <br />
                                </div>
                                <button type="submit" id="but">Continue</button>
                                <p>
                                    By continuing, you agree to Amazon's Conditions of
                                    <br />
                                    Use and Privacy Notice.
                                </p>
                                <ul className="rem">
                                    <li><a href="#d">Need help?</a></li>
                                </ul>
                                <hr />
                                <h3 id="bw">Buying for work?</h3>
                                <a id="ba" href="">
                                    Shop on Amazon Business
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
      
                <div className="help-section">
                    <div className="line"></div>
                    <div className="content">New to Amazon?</div>
                    <div className="line"></div>
                </div>
               <Link className="but23" to="/Signup"> <div className="but1">
                    <button >Create Your Amazon Account?</button>
                </div></Link>
            </div>
            {message && <p className="messagelogin">{message}</p>}
         
        </div>
    );
};

export default Login;
