import React from "react";
import "./ArtCard.css";
// import defaultImage from "./noimage.png";

const ArtCard = ({ item }) => {
  const {
    webImage,
    title,
    longTitle,
    principalOrFirstMaker,
    productionPlaces,
    hasImage,
  } = item;

  // const defaultImage = "./noimage.png";

  return (
    <div className="artcard-container">
      <img
        className="artcard-img"
        src={webImage.url.startsWith("http") ? webImage.url : "noimage.png"}
        alt={title}
      />
      <div className="artcard-text">
        <h3 className="artcard-title">{title}</h3>
        <p className="artcard-fulltitle">{longTitle} </p>

        <h4 className="author">{principalOrFirstMaker}</h4>
        <p className="artcard-place">
          {(productionPlaces?.[0] || "") +
            (productionPlaces?.[2] ? `, ${productionPlaces[2]}` : "")}
        </p>
      </div>
    </div>
  );
};

export default ArtCard;
