import React from "react";
import { Link } from "react-router-dom";
import "./Event.css";
import chai from "../assets/m2.png";
import c1 from "../assets/c1.webp";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";

const Event = () => {
  const categories = [
    {
      id: 1,
      name: "Cricket",
      image: { c1 },
      link: "/cricket-events",
    },
    {
      id: 2,
      name: "Office Party",
      image: { c1 },
      link: "/office-party",
    },
    {
      id: 3,
      name: "December events",
      image: { c1 },
      link: "/december-events",
    },
    {
      id: 4,
      name: "Food Zone",
      image: "/images/food-zone.jpg",
      link: "/food-zone",
    },
    {
      id: 5,
      name: "Garba",
      image: "/images/garba.jpg",
      link: "/garba",
    },
    {
      id: 6,
      name: "XYZ",
      image: "/images/xyz.jpg",
      link: "/xyz",
    },
  ];

  return (
    <div className="page-container">
      <div className="banner-image">
        <img src={chai} alt="Event Banner" />
      </div>
      <div className="home-container">
        <div className="cate">
          <h1>Category</h1>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.id}
              className="category-card"
            >
              <div className="category-image-container">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
              </div>
              <div className="category-name">{category.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
