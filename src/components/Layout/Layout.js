import React, { useState } from "react";
import Header from "./Header/Header";
import Controlls from "./Controlls/Controlls-Group";
import PreviewWindow from "./Preview-Window/Preview-Window";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Header toggleMode={props.toggleMode} dark={props.dark} />
      <main className=" container mx-auto px-4 flex dark:bg-gray-900 bg-gray-50 w-full h-screen transition duration-400 items-center">
        <Controlls />
        <PreviewWindow />
      </main>
    </React.Fragment>
  );
};

export default Layout;
