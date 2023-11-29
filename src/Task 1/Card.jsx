import React from "react";

function Card1(props) {
  let cs2 = {
    color: "#4D46FA",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };
  let cs1 = {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    marginLeft: "6px",
  };

  let highlighted = {
    color: "#4D46FA",
    fontSize: "12px",
    fontWeight: 600,
    textDecoration: "underline",
  };

  let faded = {
    ...cs1,
    opacity: "0.4",
  };

  return (
    <div>
      <div
        style={{
          marginLeft: "510px",
          background: "white",
          width: "933px",
          borderRadius: "12px",
          marginBottom: "10px",
          padding:"15px 0px 0px 0px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "white",
            borderRadius: "12px",
            marginLeft:"15px",
          }}
        >
          <img src={props.image || "./logo1.svg"} alt="logo" />
          <p
            style={{
              fontSize: "16px",
              letterSpacing: "1.4px",
              fontWeight: "600",
              marginLeft: "12px",
              width: "500px",
              display: "flex",
              position: "relative",
            }}
          >
            {props.name || "BAMBOO AIRWAYS"}
          </p>
          <div
            style={{
              display: "flex",
              position: "relative",
              right: "90px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "20px",
                marginTop: "5px",
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  margin: "0px",
                  marginBottom: "7px",
                }}
              >
                21:40
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "10px",
                  borderRadius: "100px",
                  background: "rgba(77, 70, 250, 0.10)",
                  fontWeight: "600",
                  padding: "5px 0px",
                  paddingRight: "2px",
                  paddingLeft: "2px",
                  width: "30px",
                  marginLeft: "5px",
                }}
              >
                DAD
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontWeight: "300",
                  marginBottom: "7px",
                  marginTop: "0px",
                  marginLeft: "20px",
                  fontSize: "14px",
                }}
              >
                1h 30m
              </p>
              <img src="line.svg" alt="line" width=" 91.819px" height=" 7px" />
              <p
                style={{
                  fontWeight: "300",
                  marginBottom: "0px",
                  marginTop: "7px",
                  marginLeft: "24px",
                  fontSize: "14px",
                }}
              >
                Direct
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
                marginTop: "5px",
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  margin: "0px",
                  marginBottom: "7px",
                }}
              >
                21:40
              </p>
              <div
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "10px",
                  borderRadius: "100px",
                  background: "rgba(77, 70, 250, 0.10)",
                  fontWeight: "600",
                  padding: "5px 0px",
                  paddingRight: "2px",
                  paddingLeft: "2px",
                  width: "30px",
                  marginLeft: "5px",
                }}
              >
                DAD
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              right: "40px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
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
                <p style={{ ...cs2, fontWeight: "700", margin: "0px" }}>20kg</p>
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
              position: "relative",
              width: "250px",
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
                }}
              >
                1,326,000 vnd
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
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "35px",
            paddingBottom: "19px",
            marginLeft:"15px"
          }}
        >
          <p
            style={{
              ...(props.type === "FLIGHT DETAIL" ? highlighted : faded),
              margin: "0px",
            }}
          >
            FLIGHT DETAIL
          </p>
          <div
            style={{
              ...(props.type === "FARE INFO" ? highlighted : faded),
              marginLeft: "30px",
            }}
          >
            FARE INFO
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
