import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled, { keyframes } from 'styled-components';
import Tesseract from 'tesseract.js';
import ocrimage1 from '../images/ocr1.webp';
import ocrimage2 from '../images/ocr.png';
import ocrimage3 from '../images/ocr3.jpg';
import ocrimage4 from '../images/ocr4.webp';
import ocrimage5 from '../images/ocr5.png';
// Import slick-carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Styled component for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Carousel container
const CarouselWrapper = styled.div`
  .slick-slide {
    transition: transform 0.1s ease-in-out;
    animation: ${fadeIn} 1s ease-in-out;
  }
  
  .slick-prev, .slick-next {
    z-index: 1;
  }
`;

// Image container
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  img {
    width: 100%;  /* Adjust to container's width */
    height: auto; /* Maintain aspect ratio */
    max-height: 500px; /* Limit maximum height */
    border-radius: 10px;
    object-fit: cover; /* Ensures the image covers the area without distortion */
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100%;
    padding: 10px;
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;


const OCRImageCarousel = () => {
  const [texts, setTexts] = useState([]);

  const images = [
    { src: ocrimage1, alt: 'Image 1' },
    { src: ocrimage2, alt: 'Image 2' },
    { src: ocrimage3, alt: 'Image 3' },
    {src: ocrimage4, alt: 'Image 4' },
    {src: ocrimage5, alt: 'Image 4' }
  ];

  useEffect(() => {
    const extractText = async () => {
      const extractedTexts = await Promise.all(images.map(async (image) => {
        const result = await Tesseract.recognize(image.src, 'eng');
        return result.data.text;
      }));
      setTexts(extractedTexts);
    };
    extractText();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">{texts[index]}</div>
          </ImageContainer>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default OCRImageCarousel;
