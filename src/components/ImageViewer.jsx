import React from "react";

export const ImageViewer = ({ imageUrl }) => {
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
