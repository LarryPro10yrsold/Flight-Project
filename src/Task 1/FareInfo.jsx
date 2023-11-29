import React from "react";

function FareInfo() {
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
        marginLeft: "15px",
        display: "flex",
        alignItems: "center !important",
        flexDirection: "row",
        gap: "174px",
      }}
    >
      <div style={{}}>
        <p style={{ ...cs1, margin: "20px 0px 0px 0px" }}>CONDITIONS</p>
        <div style={{ display: "flex", marginTop: "23px" }}>
          <img src="./logo1.svg" alt="./logo1.svg" />
          <p
            style={{
              fontSize: "16px",
              letterSpacing: "1.4px",
              fontWeight: "600",
              marginLeft: "12px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            BAMBOO AIRWAYS
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ ...cs1, fontWeight: "300", margin: "0px" }}>QH-183</p>
              <p
                style={{
                  fontWeight: "300",
                  display: "flex",
                  alignItems: "center",
                  margin: "0px",
                }}
              >
                <div
                  style={{
                    borderRadius: "100px",
                    background: "black",
                    width: "3px",
                    height: "3px",
                    margin: "0px 5px 0px 5px",
                  }}
                ></div>
                Economy
              </p>
            </div>
          </p>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "5px",
            marginTop: "14px",
          }}
        >
          <p style={{ margin: "0px" }}>Da Nang</p>
          <img src="line.svg" alt="" />
          <p style={{ margin: "0px" }}>Ho Chi Minh City</p>
        </div>
        <p
          style={{
            ...cs2,
            fontWeight: "400",
            margin: "0px",
            marginTop: "5px",
          }}
        >
          Economy
        </p>
        <p
          style={{
            fontWeight: "300",
            margin: "0px",
            marginTop: "18px",
            fontSize: "12px",
          }}
        >
          Non - Refundable
        </p>
      </div>
      <div>
        <p style={{ fontWeight: "600", marginTop: "29px" }}>PRICE DETAILS</p>
        <div style={{ display: "flex", gap: "171px" }}>
          <div>
            <p
              style={{
                fontWeight: "300",
                marginTop: "0px",
                margin: "0px",
              }}
            >
              Adult Basic Fare (x1)
            </p>
            <p
              style={{
                fontWeight: "300",
                margin: "8px 0px 0px 0px",
              }}
            >
              Tax
            </p>
            <p
              style={{
                fontWeight: "300",
                margin: "8px 0px 0px 0px",
              }}
            >
              Regular Total
            </p>
            <p
              style={{
                fontWeight: "300",
                margin: "8px 0px 0px 0px",
                color: "#F06336",
              }}
            >
              Save
            </p>
          </div>
          <div>
            <p
              style={{
                fontWeight: "bold",
                margin: "0px",
                fontSize: "14px",
                marginTop: "0px",
              }}
            >
              1,326,000 vnd
            </p>
            <p
              style={{
                fontWeight: "300",
                marginTop: "8px !important",
                margin: "8px 0px 0px 0px",
              }}
            >
              Included
            </p>
            <p
              style={{
                fontWeight: "300",
                margin: "8px 0px 0px 0px",
              }}
            >
              1,326,000 vnd
            </p>
            <p
              style={{
                fontWeight: "300",
                margin: "8px 0px 0px 0px",
              }}
            >
              -4,000 vnd
            </p>
          </div>
        </div>
        <div
          style={{
            width: "430px",
            height: "1px",
            background: "black",
            opacity: "0.1",
            marginTop: "5px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: " 10px 0px 0px 0px",
          }}
        >
          <p
            style={{
              fontWeight: "300",
              margin: "10px 0px 0px 0px",
            }}
          >
            You pay
          </p>
          <p
            style={{
              fontWeight: "bold",
              margin: "0px",
              fontSize: "14px",
              color: "#F06336",
              position: "relative",
              right: "12px",
              top: "10px",
            }}
          >
            1,326,000 vnd
          </p>
        </div>
      </div>
    </div>
  );
}

export default FareInfo;
