import React from 'react'
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { TiMail } from "react-icons/ti";
import { BiLogoFacebook } from "react-icons/bi";

function Footer() {
  return (
      <div
          style={{
            display: "flex",
            gap: "20pxs",
            alignItems: "center",
            marginLeft: "510px",
            position: "relative",
            bottom: "30px",
            fontSize: "14px",
          }}
        >
          <p style={{ display: "flex", paddingRight: "30px" }}>
            <div
              style={{
                background: "#4D46FA",
                borderRadius: "100%",
                height: "18px",
                width: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                marginRight: "5px",
              }}
            >
              <BsFillTelephoneFill style={{ fontSize: "10px" }} />
            </div>{" "}
            Call us: +84 908 02 02 58
          </p>
          <div
            style={{
              background: "#4D46FA",
              borderRadius: "100%",
              height: "18px",
              width: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              marginRight: "5px",
            }}
          >
            <TiMail style={{ fontSize: "13px" }} />
          </div>{" "}
          Call us: +84 908 02 02 58
          <div
            style={{
              display: "flex",
              letterSpacing: "1.4px",
              alignItems: "center",
              gap: "10px",
              marginLeft: "640px",
            }}
          >
            <p>Follow us</p>
            <div
              style={{ width: "40px", height: "1px", background: "black" }}
            ></div>
            <div
              style={{
                background: "#4D46FA",
                borderRadius: "100%",
                height: "18px",
                width: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                marginRight: "5px",
              }}
            >
              <BiLogoFacebook />
            </div>
            <div
              style={{
                background: "#4D46FA",
                borderRadius: "100%",
                height: "18px",
                width: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                marginRight: "5px",
                fontSize: "12px",
              }}
            >
              <BsInstagram />
            </div>
          </div>
        </div>
  )
}

export default Footer