import React from "react";
import Card1 from "./Card.jsx";
import Header from "./Header.jsx";
import Navigator from "./Navigator.jsx";
import Filter from "./Filter.jsx";
import ChunkyCard from "./ChunkyCard.jsx";
import SmallCard from "./SmallCard.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";
import Test from './Test.jsx'
import { useEffect, useState } from "react";

function Flights(props) {
  const [flights, setFlights] = useState([]);

  const getFlightList = () => {
    axios
      .get("https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a")
      .then((res) => {
        setFlights(res.data.Flights);
      });
  };
  useEffect(() => {
    getFlightList();
  }, []);
  console.log(flights)
  return (
    <div>
      <Header />
      <Navigator/>
      <div style={{ background: "#E8E3E2", position: "relative" }}>
        <Filter />
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
          {flights.map((item) => {return <ChunkyCard FlightNumber={item.FlightNumber} price={item.PriceAdult} Freebag={item.Freebag}/>})}
          </div>
          <SmallCard />
        </div>
        <div style={{ position: "relative", bottom: "65px" }}>
          <Card1 name="VIETNAM AIRLINES" type="FLIGHT DETAIL" />
          <Card1 image="./logo1.svg" type="FARE INFO" />
          <Card1 name="VIETNAM AIRLINES" type="FLIGHT DETAIL" />
          <Card1 type="FARE INFO" />
          <Card1 name="VIETNAM AIRLINES" type="FLIGHT DETAIL" />
          <Card1 type="FARE INFO" />
        </div>
        <Footer />
      </div>
      <Test/>
    </div>
  );
}

export default Flights;
