import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://i.imgur.com/dEm14Rc.jpg"
        alt="banner_img"
      />

      {/* product id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id={12345}
          title="Seagate Portable 2TB External Hard Drive Portable HDD"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL480_QL65_.jpg"
        />
        <Product
          id={12345}
          title="essence | Lash Princess False Lash Effect Mascara | Gluten & Cruelty Free"
          price={4.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71clFOCQXlL._AC_UL480_QL65_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id={12345}
          title="CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | Normal | Fragrance Free | "
          price={16.25}
          rating={5}
          image="https://m.media-amazon.com/images/I/61S7BrCBj7L._AC_UL480_QL65_.jpg"
        />
        <Product
          id={12345}
          title="Amazon Basics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 14 Deep Pockets - Queen"
          price={19.996}
          rating={3}
          image="https://m.media-amazon.com/images/I/81RY+mU4+fL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id={12345}
          title="Amazon Basics Collapsible Fabric Storage Cubes Organizer with Handles, Beige - Pack of 6"
          price={18.69}
          rating={2}
          image="https://m.media-amazon.com/images/I/916dIt3AmOL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id={12345}
          title="VIZIO 75-Inch P-Series Premium 4K UHD Quantum Color LED HDR Smart TV with Apple AirPlay 2"
          price={189.65}
          rating={5}
          image="https://m.media-amazon.com/images/I/91xx5m4RUGL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
