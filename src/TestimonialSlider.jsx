import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const people=[
  {
      id:1,
      bg:"aqua.svg",
      image:"lady1.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"Emilia Clarke"
  },
  {
      id:2,
      bg:"green.svg",
      image:"man1.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"Andrew Grafield"
  },
  {
      id:3,
      bg:"purple.svg",
      image:"lady2.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"Alison Dutch"
  },
  {
      id:4,
      bg:"orange.svg",
      image:"lady3.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"Rihana Smith "
  },
  {
      id:5,
      bg:"pink.svg",
      image:"man2.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"James Thompson"
  },
  {
      id:6,
      bg:"red.svg",
      image:"man3.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"Marcus Klin"
  },
]

const TestimonialCard = ({ bg, image, quote, Name }) => (
  <div className="bg-white">

    <FaQuoteLeft />
    <p>{quote}</p>
    <img src="{image}" alt="{Name}" />
    <h3>{Name}</h3>

  </div>
);

