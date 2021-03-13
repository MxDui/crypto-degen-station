import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import coingeckoApi from "../apis/coingeckoApi";
import "../styles/wishlist.css";

const Wishlist = () => {
  let wishlistArr = ["bitcoin", "ethereum"];
  let wishlistCards = [];
  const [wishlistCardsArr, setWishListCardsArr] = useState("");

    const getWishlist = async () => {
      for (let index = 0; index < wishlistArr.length; index++) {
        const response = await coingeckoApi.get(
          `/coins/${wishlistArr[index]}?localization=false%20&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
        );
        wishlistCards.push(response.data);
        console.log(response.data["image"]);
      }
      setWishListCardsArr(wishlistCards);
    };
    
    getWishlist()

  console.log(wishlistCardsArr);

  const renderCardsWishList = (card, index) => {
    return (
      <div className="card mt-2" key={index}>
        <img src={card["image"]["large"]} class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text">{card.symbol}</p>
          <p className="card-text">
            {card["market_data"]["current_price"]["usd"]}
          </p>
          <a href="" className="btn">
            Go somewhere
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="container mt-3">
                {wishlistCardsArr.map(renderCardsWishList)}

        <div className="card mt-2">
          <img src="..." alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">Quick example</p>
            <a href="" className="btn ">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card mt-2">
          <img src="..." alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">Quick example</p>
            <a href="" className="btn ">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
