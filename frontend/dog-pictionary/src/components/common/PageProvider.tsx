import NavBar from "./NavBar";
import React from "react";

const PageProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pageProvider">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default PageProvider;
