import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log('product added', product);
        const newCart = [...cart, product];
        setCart(newCart);

    }
    //local storage
    // localStorage.setItem('cart', JSON.stringify([...cart, products]));
    return (
        <div>
            <div className="search-container">
                <div>
                    <input
                        type="text"
                        // onChange={handleSearch}
                        placeholder="Search Product" />
                    {/* <a className='main-search' href=""><FontAwesomeIcon icon={faSearch} /></a> */}
                </div>
                <a className='header-cart' href=""><FontAwesomeIcon icon={faShoppingCart} /><span>({ cart.length })</span></a>
            </div>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product =>
                            <Product
                                product={product}
                                handleAddProduct = {handleAddProduct}
                            >
                            </Product>)
                    }

                </div>
                <div className='card-container'>
                    <Cart cart={cart}></Cart>
                </div>

            </div>

        </div>

    );
};

export default Shop;