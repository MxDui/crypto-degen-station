import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import AddCryptoModal from "../components/AddCryptoModal";
import NavBar from "../components/NavBar";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
  }),
  fetchOptions: {
    mode: "no-cors",
  },
  cache: new InMemoryCache(),
});

const DAI_QUERY = gql`
  query tokens($tokenAddress: Bytes!) {
    tokens(where: { id: $tokenAddress }) {
      derivedETH
      totalLiquidity
    }
  }
`;

const ETH_PRICE_QUERY = gql`
  query bundles {
    bundles(where: { id: "1" }) {
      ethPrice
    }
  }
`;

const Home = () => {
  const { loading: ethLoading, data: ethPriceData } = useQuery(ETH_PRICE_QUERY);
  const { loading: daiLoading, data: daiData } = useQuery(DAI_QUERY, {
    variables: {
      tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
  });

  const daiPriceInEth = daiData && daiData.tokens[0].derivedETH;
  const daiTotalLiquidity = daiData && daiData.tokens[0].totalLiquidity;
  const ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice;

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="home">
      <NavBar></NavBar>
      <div className="container">
        <div className="vertical-center">
          <div className="row">
            <div className="col-sm">
              <h1>
                Dai price:{" "}
                {ethLoading || daiLoading
                  ? "Loading token data..."
                  : "$" +
                    // parse responses as floats and fix to 2 decimals
                    (
                      parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)
                    ).toFixed(2)}
              </h1>
              <h1>
                Dai total liquidity:{" "}
                {daiLoading
                  ? "Loading token data..."
                  : // display the total amount of DAI spread across all pools
                    parseFloat(daiTotalLiquidity).toFixed(0)}
              </h1>
              <button
                className="btn btn-add p-2 m-3"
                onClick={() => setModalShow(true)}
              >
                Add Crypto
              </button>
            </div>
          </div>
        </div>
        <AddCryptoModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        ></AddCryptoModal>
      </div>
    </div>
  );
};

export default Home;
