import React from "react";

function Element1(props) {
  let cs2 = {
    color: "#4D46FA",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };
  return (
    <div>
      {" "}
      <p
        style={{
          fontWeight: "300",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          margin: "0px",
          marginTop:"6px",
          fontSize:"15px"
        }}
      >
        {props.name1}
        <p style={{ ...cs2, fontWeight: "700", margin: "0px",  fontSize:"15px" }}>{props.name2}</p>
      </p>
    </div>
  );
}

export default Element1;
