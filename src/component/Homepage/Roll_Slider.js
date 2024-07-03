// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

function roll_slider(props){
    return(
        <Swiper dir={props.dir}
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 0, disableOnInteraction: true }} // autoplay configuration
                speed={2000} // speed of transitions in milliseconds
                loop={true} // enable infinite looping
                centeredSlides={true}
                resistance= {true}
                resistanceRatio={0}
                noSwiping={true}
                // allowTouchMove= {false}
            >
                    <SwiperSlide> 
                        <div class="swiper-slide roll__slide">
                            <h2>Trade Mark</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                    <div class="swiper-slide roll__slide">
                        <h2>De Registration</h2>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                    <div class="swiper-slide roll__slide">
                        <h2>Banking</h2>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div class="swiper-slide roll__slide">
                            <h2>Frinance</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div class="swiper-slide roll__slide">
                            <h2>Rental</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div class="swiper-slide roll__slide">
                            <h2>Marketing</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div class="swiper-slide roll__slide">
                            <h2>Collatarel</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div class="swiper-slide roll__slide">
                            <h2>Non Collatarel</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div class="swiper-slide roll__slide">
                            <h2>Mortage</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                    <div class="swiper-slide roll__slide">
                        <h2>Juridiction</h2>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                    <div class="swiper-slide roll__slide">
                        <h2>Strategy</h2>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                    <div class="swiper-slide roll__slide">
                        <h2>Branding</h2>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                    <div class="swiper-slide roll__slide">
                        <h2>Agency</h2>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                    <div class="swiper-slide roll__slide">
                        <h2>Interaction</h2>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                    <div class="swiper-slide roll__slide">
                        <h2>DIgital SOlution</h2>
                    </div>
                    </SwiperSlide>
    
                {/* Add more slides as needed */}
            </Swiper>
    )
}
export default roll_slider;