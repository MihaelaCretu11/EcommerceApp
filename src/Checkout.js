import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal"

const Checkout = () => {
  // dispatch is used when you need to manipulate de data layer
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">

      <div className="checkout_left">
        <img
          src="https://ncrts.com/public/images/holiday-shopping.jpg"
          alt=""
          className="checkout_ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To but one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>

            {/* list out all of the ckeckout products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
          <div className="checkout_right">
              <Subtotal/>
          </div>
      ) }
    </div>
  );
};

export default Checkout;
