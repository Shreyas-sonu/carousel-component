// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./Carousel.css";
// import { CSSTransition } from "react-transition-group";

// const images = [
//   "https://img.freepik.com/free-photo/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpg?t=st=1694868402~exp=1694872002~hmac=9134a9ba964ad58c8aab7630ccfdd6e602f4020f6a615fc305230b1fb07c4f70&w=900",
//   "https://img.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8861.jpg?w=900&t=st=1694868453~exp=1694869053~hmac=7c2cdad4fb5ab3e4e801cc590776bf031b63021d181c7783a0f269af4e10ee6b",
//   "https://img.freepik.com/free-photo/glowing-computer-chips-row-technology-illuminates-generated-by-ai_188544-16626.jpg",
//   "https://img.freepik.com/free-photo/expert-technician-repairs-complex-circuit-board-with-precision-skill-generated-by-ai_188544-55816.jpg?t=st=1694847828~exp=1694851428~hmac=cc0c048ba5324ee401705cca3f8c8b02d47d57f765e76adfe871fa38f4a36419&w=1060",
// ];

// const contents=["Vivek Chetan's Electronics","Oh sorry his uncle's Electronics","Visit once remember always",'Very durable']

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex(prevIndex =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex(prevIndex =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)

//     return () => {
//       clearInterval(interval); // Cleanup the interval on component unmount
//     };
//   }, []);

//   return (
//     <div className="carousel-container">
//       <div className="carousel-left" style={{ background: "#yourcolor" }}>
//         {contents[currentIndex]}
//       </div>
//       <div className="carousel-right">
//         <CSSTransition
//           key={currentIndex}
//           in={true}
//           appear={true}
//           timeout={500}
//           classNames="slide"
//         >
//           <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
//         </CSSTransition>
//       </div>
//       <button className="carousel-button prev-button" onClick={prevSlide}>
//         <FaChevronLeft />
//       </button>
//       <button className="carousel-button next-button" onClick={nextSlide}>
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.css";
import { CSSTransition } from "react-transition-group";

const images = [
  "https://img.freepik.com/free-photo/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpg?t=st=1694868402~exp=1694872002~hmac=9134a9ba964ad58c8aab7630ccfdd6e602f4020f6a615fc305230b1fb07c4f70&w=900",
  "https://img.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8861.jpg?w=900&t=st=1694868453~exp=1694869053~hmac=7c2cdad4fb5ab3e4e801cc590776bf031b63021d181c7783a0f269af4e10ee6b",
  "https://img.freepik.com/free-photo/glowing-computer-chips-row-technology-illuminates-generated-by-ai_188544-16626.jpg",
  "https://img.freepik.com/free-photo/expert-technician-repairs-complex-circuit-board-with-precision-skill-generated-by-ai_188544-55816.jpg?t=st=1694847828~exp=1694851428~hmac=cc0c048ba5324ee401705cca3f8c8b02d47d57f765e76adfe871fa38f4a36419&w=1060",
];

const contents=["Vivek Chetan's Electronics","Oh sorry his uncle's Electronics","Visit once remember always",'Very durable']

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-left">
        <div className="carousel-content">
          <h2>{contents[currentIndex]}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, tenetur.</p>
        </div>
      </div>
      <div className="carousel-right">
        <CSSTransition
          key={currentIndex}
          in={true}
          appear={true}
          timeout={1000} // Transition duration
          classNames="slide"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slide-in"
          />
        </CSSTransition>
      </div>
      <button className="carousel-button prev-button" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="carousel-button next-button" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
