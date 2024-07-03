import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import services1 from '../../assets/service/1/1.jpg';
import services2 from '../../assets/service/1/2.png';
import services3 from '../../assets/service/1/3.png';
import services4 from '../../assets/service/1/4.png';
function Service(){
    const [activeService, setActiveService] = useState(1);

    const handleMouseHover = (serviceId) => {
        setActiveService(serviceId);
      };
    
  
    const services = [
      { id: 1, title: 'Company Incorporation', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
      { id: 2, title: 'Secreterial Service', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
      { id: 3, title: 'Virtual Office', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
      { id: 4, title: 'Auditing and Accounting', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' }
    ];
  
    return(
        <section className="service__area pt-110 pb-150">
        <div className="container">
            <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                    <div className="sec-title-wrapper wrap">
                    <h2 className="sec-sub-title title-anim">service</h2>
                    <h3 className="sec-title title-anim">Services we <br />provide</h3>
                    </div>
                </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div className="service__top-text text-anim">
                <p>With every single one of our clients we bring forth a deep passion
                    for <span>creative problem solving
                    innovations</span> forward thinking
                    brands boundaries</p>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div className="service__top-btn">
                <div className="btn_wrapper">
                    <a href="#l" className="btn-item wc-btn-secondary btn-hover">
                    <span></span> View <br />all services <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
                </div>
            </div>
            </div>

            <div className="service__list-wrapper">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                    <div className="service__img-wrapper">
                        <img src={services1} alt="Service Image" className={`service__img img-1 ${activeService === 1 ? 'active' : ''}`} />
                        <img src={services2} alt="Service Image" className={`service__img img-2 ${activeService === 2 ? 'active' : ''}`} />
                        <img src={services3} alt="Service Image" className={`service__img img-3 ${activeService === 3 ? 'active' : ''}`} />
                        <img src={services4} alt="Service Image" className={`service__img img-4 ${activeService === 4 ? 'active' : ''}`} />

                        <span className={`shape-box-1 ${activeService === 1 ? 'current' : ''}`}></span>
                        <span className={`shape-box-2 ${activeService === 2 ? 'current' : ''}`}></span>
                        <span className={`shape-box-3 ${activeService === 3 ? 'current' : ''}`}></span>
                        <span className={`shape-box-4 ${activeService === 4 ? 'current' : ''}`}></span>
                    </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                    <div className="service__list">
                        {services.map(service => (
                        <a href="#" key={service.id}
                            className={activeService === service.id ? 'active' : ''}
                            onMouseMove={() => handleMouseHover(service.id)}
                            >
                            <div className="service__item animation_home1_service" data-service={service.id}>
                            <div className="service__number"><span>{service.id < 10 ? `0${service.id}` : service.id}</span></div>
                            <div className="service__title-wrapper">
                                <h4 className="service__title">{service.title}</h4>
                            </div>
                            <div className="service__text">
                                <p>{service.text}</p>
                            </div>
                            <div className="service__link">
                                <p className='first_icon'><FontAwesomeIcon icon={faArrowRight} /></p>
                                <p className="second_icon"><FontAwesomeIcon icon={faArrowRight} /></p>
                            </div>
                            </div>
                        </a>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Service;