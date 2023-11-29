import React from 'react'
import Timeline from './Timeline'

function SmallCard() {
  return (
          <div
            style={{
              width: "270px",
              height: "433px",
              flexShrink: 0,
              borderRadius: "12px",
              background: "#FFF",
              marginTop:"10px"
            }}
          >
            <p
              style={{
                fontWeight: "600",
                marginTop: "14px",
                marginBottom: "15px",
                paddingLeft: "15px",
              }}
            >
              YOUR FLIGHTS
            </p>
            <div style={{ background: "#F4F2F9", height: "1px" }}></div>
            <div
              style={{
                marginTop: "20px",
                paddingLeft: "15px",
                display: "flex",
                gap: "12px",
              }}
            >
              <div
                style={{
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 600,
                  borderRadius: "100px",
                  background: "#979797",
                  height: "30px",
                  width: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                01
              </div>
              <div style={{ margin: "0px" }}>
                <p style={{ fontWeight: "300", margin: "0px" }}>
                  Fri, 11 Feb, 2022
                </p>
                <p style={{ fontWeight: "600", margin: "0px" }}>
                  Da Nang - Ho Chi Minh
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                paddingLeft: "15px",
                marginTop: "16px",
              }}
            >
              <img src="./logo1.svg" alt="./logo1.svg" />
              <div style={{ marginLeft: "12px" }}>
                <p
                  style={{
                    fontSize: "16px",
                    letterSpacing: "1.4px",
                    fontWeight: "600",
                    marginLeft: "12px",
                    width: "500px",
                    display: "flex",
                    position: "relative",
                    margin: "0px",
                  }}
                >
                  BAMBOO AIRWAYS
                </p>
                <p
                  style={{
                    color: "#4D46FA",
                    fontSize: "12px",
                    textDecorationLine: "underline",
                    margin: "0px",
                    fontWeight: "bold",
                  }}
                >
                  Details
                </p>
              </div>
            </div>
            <div style={{marginLeft:"15px", marginTop:"10px"}}>
            <Timeline/>
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px 16px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
                background: "rgba(77, 70, 250, 0.10)",
                color: "#4D46FA",
                fontWeight: "bold",
                fontSize: "12px",
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "20px",
              }}
            >
              Change departure flight
            </div>
            <div
              style={{
                background: "#F4F2F9",
                height: "1px",
                marginTop: "15px",
              }}
            ></div>
            <div
              style={{
                marginTop: "20px",
                paddingLeft: "15px",
                display: "flex",
                gap: "12px",
              }}
            >
              <div
                style={{
                  color: "#FFF",
                  fontSize: "14px",
                  fontWeight: 600,
                  borderRadius: "100px",
                  background: "#4D46FA",
                  height: "30px",
                  width: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                02
              </div>
              <div style={{ margin: "0px" }}>
                <p style={{ fontWeight: "300", margin: "0px" }}>
                  Sun, 13 Feb, 2022
                </p>
                <p style={{ fontWeight: "600", margin: "0px" }}>
                  Ho Chi Minh - Da Nang
                </p>
              </div>
            </div>
            <div
              style={{
                background: "#F8F8F8",
                marginTop: "19px",
                borderRadius: "0px 0px 12px 12px",
                paddingBottom:"15px"
              }}
            >
              <p
                style={{
                  fontWeight: "300",
                  margin: "0px",
                  marginLeft: "15px",
                  paddingTop: "15px",
                }}
              >
                Subtotal
              </p>
              <p
                style={{
                  color: "#F06336",
                  fontWeight: "bold",
                  margin: "0px",
                  marginLeft: "15px",
                  paddingTop: "5px",
                }}
              >
                1,322,000 vnd
              </p>
            </div>
          </div>
  )
}

export default SmallCard