import React from "react";
import "./App.css"; // Import your global styles here
import Test from "./components/test.jsx";
import Nav from "./components/nav.jsx";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Nav />
      <Test />
    </div>
  );
}

export default App;
