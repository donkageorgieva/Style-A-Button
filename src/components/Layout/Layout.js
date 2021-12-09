import React, { useState } from "react";
import Header from "./Header/Header";
import Controlls from "./Controlls/Controlls-Group";
import PreviewWindow from "./Preview-Window/Preview-Window";
import CodeWindow from "./Code-Window/Code-Window";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Header toggleMode={props.toggleMode} dark={props.dark} />
      <main className=" justify-start md:justify-items-stretch flex flex-col lg:flex-row dark:bg-gray-800 bg-gray-100 w-full lg:h-screen overflow-hidden overflow:auto transition duration-400 items-center">
        <Controlls />
        <PreviewWindow />
        <CodeWindow />
      </main>
    </React.Fragment>
  );
};

export default Layout;
