import React from "react";
import Hero from "../src"; // Correct the import

const Home = () => {
  return (
    <>
      <div id="home">
        <h1>Home Page</h1>
        <Hero /> {/* Render the Hero component here */}
      </div>
    </>
  );
};

export default Home;
