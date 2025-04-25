import React from "react";
import { Link } from "react-router-dom";
import "./Event.css";
import chai from "../assets/m2.png";

const Event = () => {
  const categories = [
    {
      id: 1,
      name: "Cricket",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/6266d544da29199d4744041e/CRICKET-16x9/0x0.jpg?format=jpg&height=1080&width=1920",
      link: "/CricketEventpage",
    },
    {
      id: 2,
      name: "Office Party",
      image:
        "https://takeitpersonelly.com/wp-content/uploads/2021/06/5-reasons-why-you-should-hold-office-parties-1.jpg",
      link: "/office-party",
    },
    {
      id: 3,
      name: "December events",
      image:
        "https://www.thefactsite.com/wp-content/uploads/2020/09/december-facts.jpg",
      link: "/december-events",
    },
    {
      id: 4,
      name: "Food Zone",
      image:
        "https://eatbook.sg/wp-content/uploads/2023/07/Snap-Cafe-flatlay-10.jpg",
      link: "/food-zone",
    },
    {
      id: 5,
      name: "Garba",
      image: "https://st1.latestly.com/wp-content/uploads/2019/09/Garba.jpg",
      link: "/garba",
    },
    {
      id: 6,
      name: "gym",
      image: "http://getwallpapers.com/wallpaper/full/c/f/e/200356.jpg",
      link: "/Gym",
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
