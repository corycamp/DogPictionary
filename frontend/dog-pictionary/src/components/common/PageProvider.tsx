import NavBar from "./NavBar";
import React from "react";

const PageProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default PageProvider;
