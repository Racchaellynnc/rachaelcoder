
import React, { useState } from "react";
import './carousel-styles.scss';
import Carousel from 'react-bootstrap/Carousel';
import LwModal from '../modal/lw-modal';
import CoderalityModal from '../modal/coderality-modal';
import { ReactComponent as CoderalityPhoto } from '../../assets/coderality.svg';
import { ReactComponent as LwPhoto } from '../../assets/lw.svg';


function ProjectCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carousel-container" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={4000}>
        <div className="carousel-image-wrapper">
           <div className="image1"></div> 
        </div>
        <Carousel.Caption className="caption-wrapper">
          <h3>Lavish Web Creations</h3>
            <p className="description">
                <div>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </div>
                <div>
                    <LwModal className="modal-button"/>    
                </div>
            </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <div className="image2"></div>
        <Carousel.Caption className="caption-wrapper">
          <h3>Coderality</h3>
          <p className="description">
            <div>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </div>
            <div>
                <CoderalityModal className="modal-button"/>    
            </div>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

     <Carousel.Item interval={4000}>
        <div className="image3" ></div>
        <Carousel.Caption className="caption-wrapper">
          <h3>Casting Frontier</h3>
         
          <p className="description">
            <div>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </div>
            <div>
                <CoderalityModal className="modal-button"/>    
            </div>
          </p>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }

  export default ProjectCarousel;