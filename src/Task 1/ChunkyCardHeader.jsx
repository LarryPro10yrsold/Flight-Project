import React from "react";
import Timeline from "./Timeline";

function ChunkyCardHeader(props) {
  let cs2 = {
    color: "#4D46FA",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };
  return (
    <div
      style={{
        marginLeft: "15px",
        paddingTop: "23px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src="./logo1.svg" alt="./logo1.svg" />
      <p
        style={{
          fontSize: "16px",
          letterSpacing: "1.4px",
          fontWeight: "600",
          marginLeft: "12px",
          width: "500px",
          display: "flex",
        }}
      >
        BAMBOO AIRWAYS
      </p>
      <div style={{ marginRight: "35px" }}>
        <Timeline />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
          }}
        >
          {" "}
          <img src="suitcase.svg" alt="suit" />
          <p
            style={{
              fontWeight: "300",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              margin: "0px",
            }}
          >
            Baggage
            <p style={{ ...cs2, fontWeight: "700", margin: "0px", width:"130px" }}>{props.Freebag}</p>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            marginTop: "11px",
          }}
        >
          {" "}
          <img src="food.svg" alt="food" />
          <p
            style={{
              fontWeight: "300",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              margin: "0px",
            }}
          >
            In-flight
            <p style={{ ...cs2, fontWeight: "700", margin: "0px" }}>Meal</p>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "58px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
          {" "}
          <p
            style={{
              fontWeight: "300",
              display: "flex",
              alignItems: "center",
              margin: "0px",
              fontSize: "14px",
              textDecorationLine: "line-through",
              opacity: 0.5,
              whiteSpace: "nowrap",
            }}
          >
              {props.price.toLocaleString()} vnd
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            marginTop: "11px",
          }}
        >
          {" "}
          <p
            style={{
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              margin: "0px",
              color: "#F06336",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            1,322,000 vnd
          </p>
        </div>
      </div>
      <div
        style={{
          color: "#F06336",
          fontSize: "14px",
          fontWeight: 600,
          borderRadius: "12px",
          background: "rgba(240, 99, 54, 0.10)",
          padding: "12px",
          marginRight: "20px",
        }}
      >
        Choose
      </div>
      <div />
    </div>
  );
}

export default ChunkyCardHeader;
