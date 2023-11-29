import React, { useState } from "react";
import FlightDetail from "./FlightDetail";
import FareInfo from "./FareInfo";
import ChunkyCardHeader from "./ChunkyCardHeader";

function ChunkyCard(props) {
  let cs1 = {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    marginLeft: "6px",
  };

  let highlight = {
    color: "#4D46FA",
    fontWeight: 600,
    textDecoration: "underline",
    ...cs1,
  };

  let fade = {
    ...cs1,
    opacity: "0.4",
  };

  const [display, setDisplay] = useState(true);

  return (
    <div
      style={{
        borderRadius: "12px",
        background: "#FFF",
        width: "933px",
        height: "331px",
        flexShrink: 0,
        marginLeft: "510px",
        paddingBottom: "27px",
        marginTop: "5px",
      }}
    >
   <ChunkyCardHeader price={props.price}  Freebag={props.Freebag}/>
      <div
        style={{
          marginLeft: "15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <p
            style={{
              ...(display ? highlight : fade),
              cursor: "pointer",
            }}
            onClick={() => {
              setDisplay(true);
            }}
          >
            FlIGHT DETAIL
          </p>
          <div
            style={{
              ...(display ? fade : highlight),
              cursor: "pointer",
            }}
            onClick={() => {
              setDisplay(false);
            }}
          >
            FARE INFO
          </div>
        </div>
        <div
          style={{
            flex: 1,
            ...cs1,
            height: "1px",
            opacity: "0.4",
            background: "black",
            marginRight: "20px",
            marginLeft: "31px",
          }}
        ></div>
      </div>
      {display ? <FlightDetail FlightNumber={props.FlightNumber}/> : <FareInfo />}
    </div>
  );
}

export default ChunkyCard;
