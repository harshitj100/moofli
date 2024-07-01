import React from "react";
import WhyMoofli from "./WhyMoofli";
import Header from "./Header";
import Reviews from "./Reviews";
import Bookpen from "./Bookpen";
import './App.css';
function App() {
  return (
    <div className="App">
      <Bookpen />
      <Header/>
      <div className="main">
        <WhyMoofli/>
        <Reviews />
      </div>     
    </div>
  );
}

export default App;
