import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

function Filter() {
  let cs1 = {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    marginLeft: "6px",
  };

  let cs3 = {
    borderRadius: "12px",
    width: "120px",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    padding: "12px",
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "765px",
        gap: "6px",
        paddingTop: "23px",
      }}
    >
      <div style={{ ...cs1, opacity: "0.4", marginRight: "8px" }}>FILTER</div>
      <div
        style={{
          ...cs3,
        }}
      >
        Transit{" "}
        <BsFillCaretDownFill style={{ color: "#4D46FA", fontSize: "17px" }} />
      </div>
      <div
        style={{
          ...cs3,
        }}
      >
        Time{" "}
        <BsFillCaretDownFill style={{ color: "#4D46FA", fontSize: "17px" }} />
      </div>
      <select
        style={{
          ...cs3,
        }}
      >
        Airline{" "}
        <option key="vn-ar">VN Airlines</option>
        <option key="vn-ar">VietJet Air</option>
        <option key="vn-ar">Bamboo Airways</option>
      </select>
      <div
        style={{
          ...cs3,
          width: "140px",
        }}
      >
        Low Price{" "}
        <BsFillCaretDownFill style={{ color: "#4D46FA", fontSize: "17px" }} />
      </div>
    </div>
  );
}

export default Filter;
