import React, { useEffect, useState } from "react";
import { Modal, Form, FormControl, InputGroup, Button } from "react-bootstrap";
import coingeckoApi from "../apis/coingeckoApi";
import "../styles/home.css";

const AddCryptoModal = (props) => {
  const [cryptos, setCryptos] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState("");

  useEffect(() => {
    const getCryptos = async () => {
      try {
        const response = await coingeckoApi.get(
          "coins/list?include_platform=true/"
        );
        console.log(response);
        setCryptos(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getCryptos();
  }, []);
  return (
    <Modal
      {...props}
      size="lg"
      arial-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Crypto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <Form>
            <div className="d-flex justify-content-center mb-2"></div>
            <div className="d-flex justify-content-center pr-3 pl-3">
              <FormControl
                as="select"
                onChange={(e) => setSelectedCrypto(e.target.value)}
              >
                <option disabled selected>
                  Select crypto
                </option>
                {cryptos &&
                  cryptos.map((e) => {
                    return (
                      <option key={e.name} value={e.name}>
                        {e.name}
                      </option>
                    );
                  })}
              </FormControl>
            </div>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-add">Add Crypto</button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCryptoModal;
