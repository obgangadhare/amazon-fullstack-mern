import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart} from '../Store/cartslice';
import amazon_logo from './images/amazon_logo.png';
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import './Navbar.css';
import './Card.css';
import './mqn.css';
import './mqc.css';


const Navbar = () => {
    const [shirts, setShirts] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [filteredShirts, setFilteredShirts] = useState([]);
    const [filteredElectronics, setFilteredElectronics] = useState([]);
    const [filteredMobiles, setFilteredMobiles] = useState([]);
    const [inputType, setInputType] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
   const [selectedItem, setSelectedItem] = useState(null); 

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(loggedIn === 'true');
       
        axios.get('https://amazonserver-rox2.onrender.com/shirts')
            .then((res) => setShirts(res.data.shirts))
            .catch(err => console.error("Error fetching shirts data:", err));

        axios.get('https://amazonserver-rox2.onrender.com/electronics')
            .then((res) => setElectronics(res.data.electronics))
            .catch(err => console.error("Error fetching electronics data:", err));

        axios.get('https://amazonserver-rox2.onrender.com/mobiles')
            .then((res) => setMobiles(res.data.mobiles))
            .catch(err => console.error("Error fetching mobiles data:", err));
    }, []);

    const handleInputChange = (event) => {
        setInputType(event.target.value);
    };

    const handleSearch = () => {
        const typeToSearch = inputType.trim().toLowerCase();
    
        if (typeToSearch === "shirts") {
            setFilteredShirts(shirts);
            setFilteredElectronics([]);
            setFilteredMobiles([]);
        } else if (typeToSearch === "electronics") {
            setFilteredElectronics(electronics);
            setFilteredShirts([]);
            setFilteredMobiles([]);
        } else if (typeToSearch === "mobiles") {
            setFilteredMobiles(mobiles);
            setFilteredShirts([]);
            setFilteredElectronics([]);
        } else {
            setFilteredShirts(shirts.filter(shirt => shirt.type.toLowerCase() === typeToSearch));
            setFilteredElectronics(electronics.filter(elect => elect.type.toLowerCase() === typeToSearch));
            setFilteredMobiles(mobiles.filter(mob => mob.type.toLowerCase() === typeToSearch));
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/');
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

   const handleAddToCart = (item) => {
          dispatch(addToCart(item));
         
      };
    
      const handleImageClick = (item) => {
        setSelectedItem(item);
    };
    const handleCloseModal = () => {
        setSelectedItem(null);
    };
     
     const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <div id="backtotop" className="navbar1">
                <div className="border1">
                    <Link className="panelname" to="/" onClick={() => window.location.reload()}>
                        <img className="nav1-logo" src={amazon_logo} alt="Amazon Logo" />
                    </Link>
                </div>

                <div className="nav1-address border1 togglebardiv">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Update Location</p>
                </div>

                <div className="nav1-search">
                    <select className="search-select">
                        <option>All categories</option>
                        <option>Amazon Fashion</option>
                        <option>Beauty</option>
                        <option>Electronics</option>
                        <option>Books</option>
                    </select>
                    <input
                        type="text"
                        name='searchbox'
                        value={inputType}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        placeholder="search Amazon.in"
                        className="search-input"
                    />
                    <button className="search-icon" onClick={handleSearch}>
                        <div>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </button>
                </div>

                {isLoggedIn ? (
                    <div className="nav1-signina border1" onClick={handleLogout}>
                        <p className="addd3">Sign Out<br />Accounts & Lists</p>
                    </div>
                ) : (
                    <Link to="/login" className="agd">
                        <div className="nav1-signina border1">
                            <p className="addd3">Hello, sign in<br />Accounts & Lists</p>
                        </div>
                    </Link>
                )}

                <Link className="agd" to="/">
                    <div className="nav1-re border1 togglebardiv">
                        <p className="addd3">Returns<br />& Orders</p>
                    </div>
                </Link>

                <div className="nav1-cart border1">
    <Link to="/cart" className="cart-link">
        <div className="carticon">
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="countcart">{totalCartItems}</div>
        
    </Link>
   
</div>


                <div className="togglenav1" onClick={toggleSidebar}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="sidebar-content">
                    <button onClick={toggleSidebar} className="close-btn">X</button>
                    <ul>
                        <li>Settings</li>
                        <li>Customer Service</li>
                        <li>Orders</li>
                    </ul>
                </div>
            </div>

            <div className="shirt-container">
                {filteredShirts.length > 0 && filteredShirts.map(shirt => (
                    <div className="card" key={shirt._id}>
                        <img src={shirt.img} alt={shirt.heading} onClick={() => handleImageClick(shirt)} />
                        <div className="head12">{shirt.heading}</div>
                        <div className="description">{shirt.description}</div>
                        <div className="price1234">
                            <span className="pricep">Rs</span>{shirt.price}
                            <span className="pricep1">M.R.P: Rs.2099</span>
                        </div>
                        <div >
                            <button className="button-container" onClick={() => handleAddToCart(shirt)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="electronics-container">
                {filteredElectronics.length > 0 && filteredElectronics.map(elect => (
                    <div key={elect._id}>
                        <div className="cardboxz">
                            <div className="cardboximgz">
                                <img className="imgsizez" src={elect.img} alt={elect.description} onClick={() => handleImageClick(elect)} />
                            </div>
                            <div className="cardboxdescriptz">{elect.description}</div>
                            <div className="pricez">Rs.{elect.price}</div>
                            <div>
                                <button className="button-container"  onClick={() => handleAddToCart(elect)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mobiles-container">
                {filteredMobiles.length > 0 && filteredMobiles.map(mob => (
                    <div key={mob._id}>
                        <div className="cardboxz">
                            <div className="cardboximgz">
                                <img className="imgsizez" src={mob.img} alt={mob.type}  onClick={() => handleImageClick(mob)}/>
                            </div>
                            <div className="cardboxdescriptz">{mob.description}</div>
                            <div className="pricez">Rs.{mob.price}</div>
                            <div>
                                <button className="button-container" onClick={() => handleAddToCart(mob)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
            <Modal item={selectedItem} onClose={handleCloseModal}/>
        </div>
    );
};

export default Navbar;
