import React from "react";
import NavBar from "../components/NavBar";

const Wishlist = () => {
  return (
    <div>
      <NavBar></NavBar>

      <div className="container mt-3">
        <div className="card">
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
