import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Read = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/items/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"
      }}
    >
      <p
        style={{
          height: "50px",
          background: "black",
          border: "1px solid #dc7633",
          color: "white",
          borderRadius: "10px",
          fontSize: "17px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px 10px 0px 10px",
          width: "200px",
        }}
      >
        {data.content}
      </p>{" "}
      <p
        style={{
          height: "50px",
          background: "black",
          border: "1px solid #dc7633",
          color: "white",
          borderRadius: "10px",
          fontSize: "17px",
          padding: "0px 10px 0px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "200px",
        }}
      >
        {data.id}
      </p>
      <p
        style={{
          height: "50px",
          background: "black",
          border: "1px solid #dc7633",
          color: "white",
          borderRadius: "10px",
          fontSize: "17px",
          padding: "0px 10px 0px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "200px",
        }}
      >
        {data.description}
      </p>
    </div>
  );
};
export default Read;
