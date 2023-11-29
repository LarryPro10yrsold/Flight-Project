import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsArrowRight, BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { TiMail } from "react-icons/ti";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
function App() {
  let cs1 = {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    paddingLeft: "6px",
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
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        style={{
          position: "absolute",
          zIndex: "-1",
          width: "100vw",
          height: "1016px",
          objectFit: "cover",
          objectPosition: "top",
        }}
        src="./background.jpg"
      ></img>
      <div
        style={{
          paddingTop: "48px",
          color: "black",
          fontWeight: "bold",
          fontSize: "22px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          fontFamily: "Montserrat",
        }}
      >
        Baycungban
        <img style={{ paddingLeft: "14px" }} src={"./vietnam.svg"}></img>
        <img style={{ paddingLeft: "14px" }} src={"./united-states.svg"}></img>
        <div
          style={{
            color: "black",
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
            color: "black",
            fontSize: " 14px",
            fontWeight: " 400",
            lineHeight: " normal",
            letterSpacing: " 0.7px",
            paddingLeft: "30px",
          }}
        >
          Flight Schedule
        </div>
        <div
          style={{
            color: "black",
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
            color: "black",
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
            background: "#4D46FA",
            marginLeft: "241px",
            color: "white",
            width: "96px",
            fontSize: "14px",
            padding: "10px 16px",
          }}
        >
          Booking now
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "515px",
        }}
      >
        <p
          style={{
            color: "black",
            fontSize: "72px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            paddingTop: "156px",
            margin: "0px",
            fontWeight: "200",
          }}
        >
          Hello!
        </p>
        <p
          style={{
            color: "black",
            fontSize: "72px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            paddingTop: "0px",
            marginTop: "0px",
            marginBottom: "0px",
            fontWeight: "200",
          }}
        >
          Where are
        </p>
        <p
          style={{
            color: "black",
            fontSize: "72px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            paddingTop: "0px",
            marginTop: "0px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontWeight: "200",
          }}
        >
          you{" "}
          <p
            style={{
              color: "#4D46FA",
              fontSize: "72px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            flying
          </p>{" "}
          to...
        </p>
      </div>
      <div
        style={{
          borderRadius: "12px",
          background: "#FFF",
          boxShadow: "0px 4px 30px 0px rgba(77, 70, 250, 0.10)",
          width: "1230px",
          height: "224px",
          marginLeft: "500px",
          position: "relative",
          top: "237px",
          paddingBottom: "25px",
        }}
      >
        <div
          style={{
            paddingTop: "30px",
            paddingLeft: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "100px",
              background: "#F4F2F9",
            }}
          ></div>
          <p
            style={{
              ...cs1,
              margin: "0px",
            }}
          >
            One way / Round-trip
          </p>
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "100px",
              background: "#4D46FA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "100px",
                background: "white",
              }}
            ></div>
          </div>
          <p
            style={{
              ...cs1,
              margin: "0px",
            }}
          >
            Multi-city
          </p>
          <p
            style={{
              ...cs1,
              display: "flex",
              alignItems: "center",
              gap: "2px",
              paddingLeft: "50px",
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
            children <AiFillCaretDown style={{ ...cs2, paddingLeft: "5px" }} />
          </p>
          <p
            style={{
              ...cs1,
              display: "flex",
              alignItems: "center",
              paddingLeft: "50px",
              margin:"0px"
            }}
          >
            Business Class{" "}
            <AiFillCaretDown style={{ ...cs2, paddingLeft: "5px" }} />
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              borderRadius: "12px",
              border: "1px solid rgba(0, 0, 0, 0.10)",
              background: "#FFF",
              width: "300px",
              height: "100px",
              marginLeft: "30px",
              marginTop: "21px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                opacity: "0.5",
                marginLeft: "20px",
                marginBottom: "0px",
              }}
            >
              FROM
            </p>
            <p
              style={{
                ...cs2,
                fontWeight: "bold",
                marginLeft: "20px",
                fontSize: "26px",
                marginTop: "3px",
                marginRight: "1px",
                marginBottom: "0px",
              }}
            >
              Da Nang
            </p>
            <p
              style={{
                ...cs1,
                marginLeft: "20px",
                paddingLeft: "0px",
                fontSize: "14px",
                marginTop: "7px",
                fontWeight: "bold",
              }}
            >
              Quang Nam, Viet Nam
            </p>{" "}
          </div>
          <img src={"./switch.svg"} style={{ marginTop: "20px" }}></img>
          <div
            style={{
              borderRadius: "12px",
              border: "1px solid #4D46FA ",
              background: "#FFF",
              width: "300px",
              height: "100px",
              marginTop: "21px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                opacity: "0.5",
                marginLeft: "20px",
                marginBottom: "0px",
              }}
            >
              TO
            </p>
            <p
              style={{
                ...cs2,
                fontWeight: "bold",
                marginLeft: "20px",
                fontSize: "26px",
                marginTop: "3px",
                marginRight: "1px",
                marginBottom: "0px",
              }}
            >
              Ho Chi Minh
            </p>
            <p
              style={{
                ...cs1,
                marginLeft: "20px",
                paddingLeft: "0px",
                fontSize: "14px",
                marginTop: "6px",
                fontWeight: "bold",
              }}
            >
              Viet Nam
            </p>{" "}
          </div>
          <div
            style={{
              borderRadius: "12px",
              border: "1px solid rgba(0, 0, 0, 0.10)",
              background: "#FFF",
              height: "100px",
              marginTop: "21px",
              flex: "1",
              marginRight: "30px",
              display: "flex",
              gap: "11px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  opacity: "0.5",
                  marginLeft: "20px",
                  marginBottom: "0px",
                }}
              >
                DEPARTURE
              </p>
              <p
                style={{
                  ...cs2,
                  fontWeight: "bold",
                  marginLeft: "20px",
                  fontSize: "24px",
                  marginTop: "3px",
                  marginRight: "1px",
                  marginBottom: "0px",
                  display: "flex",
                  alignItems: "center",
                  width: "225px",
                }}
              >
                Fri, 22 Mar, 2022
                <img
                  src={"./calender.svg"}
                  style={{
                    marginLeft: "10px",
                 }}
                ></img>
              </p>
              <div
                style={{
                  ...cs1,
                  marginLeft: "20px",
                  paddingLeft: "0px",
                  fontSize: "14px",
                  marginTop: "7px",
                  fontWeight: "bold",
                }}
              >
                <div style={{ display: "flex", gap: "15px" }}>
                  <p style={{ marginBottom: "0px", marginTop: "0px" }}>
                    Prev{" "}
                    <div
                      style={{
                        height: "1px",
                        width: "33px",
                        background: "black",
                        marginTop: "5px",
                        marginBottom: "0px",
                      }}
                    ></div>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      lineHeight: "normal",
                      opacity: "0.5",
                      marginBottom: "0px",
                      marginTop: "4px",
                    }}
                  >
                    Next
                  </p>
                </div>
              </div>
            </div>{" "}
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  opacity: "0.5",
                  marginBottom: "0px",
                }}
              >
                RETURN
              </p>
              <p
                style={{
                  ...cs2,
                  fontWeight: "bold",
                  fontSize: "24px",
                  marginTop: "3px",
                  marginBottom: "0px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                Fri, 22 Mar, 2022
                <img
                  src={"./calender.svg"}
                  style={{ marginLeft: "10px", paddingRight: "41px" }}
                ></img>
              </p>
              <div
                style={{
                  ...cs1,
                  paddingLeft: "0px",
                  fontSize: "14px",
                  marginTop: "7px",
                  fontWeight: "bold",
                }}
              >
                <div style={{ display: "flex", gap: "15px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      lineHeight: "normal",
                      opacity: "0.5",
                      marginBottom: "0px",
                      marginTop: "4px",
                    }}
                  >
                    Prev{" "}
                    <div
                      style={{
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        lineHeight: "normal",
                        opacity: "0.5",
                        marginBottom: "0px",
                        marginTop: "4px",
                      }}
                    ></div>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      lineHeight: "normal",
                      opacity: "0.5",
                      marginBottom: "0px",
                      marginTop: "4px",
                    }}
                  >
                    Next
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div
        style={{
          width: "245px",
          height: "60px",
          flexShrink: 0,
          borderRadius: "12px",
          background: "#4D46FA",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "62px",
          position: "relative",
          left: "1455px",
          top: "207px",
        }}
      >
        <Link
          to={"/flights"}
          style={{ textDecoration: "none", color: "white" }}
        >
          Search Flights
        </Link>{" "}
        <BsArrowRight />
      </div>
      <div
        style={{
          marginLeft: "521px",
          display: "flex",
          position: "relative",
          top: "250px",
          gap: "20pxs",
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
        <p style={{ display: "flex" }}>
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
        </p>
      </div>
      <div
        style={{
          display: "flex",
          letterSpacing: "1.4px",
          alignItems: "center",
          position: "relative",
          top: "207px",
          gap: "10px",
          marginLeft:"1510px"
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
  );
}

export default App;
