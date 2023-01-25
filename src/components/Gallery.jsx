import React, { useState } from "react";
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import '../styles/Tour.scss'

export default function Gallery({galleryImages}) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  return (
    <div>
     
      <div>
        {openModal && (
          <div className="sliderWrap">
            <AiFillCloseCircle
              className="btnClose"
              onClick={handleCloseModal}
            />
            <BiSkipPrevious
              className="btnPrev"
              onClick={prevSlide}
            />
            <BiSkipNext
              className="btnNext"
              onClick={nextSlide}
            />
            <div className="fullScreenImage">
              <img src={galleryImages[slideNumber].img} alt="" />
            </div>
          </div>
        )}

        <div className="galleryWrap">
          {galleryImages &&
            galleryImages.map((slide, index) => {
              return (
                <div
                  className="single"
                  key={index}
                  onClick={() => handleOpenModal(index)}
                >
                  <img src={slide.img} alt="" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
