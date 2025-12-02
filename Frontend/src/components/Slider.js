import React from "react";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
// const swiper = new Swiper(...);

const Slider = () => {
  return (
    <>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="b1.png" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-zoom-container">
              <img src="b1.png" />
            </div>
          </div>
          <div class="swiper-slide">Plain slide with text</div>
          <div class="swiper-slide">
            {/* <!-- Override maxRatio parameter --> */}
            <div class="swiper-zoom-container" data-swiper-zoom="5">
              <img src="b1.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
