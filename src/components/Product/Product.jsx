import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    console.log(props)
    const { img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><i>by: {seller}</i></p>
                <p><strong>${price}</strong></p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className='product-button' onClick={()=>props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to card
                </button>
            </div>
        </div>
    );
};

export default Product;