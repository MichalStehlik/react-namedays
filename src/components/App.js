import React from 'react';
import './App.css';
import {Navbar, NavbarBrand} from "reactstrap";
import DatePicker from "./DatePicker";
import Names from "./Names";

function App() {
  return (
    <>
    <Navbar color="light" fixed="top" light={true}>
      <NavbarBrand href="/">Svátky</NavbarBrand>
    </Navbar>
    <main className="container">
      <DatePicker />
      <Names />
    </main>
    <footer id="sticky-footer" className="py-4 bg-dark text-white-50  fixed-bottom">
    <div className="container text-center">
      <small>Používá <a href="https://https://api.abalin.net/">International nameday API</a></small>
    </div>
  </footer>
    </>
  );
}

export default App;
