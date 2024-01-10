import React from "react";
import "./index.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function HeroSection() {
  
  return (
    <section id="Hero">
      <Splide
        aria-label="My Favorite Images"
        style={{width:"100%"}}
        options={{
          rewind: true,
          // width: 2000,
          gap   : '1rem',
          autoWidth: true,
          padding: { left: '150px', top: '300px' },
          height:800,
          autoHeight:true,
          gap: "100rem",
          pagination: false,
        }}
      >
        <SplideSlide>
          <div className="servicesTitle">
            <div className="lineTitle">
              <div className="orangeLine"></div>
              <h4>COMMITTED TO SUCCESS</h4>
            </div>
            <h1>We help to grow your business</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                dolorem suscipit fugit reprehenderit tempora earum repellendus,
                nam dicta consectetur?
              </p>
            <button>OUR SERVICES</button>
          </div>
        </SplideSlide>
  
        
      </Splide>
    </section>
  );
}

export default HeroSection;
