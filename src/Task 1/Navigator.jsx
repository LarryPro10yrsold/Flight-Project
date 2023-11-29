import React from "react";
import { BiSearch } from "react-icons/bi";

function Navigator() {
  let cs1 = {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    marginLeft: "6px",
  };
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
        height: "80px",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#FFF",
          height: "100px",
          marginLeft: "510px",
          marginTop: "21px",
          marginRight: "59px",
        }}
      >
        <p
          style={{
            ...cs2,
            fontWeight: "bold",
            fontSize: "16px",
            marginTop: "19px",
            marginRight: "1px",
            marginBottom: "0px",
          }}
        >
          Da Nang (DAD)
        </p>
        <p
          style={{
            ...cs1,
            paddingLeft: "0px",
            fontSize: "12px",
            marginTop: "7px",
            fontWeight: "normal",
            marginLeft: "0px",
          }}
        >
          Fri, 22 Mar, 2022
        </p>{" "}
      </div>
      <div style={{ color: "#F4F2F9" }}>
        <img src={"./switch.svg"} alt="img"></img>
      </div>
      <div
        style={{
          background: "#FFF",
          height: "100px",
          marginTop: "21px",
          marginLeft: "59px",
        }}
      >
        <p
          style={{
            ...cs2,
            fontWeight: "bold",
            marginLeft: "20px",
            fontSize: "16px",
            marginTop: "19px",
            marginRight: "1px",
            marginBottom: "0px",
          }}
        >
          Ho Chi Minh (SGN)
        </p>
        <p
          style={{
            ...cs1,
            marginLeft: "20px",
            paddingLeft: "0px",
            fontSize: "12px",
            marginTop: "7px",
            fontWeight: "normal",
          }}
        >
          Fri, 22 Mar, 2022
        </p>{" "}
      </div>
      <div
        style={{ marginLeft: "94px", display: "flex", alignItems: "center" }}
      >
        <p
          style={{
            ...cs1,
            margin: "0px",
          }}
        >
          Round-trip
        </p>
        <div
          style={{
            width: "1px",
            height: "24px",
            opacity: 0.1,
            background: "#000",
            marginLeft: "15px",
          }}
        ></div>
        <p
          style={{
            ...cs1,
            display: "flex",
            alignItems: "center",
            gap: "2px",
            paddingLeft: "15px",
            margin: "0px",
          }}
        >
          <p style={{ ...cs2, margin: "0px" }}>O2</p> Adult,{" "}
          <p
            style={{
              ...cs2,
              margin: "0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            O1
          </p>{" "}
          children
        </p>
        <div
          style={{
            width: "1px",
            height: "24px",
            opacity: 0.1,
            background: "#000",
            marginLeft: "15px",
          }}
        ></div>
        <p
          style={{
            ...cs1,
            display: "flex",
            alignItems: "center",
            paddingLeft: "15px",
            margin: "0px",
          }}
        >
          Business Class{" "}
        </p>
      </div>
      <div
        style={{
          borderRadius: "12px",
          background: "#F06336",
          display: "inline-flex",
          padding: "10px 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          color: "white",
          fontWeight: "600",
          marginLeft: "149px",
        }}
      >
        Change Flights <BiSearch />
      </div>
    </div>
  );
}

export default Navigator;
