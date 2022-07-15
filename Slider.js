import React, { useState } from "react";

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
       setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="styled-slider">
                   <button class="btn btn-dark left-arrow" onClick={prevSlide}>
                       <i class="bi bi-chevron-compact-left"></i>
                  </button>
              
                 <button class="btn btn-dark right-arrow" onClick={nextSlide}>
                     <i class="bi bi-chevron-compact-right"></i>
                  </button>
              
            {slides.map((slide, index) => {
              return (
                  <div key={index}>
                      {index === current && (
                          <img className="slide-image" src={slide.image} alt=""/>
                      )}
                  </div>
              );
           })}
        </div>
    );
};

export default Slider;