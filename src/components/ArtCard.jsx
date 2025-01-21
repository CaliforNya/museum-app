import React from "react";

const ArtCard = ({ item }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        width: "200px",
        textAlign: "center",
        margin: "10px",
      }}
    >
      <img
        src={item.webImage?.url}
        alt={item.title}
        style={{ width: "100%", height: "auto", borderRadius: "5px" }}
      />
      <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{item.title}</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>
        {item.principalOrFirstMaker}
      </p>
    </div>
  );
};

export default ArtCard;
