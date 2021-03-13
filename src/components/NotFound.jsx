import React from "react";
import NavBar from "./NavBar";

const NotFound = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <div className="card mt-3">
          <div className="card-body vertical-center ">
            <h1 className="card-title">404 - Not Found</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
