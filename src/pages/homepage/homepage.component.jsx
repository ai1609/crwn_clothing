import React from "react";

import "./homepage.styles.scss";
import Directory from "./../../components/directory-menu/directory-menu.component";

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </div>
);

export default HomePage;
