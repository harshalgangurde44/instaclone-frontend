import React from "react";
import lens2x from "../images/lens2x.png";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <center>
        <div className="container-main">
          <div className="section1">
            <img alt="lens" className="image1" src={lens2x}></img>
          </div>
          <div className="section1">
            <div className="section2">
              <div className="team">10x Team 4</div>
              <div>
                <a href="/postview">
                  <button className="btn">Enter</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Landing;
