import WhyMoofli from "./WhyMoofli";
import Header from "./Header";
import Reviews from "./Reviews";
import './App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <WhyMoofli/>
        <Reviews />
      </div>     
    </div>
  );
}

export default App;
