import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import aboutimg from '../assets/about/1/1.jpg';
import aboutimg2 from '../assets/about/1/2.jpg';
import RollSlider from "../component/Homepage/Roll_Slider";
import 'swiper/css';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Service from '../component/Homepage/Service';

function Home() {
    useEffect(() => {
        const all_btns = document.querySelectorAll(".btn_wrapper");
        const all_btn = all_btns.length > 0 ? all_btns : document.querySelectorAll("#btn_wrapper");
        const all_btn_circle = document.querySelectorAll(".btn-item");

        const callParallax = (e, target, movement) => {
            const relX = e.pageX - target.offsetLeft;
            const relY = e.pageY - target.offsetTop;

            gsap.to(target, {
                duration: 0.5,
                x: ((relX - target.offsetWidth / 2) / target.offsetWidth) * movement,
                y: ((relY - target.offsetHeight / 2) / target.offsetHeight) * movement,
                ease: "Power2.easeOut",
            });
        };

        all_btn.forEach((btn, i) => {
            const btn_circle = all_btn_circle[i];

            const mouseMoveHandler = (e) => callParallax(e, btn_circle, 10);
            const mouseLeaveHandler = () => {
                gsap.to(btn_circle, {
                    duration: 0.5,
                    x: 0,
                    y: 0,
                    ease: "Power2.easeOut",
                });
            };

            btn.addEventListener('mousemove', mouseMoveHandler);
            btn.addEventListener('mouseleave', mouseLeaveHandler);

            // Clean up event listeners on unmount
            return () => {
                btn.removeEventListener('mousemove', mouseMoveHandler);
                btn.removeEventListener('mouseleave', mouseLeaveHandler);
            };
        });
    }, []);
    return (
        <>
            <section className="roll__area-2">
                <div className="swiper roll__slider">
                    <div className="swiper-wrapper roll__wrapper">
                        <RollSlider dir={'ltl'} />
                    </div>
                </div>
            </section>
            <section className="roll__area-3">
                <div className="swiper roll__slider">
                    <div className="swiper-wrapper roll__wrapper">
                        <RollSlider dir={'rtl'} />
                    </div>
                </div>
            </section>
 

            {/* About area start */}
            <section id="section2" className="about__area">
                <div className="container line g-0 pt-140 pb-130">
                    <span className="line-3"></span>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="about__title-wrapper">
                                <h3 className="sec-title title-anim">
                                    We unlock the potential of your business Registration services
                                </h3>
                            </div>
                            <div className="about__content-wrapper">
                                <div className="about__img">
                                    <div className="img-anim">
                                        <img src={aboutimg} alt="About Image" data-speed="0.3" />
                                    </div>
                                    <div className="about__img-right">
                                        <img src={aboutimg2} alt="About Image Right" data-speed="0.5" />
                                        <div className="shape">
                                            <div className="secondary" data-speed="0.9"></div>
                                            <div className="primary"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about__content text-anim">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                    <div className="cursor-btn btn_wrapper">
                                        <a className="btn-item wc-btn-primary btn-hover" href="about.html">
                                            <span></span> Explore Us <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About area end */}
            
            {/* <!-- Service area start --> */}
                <Service/>
             {/* <!-- Service area end --> */}
        </>
    );
}

export default Home;
