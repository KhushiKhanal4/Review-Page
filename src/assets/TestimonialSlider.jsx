import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const people = [
  {
    id: 1,
    Name: "Sarah M.",
    title:"~Project Manager",
    image: "src/assets/lady1.jpg",
    quote:
      '"Notion has completely transformed the way our team collaborates. The ability to create shared workspaces with customizable databases has streamlined our project management process. I love how everything is in one place—notes, tasks, timelines—and how easy it is to integrate with other tools we use. It is a game-changer for productivity!"',
    
  },
  {
    id: 2,
    Name: "John D.",
    title:"~Freelance Writer",
    image: "src/assets/man1.jpg",
    quote:
      '"As a freelance writer, staying organized is key to meeting deadlines and managing multiple clients. Notion has been my go-to tool for organizing my writing projects, tracking deadlines, and storing research. The clean interface and flexible layout options allow me to tailor my workspace exactly to my needs. It is like having my own personal assistant!"',
    
  },
  {
    id: 3,
    Name: "Alison Dutch",
    title: "~Entrepreneur",
    image: "src/assets/lady2.jpg",
    quote:
      '"Running a startup means juggling a lot of tasks, and Notion has been essential for keeping everything on track. From brainstorming sessions to project planning and even managing my personal to-do list, Its flexibility lets me handle it all in one place. The ability to collaborate with my team in real-time has also sped up our workflow significantly. Highly recommend it for any entrepreneur!"'

,
    
  },
  {
    id: 4,
   Name: "Rihana Smith",
   title:"~Student",
    image: "src/assets/lady3.jpg",
    quote:
      '"Notion has been a lifesaver for my studies! I use it to take notes during lectures, organize my assignments, and keep track of deadlines. The ability to create detailed, linked notes with embedded images and files helps me study more effectively. Plus, the templates make it super easy to set up new projects and keep everything in order. I cannot imagine school without it!"',
    
  },
  {
    id: 5,
    Name: "James Thompson",
    title:"~Designer",
    image: "src/assets/man2.jpg",
    quote:
      '"As a designer, I appreciate tools that are not only functional but also visually appealing. Notion hits both marks perfectly. I use it to organize my design projects, client feedback, and even to create mood boards. The drag-and-drop functionality and customizable templates are fantastic for brainstorming and keeping my creative process organized. It is a must-have tool for any designer!"',
    
  },
  {
    id: 6,
    Name: "Michael T",
    title:"~Software Engineer",
    image: "src/assets/man3.jpg",
    quote:
      '"Notion has become an indispensable tool in my daily workflow. Whether I am tracking tasks, documenting code, or managing project timelines, Its versatility and intuitive interface make it easy to stay organized and productive. It is the perfect all-in-one solution for anyone in tech!"',
    
  },
]

const TestimonialCard = ({ image, quote, Name ,title}) => (
  <div className="bg-gradient-to-tr from-[#FFCB76] to-[#fa7260] flex-col justify-center items-center justify-items-center max-w-xl m-auto p-10 rounded-2xl ">
    <span className="w-full ">
      <FaQuoteLeft className="text-orange-950 text-7xl items-start " />
    <img src={image} alt={Name} className="w-2/6 rounded-full mx-40 " />
    <h3 className="ml-[183px] text-lg mt-3 underline underline-offset-2 font-normal tracking-wide" >{Name}</h3>
    <h4 className="ml-[183px] text-sm mb-1 font-light tracking-wider">{title}</h4>
    </span> 
    <p className="mx-1 text-orange-950 font-medium text-sm font-sans">{quote}</p>

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
      <h1 className="text-3xl flex justify-center items-center mt-8 font-serif font-semibold text-[#46260e] ">Testimonials</h1>
      <h2 className="text-xl flex justify-center items-center my-1 font-serif font-semibold text-[#351b09] ">What our customers are saying</h2>
      <Slider{...settings} className="max-w-2xl mx-auto mt-5 ">
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