import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch,} from 'react-redux';
import { addToCart} from '../Store/cartslice';

   import Modal from "../Modal/Modal";
import "./Panel.css";
import "./mqp.css";

const Panel = () => {
    const [shirts, setShirts] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [filteredShirts, setFilteredShirts] = useState([]);
    const [filteredElectronics, setFilteredElectronics] = useState([]);
    const [filteredMobiles, setFilteredMobiles] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null); 
    useEffect(() => {
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

    const handleCategoryClick = (category) => {
        if (category === "shirts") {
            setFilteredShirts(shirts);
            setFilteredElectronics([]);
            setFilteredMobiles([]);
        } else if (category === "electronics") {
            setFilteredElectronics(electronics);
            setFilteredShirts([]);
            setFilteredMobiles([]);
        } else if (category === "mobiles") {
            setFilteredMobiles(mobiles);
            setFilteredShirts([]);
            setFilteredElectronics([]);
        }
    };
    const dispatch = useDispatch();
   
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
       
    };
    const handleImageClick = (item) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    return (
        <div>
            <div className="panel ">
                <div className="panelbig border12">
                    <div className="panel-all">
                        <i className="fa-solid fa-bars"></i>All
                    </div>
                </div>

                <button>  <div onClick={() => handleCategoryClick("shirts")} className=" shirtbutton border12">
                    Fashion
                   </div> </button>
                   <button> <div onClick={() => handleCategoryClick("mobiles")} className=" mobilesbutton border12">
                Mobiles
                </div></button>
                <button> <div onClick={() => handleCategoryClick("electronics")} className="elebutton border12">
                    Electronics
                </div></button>
            </div>

            <div className="content-container">
                <div className="shirt-container">
                    {filteredShirts.map(shirt => (
                        <div className="card" key={shirt._id}>
                            <img src={shirt.img} alt={shirt.heading} onClick={() => handleImageClick(shirt)} />
                            <div className="head12">{shirt.heading}</div>
                            <div className="description">{shirt.description}</div>
                            <div className="price1234">
                                <span className="pricep">Rs</span>{shirt.price}
                                <span className="pricep1">M.R.P: Rs.2099</span>
                            </div>
                            <div className="button-container">
                                <button onClick={() => handleAddToCart(shirt)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="electronics-container">
                    {filteredElectronics.map(elect => (
                        <div key={elect._id}>
                            <div className="cardboxz">
                                <div className="cardboximgz">
                                    <img className="imgsizez" src={elect.img} alt={elect.description}onClick={() => handleImageClick(elect)}  />
                                </div>
                                <div className="cardboxdescriptz">{elect.description}</div>
                                <div className="pricez">Rs.{elect.price}</div>
                                <div>
                                    <button className="button-container" onClick={() => handleAddToCart(elect)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mobiles-container">
                    {filteredMobiles.map(mob => (
                        <div key={mob._id}>
                            <div className="cardboxz">
                                <div className="cardboximgz">
                                    <img className="imgsizez" src={mob.img} alt={mob.type}onClick={() => handleImageClick(mob)}  />
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
            </div>
            <Modal item={selectedItem} onClose={handleCloseModal} />
        </div>
    );
};
export default Panel;