import React from "react";
import Header from "./header";

const MainNavBar = ({ setOpen }) => {
  return (
    <header>
      <Header setOpen={setOpen} />
    </header>
  );
};

export default MainNavBar;
