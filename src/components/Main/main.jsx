import React, { useState } from "react";
import {
  AiFillInfoCircle,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { FaChevronLeft, FaChevronRight, FaCirclePlay } from "react-icons/fa6";
import banner from "../../assets/banner.jpg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";

import { MdAddCircleOutline } from "react-icons/md";
import "./style.css";
function Main() {
  const [onHover, setOnHover] = useState(false);

  const slides = [
    {id:0 , src: img1},
    {id:1 , src: img2},
    {id:2 , src: img3},
    {id:3 , src: img4},
    {id:4 , src: img5},
    {id:5 , src: img6},
    {id:6 , src: img7},
    {id:7 , src: img8},
    {id:8 , src: img9},
  ];
  const [currentId, setCurrentId] = useState(slides[0].id);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentId((prevId) => {
      const nextId = prevId + 1;
      return nextId >= 5 ? prevId : nextId;
    });
  };

  const prevSlide = () => {
    setCurrentId((prevId) => {
      const nextId = prevId - 1;
      return prevId > 0 ? nextId : prevId;
    });
  };
  console.log(currentId);

  const randomSlide = slides[Math.floor(Math.random() * slides.length)];
  return (
    <main className="landing-page">
      <header>
        <div className="vignette"></div>
        <img src={randomSlide.src} alt="banner" className="banner" />
        <div className="banner-content">
          <h1>Dune: Part Two</h1>
          <p>
            Follow the mythic journey of Paul Atreides as he unites with Chani
            and the Fremen while on a path of revenge against the conspirators
            who destroyed h...
          </p>
          <div className="banner-options">
            <a href="#">
              <button className="banner-options-play">
                <FaCirclePlay size={28} />
                Play
              </button>
            </a>
            <button className="banner-options-info">
              <AiFillInfoCircle size={28} />
              Info
            </button>
          </div>
        </div>
      </header>
      <section className="slider">
        <h2 className="slider-title">Fakeflix originals</h2>
        <div className="slider-wrapper ">
          <button className="slider-btn left" onClick={prevSlide}>
            <FaChevronLeft size={25} />
          </button>

          <ul className="slider-content">
            {slides.map((slide) => (
              <div
              key={slide.id}
                className={`slider-item1 ${
                  slide.id === currentId ? "active" : ""
                }`}
                style={{
                  transform: `translateX(-${
                    (currentId % totalSlides) * 100
                  }%)  `,
                }}
              >
                <li
                  key={slide.id}
                  className="li-wrapper"
                  onMouseEnter={() => setOnHover(slide.id === currentId)}
                  onMouseLeave={() => setOnHover(false)}
                >
                  {onHover && slide.id === 0 ? (
                    <div className="hovered-content">
                      <img
                        src="https://image.tmdb.org/t/p/original//hib8MpBPU7GdluS38htXCF4uw0c.jpg"
                        alt=""
                        className="hovered-img"
                      />
                      <div className="img-icon-container">
                        <FaCirclePlay size={25} />
                        <MdAddCircleOutline size={25} />
                        <AiOutlineLike size={25} />
                        <AiOutlineDislike size={25} />
                      </div>
                      <ul className="slider-hovered-type">
                        <li>Crime</li>
                        <li>Drama</li>
                        <li>Romance</li>
                      </ul>
                      <div className="slider-movie-title">
                        <p>Recommended at 79.18 %</p>
                        <p>· 1999 ·</p>
                      </div>
                      <div className="slider-movie-description">
                        <p>
                          In the criminal justice system, sexually-based
                          offenses are considered especially heinous. In New
                          York City, the dedicated detectives who investigate
                          these vicious felonies are members of an elite squad
                          known as the Special Victims Unit. These are their
                          stories.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <img src={slide.src} alt="" className="img1" />
                  )}
                  
                </li>
              </div>
            ))}
          </ul>
          <button className="slider-btn right" onClick={nextSlide}>
            <FaChevronRight size={25} />
          </button>
        </div>
      </section>
      <section className="slider">
        <h2 className="slider-title">Top rated tv shows</h2>
        <div className="slider-wrapper">
          <button className="slider-btn">
            <FaChevronLeft size={25} />
          </button>

          <ul className="slider-content">
            <li className="slider-item">
              <img src={img2} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img5} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img4} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img3} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img1} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img6} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img7} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img8} alt="" className="img1" />
            </li>
          </ul>
          <button className="slider-btn right">
            <FaChevronRight size={25} />
          </button>
        </div>
      </section>
      <section className="slider">
        <h2 className="slider-title">Top rated movies</h2>
        <div className="slider-wrapper">
          <button className="slider-btn">
            <FaChevronLeft size={25} />
          </button>

          <ul className="slider-content">
            <li className="slider-item">
              <img src={img3} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img3} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img3} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img3} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img3} alt="" className="img1" />
            </li>
          </ul>
          <button className="slider-btn right">
            <FaChevronRight size={25} />
          </button>
        </div>
      </section>
      <section className="slider">
        <h2 className="slider-title">Trending</h2>
        <div className="slider-wrapper">
          <button className="slider-btn">
            <FaChevronLeft size={25} />
          </button>

          <ul className="slider-content">
            <li className="slider-item">
              <img src={img4} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img4} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img4} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img4} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img4} alt="" className="img1" />
            </li>
          </ul>
          <button className="slider-btn right">
            <FaChevronRight size={25} />
          </button>
        </div>
      </section>
      <section className="slider">
        <h2 className="slider-title">Drama</h2>
        <div className="slider-wrapper">
          <button className="slider-btn">
            <FaChevronLeft size={25} />
          </button>

          <ul className="slider-content">
            <li className="slider-item">
              <img src={img5} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img5} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img5} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img5} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img5} alt="" className="img1" />
            </li>
          </ul>
          <button className="slider-btn right">
            <FaChevronRight size={25} />
          </button>
        </div>
      </section>
      <section className="slider">
        <h2 className="slider-title">Animation</h2>
        <div className="slider-wrapper">
          <button className="slider-btn">
            <FaChevronLeft size={25} />
          </button>

          <ul className="slider-content">
            <li className="slider-item">
              <img src={img6} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img6} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img6} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img6} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img6} alt="" className="img1" />
            </li>
          </ul>
          <button className="slider-btn right">
            <FaChevronRight size={25} />
          </button>
        </div>
      </section>
      <section className="slider">
        <h2 className="slider-title">Sci-Fi</h2>
        <div className="slider-wrapper">
          <button className="slider-btn">
            <FaChevronLeft size={25} />
          </button>

          <ul className="slider-content">
            <li className="slider-item">
              <img src={img7} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img7} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img7} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img7} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img7} alt="" className="img1" />
            </li>
          </ul>
          <button className="slider-btn right">
            <FaChevronRight size={25} />
          </button>
        </div>
      </section>
      <section className="slider">
        <h2 className="slider-title">Mystery</h2>
        <div className="slider-wrapper">
          <button className="slider-btn">
            <FaChevronLeft size={25} />
          </button>

          <ul className="slider-content">
            <li className="slider-item">
              <img src={img8} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img8} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img8} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img8} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img8} alt="" className="img1" />
            </li>
          </ul>
          <button className="slider-btn right">
            <FaChevronRight size={25} />
          </button>
        </div>
      </section>
      <section className="slider">
        <h2 className="slider-title">Documentaries</h2>
        <div className="slider-wrapper">
          <button className="slider-btn">
            <FaChevronLeft size={25} />
          </button>

          <ul className="slider-content">
            <li className="slider-item">
              <img src={img9} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img9} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img9} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img9} alt="" className="img1" />
            </li>
            <li className="slider-item">
              <img src={img9} alt="" className="img1" />
            </li>
          </ul>
          <button className="slider-btn right">
            <FaChevronRight size={25} />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
