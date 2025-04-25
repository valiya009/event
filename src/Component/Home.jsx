import React from 'react'
import { Hero } from '../Pages/Hero'
import Features from "../Pages/FeturesGride";
import "../App.css";

export const Home = () => {
  return (
    <div>
      <div className="hero">
        <Hero />
      </div>
      <div className="hero2">
        <Features />
      </div>
    </div>
  );
};
