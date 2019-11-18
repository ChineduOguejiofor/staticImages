import React from "react";

export const Image = ({ path }) => {
  console.log(path);
  return (
    <div>
      <img
        // src={require("./img/EMY-C24/02.JPG")}
        src={path}
        alt="Passport"
      />
    </div>
  );
};
