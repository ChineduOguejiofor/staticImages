import React from "react";

export const Image = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <div>
      <img
        // src={require("./img/EMY-C24/02.JPG")}
        src={imageUrl}
        alt="Passport"
      />
    </div>
  );
};
