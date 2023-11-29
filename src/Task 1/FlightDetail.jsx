import React from "react";
import Element1 from "./Element";

function FlightDetail (props) {
  let cs1 = {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    marginLeft: "6px",
  };
  return (
    <div style={{ marginLeft: "15px", display: "flex" }}>
      <div style={{ display: "flex", marginTop: "19px" }}>
        <div>
          <div style={{ fontWeight: "600" }}>
            24:10
            <p
              style={{
                margin: "0px",
                fontWeight: "300",
                width: "45px",
              }}
            >
              11 Feb
            </p>
          </div>
          <p
            style={{
              margin: "0px",
              fontWeight: "300",
              marginTop: "32px",
              marginBottom: "51px",
              width: "60px",
            }}
          >
            1h 30m
          </p>
          <div style={{ fontWeight: "600" }}>
            24:10
            <p style={{ margin: "0px", fontWeight: "300" }}>11 Feb</p>
          </div>
        </div>
        <img
          src="./line2.svg"
          alt="line"
          style={{ marginLeft: "31px", marginRight: "26px" }}
        />
        <div>
          <div
            style={{
              fontWeight: "600",
              marginBottom: "102px",
              width: "120px",
            }}
          >
            Da nang (DAD)
            <p style={{ margin: "0px", fontWeight: "300" }}>Da Nang Airport</p>
          </div>
          <div style={{ fontWeight: "600", width: "177px" }}>
            Ho Chi Minh City (SGN)
            <p style={{ margin: "0px", fontWeight: "300" }}>Tansonnhat Intl</p>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "89px" }}>
        <div style={{ display: "flex" }}>
          <img
            src="./logo1.svg"
            alt="./logo1.svg"
            width="30px"
            height="30px"
            style={{ marginTop: "17px" }}
          />
          <p
            style={{
              fontSize: "16px",
              letterSpacing: "1.4px",
              fontWeight: "600",
              marginLeft: "12px",
              marginTop: "13px",
              marginBottom: "0px",
            }}
          >
            BAMBOO AIRWAYS
            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                style={{
                  ...cs1,
                  fontWeight: "300",
                  margin: "0px",
                  display: "flex",
                }}
              >
                {props.FlightNumber}
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
              </p>
            </div>
          </p>
        </div>
        <div
          style={{
            borderRadius: "12px",
            background: "#F4F2F9",
            marginTop: "14px",
            display: "flex",
            width: "465px",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {" "}
          <div style={{ marginRight: "65px" }}>
            <Element1
              {...props.name1}
              {...props.name2}
              name1="Baggage"
              name2="20kg"
            />
            <Element1
              {...props.name1}
              {...props.name2}
              name1="In-flight"
              name2="Meal"
            />
            <Element1
              {...props.name1}
              {...props.name2}
              name1="In-flight"
              name2="Entertainment"
            />
          </div>
          <div>
            <Element1
              {...props.name1}
              {...props.name2}
              name1="Aircraft"
              name2="Airbus A321"
            />
            <Element1
              {...props.name1}
              {...props.name2}
              name1="Seat layout"
              name2="3-3"
            />
            <Element1
              {...props.name1}
              {...props.name2}
              name1="Seat pitch"
              name2="29 inches (standard)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDetail;
