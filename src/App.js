import React from "react";
import WhyMoofli from "./WhyMoofli";
import Header from "./Header";
import Reviews from "./Reviews";
import Bookpen from "./Bookpen";
import Star from "./Star";

import './App.css';
function App() {
  return (
    <div className="App">
      <Bookpen />
      <Star />
      <Header/>
      <div className="main">
        <WhyMoofli/>
        <Reviews />
      </div>     
    </div>
  );
}

export default App;
