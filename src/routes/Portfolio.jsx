import React, { useEffect, useState } from "react";
import "../styles/home.css";
import AddCryptoModal from "../components/AddCryptoModal";
import NavBar from "../components/NavBar";

const Portfolio = () => {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <div>
          <button
            className="btn btn-add mt-3 float-right"
            onClick={() => setModalShow(true)}
          >
            Add Crypto
          </button>
        </div>
        <AddCryptoModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        ></AddCryptoModal>
      </div>
    </div>
  );
};

export default Portfolio;
