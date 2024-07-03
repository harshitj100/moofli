import React from "react";
import WhyMoofli from "./WhyMoofli";
import Header from "./Header";
import Reviews from "./Reviews";
import Bookpen from "./Bookpen";
import BookPenText from "./BookPenText";
import Star from "./Star";
import JoinUs from "./JoinUs";
import './App.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Bookpen />
        <BookPenText />
        <Star />
        <Header/>
        <div className="main">
          <WhyMoofli/>
          <Reviews />
        </div>     
        <Link to="https://youtube.com">
          <JoinUs />
        </Link>
      </div>
    </Router>
  );
}

export default App;
