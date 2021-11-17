import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Header from "./Header/Header";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Header toggleMode={props.toggleMode} />
      <main className="flex dark:bg-gray-900 bg-gray-50 w-full h-screen"></main>
    </React.Fragment>
  );
};

export default Layout;
