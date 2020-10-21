import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product( {id, title, image, price, rating} ) {
    //UseStateValue gives back the information of the data layer and allow to perform operations on it
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //Dispatch (send) the item into the data layer 
        dispatch({
            //Shoot an action into the data layer
            type: 'ADD_TO_BASKET',
            item: {
                id: id, 
                title: title,
                price: price, 
                rating: rating,
                image: image
            }
        })
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                
                <p className="product_price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {Array(rating).fill().map((_, i)=> (
                        <span key={i} role="img" aria-label="star">⭐</span>
                    ))}
                    
                </div>
            </div>

            <img src={image} alt="cosa"/>
            
            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    );
}

export default Product
