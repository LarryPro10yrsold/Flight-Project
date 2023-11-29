import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("mounted");
    getItems();
  }, []);

  const handleSubmit = () => {
    console.log(name, price, expireDate);
    console.log("submitted");
    axios
      .post("http://localhost:2000/products", {
        drink: name,
        price: price,
        expireDate: expireDate,
      })
      .then(() => {
        getItems();
      });
  };
  const getItems = () => {
    axios.get("http://localhost:2000/products").then((res) => {
      setList(res.data);
      console.log(res.data);
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "black",
        width: "100vw",
      }}
    >
      <div
        style={{
          background: "#273746",
          height: "800px",
          width: "600px",
          borderRadius: "20px",
          padding: "10px",
          marginTop: "50px",
        }}
      >
        <div style={{ color: "white" }}>
          {/* {name}${price} {expireDate}{" "} */}
          <h1>Products</h1>
        </div>
        <div style={{ display: "Flex", gap: "5px", justifyContent: "Center" }}>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Name"
            style={{
              height: "50px",
              width: "100px",
              color: "white",
              background: "#FF5733 ",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          ></input>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="Enter Price"
            style={{
              height: "50px",
              width: "100px",
              color: "white",
              background: "#FF5733 ",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          ></input>
          <input
            onChange={(e) => {
              setExpireDate(e.target.value);
            }}
            placeholder="Enter Expiration Date"
            style={{
              height: "50px",
              width: "100px",
              color: "white",
              background: "#FF5733 ",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          ></input>
          <div
            style={{
              height: "50px",
              width: "100px",
              color: "white",
              background: "#FF5733 ",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "10px",
            }}
            onClick={() => {
              handleSubmit();
            }}
          >
            Add
          </div>
          <Link
            to="/"
            style={{
              height: "50px",
              width: "100px",
              color: "white",
              background: "#FF5733 ",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            Back
          </Link>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} style={{ color: "white", display:"flex", background:"black", borderRadius:"10px", padding:"16px", marginTop:"16px" }}>
              <div   style={{padding:"0px 5px 0px 5px", width:"200px", display:"flex", flexDirection:"column"}}>Drink : {item.drink}</div> <div  style={{padding:"0px 5px 0px 5px", width:"200px", display:"flex", flexDirection:"column"}}> Price : {item.price}</div>
              <div style={{padding:"0px 5px 0px 5px", width:"200px", display:"flex", flexDirection:"column"}}> Expiration Date : {item.expireDate}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
