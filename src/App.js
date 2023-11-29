import "./App.css";
import TodoList from "./TodoList/TodoList.jsx";
import {BrowserRouter, Routes, Router, Route, Switch } from "react-router-dom";
import Read from "./Read.jsx";
import Product from "./Product.jsx"
import App from './Task 1/App.jsx'
import  Flights from './Task 1/Flights.jsx'

function React() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/"></Route>
          <Route path="/read/:id" element={<Read />} />
          <Route path="/product" element={<Product />} />
          <Route path="/todolist" element={<TodoList />} />
            <Route path="/flights" element={<Flights />} />
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default React;
