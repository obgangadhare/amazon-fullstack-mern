import React,{Component} from 'react';

import JSON from './db.json'; 
import ProductList from './ProductList';
import './Shopsection.css';
import './mqs.css';


class Shopsection extends Component{
    constructor(){
        super();
        this.state = { 
           
            products: JSON
        }
    }
    render(){
        return(
            <div className='shopsec'>
                
              <ProductList prodlist={this.state.products}/>
            </div>
        )
    }
    
}
export default Shopsection;