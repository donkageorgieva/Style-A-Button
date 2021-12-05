import React, { useState } from "react";
import Header from "./Header/Header";
import Controlls from "./Controlls/Controlls-Group";
import PreviewWindow from "./Preview-Window/Preview-Window";
import CodeWindow from "./Code-Window/Code-Window";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Header toggleMode={props.toggleMode} dark={props.dark} />
      <main className=" justify-start  flex flex-col md:flex-row dark:bg-gray-800 bg-gray-50 w-full md:h-screen  md:overflow-hidden overflow:auto transition duration-400 items-center">
        <Controlls />
        <div className="flex lg:flex-row flex-col lg:justify-evenly lg:w-full items-center w-5/6 p-4 lg:items-start md:h-screen  ">
          <PreviewWindow />
          <CodeWindow />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Layout;
