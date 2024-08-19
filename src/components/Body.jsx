import React from "react";
import Content from "./Content";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <Content />
      </div>
    </main>
  );
};

export default Body;
