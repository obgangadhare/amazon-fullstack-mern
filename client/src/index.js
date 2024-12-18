import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './views/Store/store'; // Updated for proper path
import './index.css';
import App from './App';
import Signup from './views/Signup/Signup';
import Login from './views/Loginpage/Login';
import CartPage from './views/Store/cart'; // Make sure you import CartPage

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<CartPage />} />  {/* Added cart route */}
            </Routes>
        </Router>
    </Provider>
);
