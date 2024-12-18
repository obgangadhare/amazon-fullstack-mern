import React,{Component} from "react";
import amazon_logo from './images/amazon_logo.png';

import './Footer.css';
import './mqf.css';
class Footer extends Component{ // React.Component
    render(){
        return(
            <footer >
            <div className="foot-panel1">
            <a className="backtopcss" href="#backtotop">Back To Top</a>
            </div>
            <div className="foot-panel2">
                <ul>
                    <p>Get to Know Us</p>
                    <a>About Us</a>
                    <a> Careers</a>
                    <a> Press Releases</a>
                    <a> Amazon Science</a>
                </ul>
                <ul>
                    <p>Connect with Us</p>
                    <a>Facebook</a>
                    <a> Twitter</a>
                    <a> Instagram</a>
    
                </ul>
                
                
                <ul className="footsmall">
    
                    <p>Make Money with Us</p>
                    <a>Sell on Amazon</a>
                    <a> Advertise Your Products</a>
                    <a> Amazon Pay on Merchants</a>
    
    
                </ul>
                <ul className="footsmall">
                    <p>Let Us Help You</p>
                    <a>COVID-19 and Amazon</a>
                    <a>Your Account</a>
                    <a> Amazon App Download</a>
                    <a>Help</a>
    
                </ul>
                
            </div>
            <div className="foot-panel3">
                <div ><img className="logo1" src= {amazon_logo}/></div>
            </div>
            <div className="foot-panel4">
                <div className="pages">
                    <a>Conditions of use</a>
                    <a>Privacy Notice</a>
                    <a>Your Ads Privacy Choices</a>
                </div>
                <div className="copyright">
                    © 1996-2024, Amazon.com, Inc. or its affiliates
                </div>
            </div>
        </footer>
        );
    }
};

export default Footer;