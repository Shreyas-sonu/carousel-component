import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://img.freepik.com/free-photo/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpg?t=st=1694868402~exp=1694872002~hmac=9134a9ba964ad58c8aab7630ccfdd6e602f4020f6a615fc305230b1fb07c4f70&w=900",
  "https://img.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8861.jpg?w=900&t=st=1694868453~exp=1694869053~hmac=7c2cdad4fb5ab3e4e801cc590776bf031b63021d181c7783a0f269af4e10ee6b",
  "https://img.freepik.com/free-photo/glowing-computer-chips-row-technology-illuminates-generated-by-ai_188544-16626.jpg",
  "https://img.freepik.com/free-photo/expert-technician-repairs-complex-circuit-board-with-precision-skill-generated-by-ai_188544-55816.jpg?t=st=1694847828~exp=1694851428~hmac=cc0c048ba5324ee401705cca3f8c8b02d47d57f765e76adfe871fa38f4a36419&w=1060",
];

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="carousel-slide">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
              <div className="carousel-content">
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;