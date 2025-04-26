import React from 'react'
import { Hero } from '../Pages/Hero'
import Features from "../Pages/FeturesGride";
import "../App.css";
import EventOverview from '../Pages/Services';

export const Home = () => {
  return (
    <div>
      <div className="hero">
        <Hero />
      </div>
      <div className="hero2">
        <Features />
      </div>
      <EventOverview/>
    </div>
  );
};
