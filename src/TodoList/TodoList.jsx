import React from "react";
import { useState, useEffect } from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiFileEditFill } from "react-icons/ri";
import { PiTrashBold } from "react-icons/pi";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
export const TodoList = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [inputDesc, setInputDesc] = useState("")


  // Just focus on get and post method
  // let items = [
  //   { name: 'Item 1', price: 10 },
  //   { name: 'Item 2', price: 20 },
  //   { name: 'Item 3', price: 15 }
  // ];

  // items.forEach(item => {
  //   item.description = "";
  // });

  // console.log(items);

  const getItems = () => {
    axios.get("http://localhost:2000/items").then((res) => {
      setList(res.data);
    });
  };
  useEffect(() => {
    console.log("mounted");
    getItems();
  }, []);

  const handleSubmit = () => {
    console.log("submitted");
    axios.post("http://localhost:2000/items", { content: value, description: inputDesc }).then(() => {
      getItems();
    });
  };
  return (
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
      <h1 style={{ fontSize: "40px", fontFamily: "fantasy", color: "white" }}>
        Todo-List
      </h1>{" "}
      <Link to="/product" style={{fontSize: "35px", fontFamily: "fantasy", color: "white", textDecoration:"none"}}>Add Products?</Link>
      <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
        <input
          value={value}
          onChange={function (e) {
            // Store the value somewhere
            setValue(e.target.value);
            // e.target.value = whatever you  type in
          }}
          placeholder="Enter a Todo..."
          style={{
            width: "50%",
            height: "50px",
            background: "black",
            border: "1px solid #dc7633",
            color: "white",
            borderRadius: "10px",
            fontSize: "17px",
            padding: "0px 10px 0px 10px",
          }}
        />{" "}
        <input
          onChange={function (e) {
            setInputDesc(e.target.value)
          }}
          placeholder="Enter Description"
          style={{
            width: "50%",
            height: "50px",
            background: "black",
            border: "1px solid #dc7633",
            color: "white",
            borderRadius: "10px",
            fontSize: "17px",
            padding: "0px 10px 0px 10px",
          }}
        ></input>
        <div
          style={{
            height: "52px",
            width: "95px",
            background: "#dc7633",
            fontSize: "20px",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={function () {
            handleSubmit();
          }}
        >
          Add
        </div>
      </div>
      <div>
        {list.map(function (item, index) {
          return (
            <div
              key={index}
              style={{
                border: `1px solid white`,
                padding: "12px",
                margin: "20px 0px",
                color: "white",
                borderRadius: "8px",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                textDecoration:
                  item.isCompleted === true ? "line-through red" : "none",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "20px" }}>{item.content}</div>
              <div style={{ fontSize: "20px" }}>{item.description}</div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <i>
                  <RiCheckboxCircleFill
                    style={{
                      color: "#FF5F5F",
                      fontSize: "25px",
                      padding: "0px",
                      margin: "0px",
                      cursor: "pointer",
                    }}
                  />
                </i>
                <i>
                  <RiFileEditFill
                    style={{
                      color: "#F5EE6B ",
                      fontSize: "25px",
                      padding: "0px",
                      margin: "0px",
                      cursor: "pointer",
                    }}
                    onClick={function () {
                      // setValue(item.value);
                    }}
                  />
                </i>
                <i>
                  <PiTrashBold
                    style={{
                      color: "#2FAD7B ",
                      fontSize: "25px",
                      padding: "0px",
                      margin: "0px",
                      cursor: "pointer",
                    }}
                    onClick={function () {}}
                  />
                </i>
                <Link
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  to={`/read/${item.id}`}
                >
                  <p style={{ color: "white", textDecoration: "none" }}>
                    Read More
                  </p>
                  <BiChevronRight
                    style={{
                      color: "white",
                      fontSize: "25px",
                      padding: "0px",
                      margin: "0px",
                      cursor: "pointer",
                    }}
                    onClick={function () {
                      console.log(id);
                    }}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
