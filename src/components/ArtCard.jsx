import React, { useState } from "react";
import "./ArtCard.css";

const ArtCard = ({ item }) => {
  const {
    webImage,
    title,
    longTitle,
    principalOrFirstMaker,
    productionPlaces,
  } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="artcard-container">
      <img
        className="artcard-img"
        src={webImage.url.startsWith("http") ? webImage.url : "noimage.png"}
        alt={title}
        onClick={handleImageClick}
      />
      <div className="artcard-text">
        <h3 className="artcard-title">{title}</h3>
        <p className="artcard-fulltitle">{longTitle}</p>

        <h4 className="author">{principalOrFirstMaker}</h4>
        <p className="artcard-place">
          {(productionPlaces?.[0] || "") +
            (productionPlaces?.[2] ? `, ${productionPlaces[2]}` : "")}
        </p>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={webImage.url} alt={title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtCard;
