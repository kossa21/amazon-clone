import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js';

function Checkout() {
    const [{basket, user}] = useStateValue();
    console.log("Basket is: >>>", basket);

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad" alt="img"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your shopping Basket</h2>
                    
                    {basket?.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
