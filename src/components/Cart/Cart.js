import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 40){
        shipping = 0;
    }
    else if(total > 20){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    
    const tax = (total / 10).toFixed(2);

    // const total_with_shipping = (total + shipping).toFixed(3);
    const grandTotal = (total + shipping + parseFloat(tax)).toFixed(2)

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber (total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            
            {/* <p>Total with shipping : {total_with_shipping}</p>
            <p>Grant Total: {grant_total}</p> */}
        </div>
    );
};

export default Cart;