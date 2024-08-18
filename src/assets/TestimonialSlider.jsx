import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const people=[
  {
      id:1,
      bg:"aqua.svg",
      image:"src/assets/lady1.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"Emilia Clarke"
  },
  {
      id:2,
      bg:"green.svg",
      image:"src/assets/man1.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"Andrew Grafield"
  },
  {
      id:3,
      bg:"purple.svg",
      image:"src/assets/lady2.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"Alison Dutch"
  },
  {
      id:4,
      bg:"orange.svg",
      image:"src/assets/lady3.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"Rihana Smith "
  },
  {
      id:5,
      bg:"pink.svg",
      image:"src/assets/man2.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"James Thompson"
  },
  {
      id:6,
      bg:"red.svg",
      image:"src/assets/man3.jpg",
      quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
      Name:"Marcus Klin"
  },
]

const TestimonialCard = ({ bg, image, quote, Name }) => (
  <div className="bg-white">

    <FaQuoteLeft />
    <p>{quote}</p>
    <img src={image} alt={Name} />
    <h3>{Name}</h3>

  </div>
);

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };
  return (
    <div>
      <h1>Testimonials</h1>
      <h2>What our customers are saying</h2>
      <Slider{...settings}>
        {people.map((testimonial) =>(
    <div key={testimonial.id}>
      <TestimonialCard {...testimonial}/>
    </div>
  ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;