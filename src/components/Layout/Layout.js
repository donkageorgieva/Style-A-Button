import React, { useState } from "react";
import Header from "./Header/Header";
import Controlls from "./Controlls/Controlls-Group";
import PreviewWindow from "./Preview-Window/Preview-Window";
import CodeWindow from "./Code-Window/Code-Window";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Header toggleMode={props.toggleMode} dark={props.dark} />
      <main className=" justify-between flex dark:bg-gray-800 bg-gray-50 w-full  overflow-hidden min-h-screen transition duration-400 items-center">
        <Controlls />
        <div className="flex justify-evenly w-full">
          <PreviewWindow />
          <CodeWindow />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Layout;
