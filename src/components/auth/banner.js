import React from "react";

const style = {
  border: "3px solid #fefa87",
  borderRadius: 8,
  backgroundColor: "#fffdc4",
  padding: "10px 0px"
};

const Banner = () => (
  <div
    className="d-flex align-items-center flex-column w-75 my-5"
    style={style}
  >
    {/* <img src="/logo.png" alt="" className="w-50" /> */}
    <h4 className="code">Welcome to Doctorally</h4>
    <p className="code">Sign in and start helping others!</p>
  </div>
);

export default Banner;
