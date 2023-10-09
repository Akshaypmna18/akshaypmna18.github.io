import React, { Component } from "react";
import "./App.css";
import black from "./assets/black.png";
// import

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </header>
        <main>
          <div>
            <img src={black} alt="img" />
            {/* <p>7 am</p> */}
            <div className="heart-rate">
              <i className="fa-solid fa-heart-pulse"></i>
              <p>78</p>
            </div>
          </div>
          <div>
            <h1>Apple Watch</h1>
            <p>
              Apple Watch Ultra [GPS + Cellular 49 mm] smart watch w/Rugged
              Titanium Case
            </p>
            <p className="features">
              <span>Select Color : </span>Black
            </p>
            <div className="color-wrapper">
              <div className="black"></div>
              <div className="red"></div>
              <div className="blue"></div>
              <div className="pink"></div>
              <div className="purple"></div>
            </div>
            <p className="features">
              <span> Features : </span>Time
            </p>
            <div className="btn-wrapper">
              <button className="time-btn active">Time</button>
              <button className="heart-rate-btn">Heart Rate</button>
            </div>
            <button>Buy now</button>
          </div>
        </main>
        <footer>
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </footer>
      </div>
    );
  }
}
export default App;
