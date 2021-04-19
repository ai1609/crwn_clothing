import React from "react";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div classname="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      <div classname="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      <div classname="menu-item">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      <div classname="menu-item">
        <div className="content">
          <h1 className="title">WOMENS</h1>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      <div classname="menu-item">
        <div className="content">
          <h1 className="title">MENS</h1>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;