import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        height: "80px",
        flexShrink: 0,
        background: "#4D46FA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "400",
      }}
    >
      <div
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "22px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          fontFamily: "Montserrat",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          Baycungban
        </Link>
        <img style={{ paddingLeft: "14px" }} src={"./vietnam.svg"} alt=""></img>
        <img style={{ paddingLeft: "14px" }} src={"./united-states.svg"} alt=""></img>
        <div
          style={{
            color: "white",
            fontSize: " 14px",
            fontWeight: " 400",
            lineHeight: " normal",
            letterSpacing: " 0.7px",
            paddingLeft: "148px",
          }}
        >
          Promotion
        </div>
        <div
          style={{
            color: "white",
            fontSize: " 14px",
            fontWeight: " 400",
            letterSpacing: " 0.7px",
            paddingLeft: "15px",
            padding: "10px 15px",
            borderRadius: "100px",
            background: "rgba(255, 255, 255, 0.10)",
            marginLeft: "30px",
          }}
        >
          Flight Schedule
        </div>
        <div
          style={{
            color: "white",
            fontSize: " 14px",
            fontWeight: " 400",
            lineHeight: " normal",
            letterSpacing: " 0.7px",
            paddingLeft: "30px",
          }}
        >
          About us
        </div>
        <div
          style={{
            color: "white",
            fontSize: " 14px",
            fontWeight: " 400",
            lineHeight: " normal",
            letterSpacing: " 0.7px",
            paddingLeft: "30px",
          }}
        >
          Payment Guide
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            background: "white",
            marginLeft: "215px",
            color: "#4D46FA",
            width: "96px",
            fontSize: "14px",
            padding: "10px 16px",
          }}
        >
          Booking now
        </div>
      </div>
    </div>
  );
}

export default Header;
