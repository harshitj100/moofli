import React from "react";
import WhyMoofli from "./WhyMoofli";
import Header from "./Header";
import Reviews from "./Reviews";
import Bookpen from "./Bookpen";
import BookPenText from "./BookPenText";
import Star from "./Star";
import JoinUs from "./JoinUs";
import './App.css';

function App() {
  return (
    <div className="App">
      <Bookpen />
      <BookPenText />
      <Star />
      <Header/>
      <div className="main">
        <WhyMoofli/>
        <Reviews />
      </div>     
      <JoinUs />
    </div>
  );
}

export default App;
