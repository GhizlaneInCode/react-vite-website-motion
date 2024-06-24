import React, { useRef, useEffect, useState } from 'react';
import "./popUp.scss";
import { Carousel } from 'react-responsive-carousel';


const PopUp = ({ onClose, images }) => {


  return (

    <div className="carousel-wrapper">
      <button className="close-btn" onClick={onClose} >Close</button>
      <Carousel useKeyboardArrows={true} autoPlay={true} infiniteLoop={true}
        statusFormatter={(currentItem, total) => {
          return (
            <p>
              image {currentItem} of {total}
            </p>
          );
        }}
      >
        {images.map((image, index) => (
          <div key={index} >
            <img src={image} key={index} alt={`Slide ${index}`} />
          </div>
        ))}

      </Carousel>
    </div>

  );
};



export default PopUp;
