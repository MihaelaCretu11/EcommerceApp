import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, rating, image, price }) {
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        }
        );
    };
  
    return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {
            // Array-> built-in javascript funtion
            // avem un array plin de empty values si apoi prin map trece prin fiecare
            Array(rating)
              .fill()
              // folosec _ pentru ca nu ma intereseaza de cate ori se trece prin ele, adica nu am un nr pt i cum am la for
              .map((_) => (
                <span>⭐</span>
              ))
          }
        </div>
        </div>
        
        <img
        className="product_img"
          src={image}
          alt=""
        />
        <button className="product_button " onClick={addToBasket}>Add to basket</button>
      
    </div>
  );
}

export default Product;
