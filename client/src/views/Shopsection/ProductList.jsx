import React from "react";
import './ProductList.css';
import './mqprod.css';
import { Link } from "react-router-dom";

const ProductList = (prodlist) =>{     
    const renderList = ({prodlist}) => { 
        if(prodlist){                     
            return prodlist.map((data)=>{ 
                return(   
                   
                      <div key={data.id} >
                        <div className="cardbox">
                        <span className="cardboxhead">{data.heading}</span>
                            <div className="cardboximg">
                            <Link to ={data.path} ><img className="imgsize" src={data.img} alt={data.heading}/></Link>  
                            </div>
                         
                            </div>
                         </div>
                        
                               )
            })
        }
    }
    return(
      
            <div className="shopbox">
                {renderList(prodlist)}
            </div>
       
    )
}
export default ProductList;