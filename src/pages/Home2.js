import portfolio1 from '../assets/portfolio/portfolio-home-6/portfolio-01.jpg'
import portfolio2 from '../assets/portfolio/portfolio-home-6/portfolio-05.jpg'
import portfolio3 from '../assets/portfolio/portfolio-home-6/portfolio-04.jpg'
import portfolio4 from '../assets/portfolio/portfolio-home-6/portfolio-02.jpg'
import React, { useState, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';
// import './Slider9Component.css'; // Ensure you have the appropriate CSS classes defined

function Home2(){
    const [activeService, setActiveService] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [current, setCurrent] = useState(0);
  
    const images = [portfolio1, portfolio2, portfolio3, portfolio4];
    const titles = [
      'Lorem Ipsum <span>Lorem Ipsum</span>',
      'Lorem Ipsum <span>Lorem Ipsum</span>',
      'Lorem Ipsum <span>Lorem Ipsum</span>',
      'Lorem Ipsum <span>Lorem Ipsum</span>',
    ];
    const contents = [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum ',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum ',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum ',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum ',
    ];
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (['ArrowDown', 'ArrowRight'].includes(e.key)) {
          go(1);
        } else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {
          go(-1);
        }
      };
  
      const handleWheel = (e) => {
        if (e.deltaY < -40) {
          go(-1);
        } else if (e.deltaY >= 40) {
          go(1);
        }
      };
  
      const handleMouseDown = (e) => {
        setActiveService(e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY);
      };
  
      const handleMouseUp = (e) => {
        if (activeService && Math.abs(activeService - (e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY)) >= 40) {
          go(!(Math.min(0, activeService - (e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY))) ? 1 : -1);
          setActiveService(null);
        }
      };
  
      const handleTouchMove = (e) => {
        if (activeService) {
          setActiveService(e.touches[0].clientY || e.targetTouches[0].clientY);
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('wheel', handleWheel);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('touchstart', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('touchstart', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchend', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
      };
    }, [activeService]);
  
    const go = (dir) => {
      if (!playing) {
        setPlaying(true);
        let newCurrent = current + dir;
        if (newCurrent < 0) newCurrent = images.length - 1;
        else if (newCurrent >= images.length) newCurrent = 0;
  
        const animOptions = {
          duration: 2.3,
          ease: Power4.easeInOut,
        };
  
        const up = (part, next) => {
          part.appendChild(next);
          gsap
            .to(part, { ...animOptions, y: -window.innerHeight })
            .then(() => {
              part.children[0].remove();
              gsap.to(part, { duration: 0, y: 0 });
            });
        };
  
        const down = (part, next) => {
          part.prepend(next);
          gsap.to(part, { duration: 0, y: -window.innerHeight });
          gsap.to(part, { ...animOptions, y: 0 }).then(() => {
            part.children[1].remove();
            setPlaying(false);
          });
        };
  
        const parts = document.querySelectorAll('.part');
        parts.forEach((part, p) => {
          const next = document.createElement('a');
          next.href = 'http://127.0.0.1:5500/service-details.html';
          next.className = 'section';
          const img = document.createElement('img');
          img.src = images[newCurrent];
          next.appendChild(img);
          const h2 = document.createElement('h2');
          h2.innerHTML = titles[newCurrent];
          next.appendChild(h2);
          const pTag = document.createElement('p');
          pTag.innerHTML = contents[newCurrent];
          next.appendChild(pTag);
  
          if ((p - Math.max(0, dir)) % 2) {
            down(part, next);
          } else {
            up(part, next);
          }
        });
  
        setCurrent(newCurrent);
      }
    };
      
        return (
          <div className="hero_layer_9">
            <div className="slider9_images" style={{ display: 'none' }}>
              <div className="slider9_item">
                <div className="slider9_image">
                  <img src={portfolio1} alt="Portfolio Thumb" />
                </div>
                <div className="slide9_content">
                  <h2>Lorem Ipsum <span>Lorem Ipsum</span></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum </p>
                  <div className="slider_link">link one</div>
                </div>
              </div>
              <div className="slider9_item">
                <div className="slider9_image">
                  <img src={portfolio2} alt="Portfolio Thumb" />
                </div>
                <div className="slide9_content">
                  <h2>Lorem Ipsum <span>Lorem Ipsum</span></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum </p>
                  <div className="slider_link">link 3</div>
                </div>
              </div>
              <div className="slider9_item">
                <div className="slider9_image">
                  <img src={portfolio3} alt="Portfolio Thumb" />
                </div>
                <div className="slide9_content">
                  <h2>Lorem Ipsum <span>Lorem Ipsum</span></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum </p>
                  <div className="slider_link">link 5</div>
                </div>
              </div>
              <div className="slider9_item">
                <div className="slider9_image">
                  <img src={portfolio4} alt="Portfolio Thumb" />
                </div>
                <div className="slide9_content">
                  <h2>Lorem Ipsum <span>Lorem Ipsum</span></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum </p>
                  <div className="slider_link">link 6</div>
                </div>
              </div>
            </div>
            <div id="main">
              <div className="content"></div>
              <div className="part showed">
                <a href="http://127.0.0.1:5500/service-details.html" className="section">
                  <img src={portfolio1} alt="Portfolio Thumb" />
                  <h2>Lorem Ipsum <span>Lorem Ipsum</span></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum </p>
                </a>
              </div>
              <div className="part">
                <a href="http://127.0.0.1:5500/service-details.html" className="section">
                  <img src={portfolio2} alt="Portfolio Thumb" />
                  <h2>Lorem Ipsum <span>Lorem Ipsum</span></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum </p>
                </a>
              </div>
              <div className="part">
                <a href="http://127.0.0.1:5500/service-details.html" className="section">
                  <img src={portfolio3} alt="Portfolio Thumb" />
                  <h2>Lorem Ipsum <span>Lorem Ipsum</span></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum </p>
                </a>
              </div>
            </div>
          </div>
        );
      };
      

export default Home2;