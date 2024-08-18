import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const people = [
  {
    id: 1,
    bg: "aqua.svg",
    image: "src/assets/lady1.jpg",
    quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
    Name: "Emilia Clarke"
  },
  {
    id: 2,
    bg: "green.svg",
    image: "src/assets/man1.jpg",
    quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
    Name: "Andrew Grafield"
  },
  {
    id: 3,
    bg: "purple.svg",
    image: "src/assets/lady2.jpg",
    quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
    Name: "Alison Dutch"
  },
  {
    id: 4,
    bg: "orange.svg",
    image: "src/assets/lady3.jpg",
    quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
    Name: "Rihana Smith "
  },
  {
    id: 5,
    bg: "pink.svg",
    image: "src/assets/man2.jpg",
    quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
    Name: "James Thompson"
  },
  {
    id: 6,
    bg: "red.svg",
    image: "src/assets/man3.jpg",
    quote:
      "Kindness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.",
    Name: "Marcus Klin"
  },
]

const TestimonialCard = ({ image, quote, Name }) => (
  <div className="bg-gradient-to-r from-[#FFCB76] to-[#fd7b24] flex-col justify-center items-center justify-items-center max-w-xl m-auto p-10 rounded-2xl ">
    <span className="w-full ">
      <FaQuoteLeft className="text-orange-950 text-7xl items-start mb-3" />
    <img src={image} alt={Name} className="w-2/6 rounded-full mx-40 " />
    <h3 className="ml-[180px] text-md m-3 underline underline-offset-2 font-medium" >{Name}</h3>
    </span>
    <p className="mx-1 text-orange-950 font-medium font-sans">{quote}</p>

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
      <h1 className="text-5xl flex justify-center items-center mt-16 font-serif font-semibold text-[#46260e] ">Testimonials</h1>
      <h2 className="text-3xl flex justify-center items-center mt-2 font-serif font-semibold text-[#351b09] ">What our customers are saying</h2>
      <Slider{...settings} className="max-w-2xl mx-auto my-16 py-5">
        {people.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;