import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0)
    let shipping = 0;
    let vat = 0;

    if (total > 0) {
        shipping = 7.99;
        vat = 5;
    }

// Format number
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const totalVat = (total * vat) / 100;
    const grandTotal = formatNumber(total + shipping + totalVat);

    return (
        <div className='cart'>
            <div className='cart-name'>
                <h3>Order Summary</h3>
                <h4>Items Ordered: <strong>{cart.length}</strong> </h4>
            </div>

            <div className='pricing'>
            {/* <p>Shipping Cost: { shipping }</p>
            <p>Total Price: {formatNumber(total)}</p>
            <p><strong>Grand Total: {grandTotal} </strong></p> */}
            <table>
               <tr>
                    <td>Total Price:</td>
                    <td>{formatNumber(total)}</td>
                </tr>
                <tr>
                    <td>Shipping Cost:</td>
                    <td>{ shipping }</td>
                </tr>
                <tr>
                    <td>Vat(%):</td>
                    <td>{ vat }</td>
                </tr>

                <tr>
                    <td><strong>Grand Total:</strong></td>
                    <td>{grandTotal}</td>
                </tr>

                </table>
                    <button className='order-button'>Place Order</button>

            </div>

        </div>
    );
};

export default Cart;