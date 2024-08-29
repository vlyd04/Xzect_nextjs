// import React from "react";
// import Image from "next/image";
// import air from '../../assets/images/air.avif'
// import ocean from '../../assets/images/ship.avif'
// import truck from '../../assets/images/truck.avif'
// import airicon from '../../assets/images/air-plane.png'
// import oceanicon from '../../assets/images/cargo-boat.png'
// import freight from '../../assets/images/freight.png'

// const services = [
//   {
//     id: 1,
//     imgSrc: air,
//     altText: 'Air Freight',
//     iconSrc: airicon,
//     title: 'Air Freight Service'
//   },
//   {
//     id: 2,
//     imgSrc: ocean,
//     altText: 'Ocean Freight',
//     iconSrc: oceanicon,
//     title: 'Ship Freight Service'
//   },
//   {
//     id: 3,
//     imgSrc: truck,
//     altText: 'Road Freight',
//     iconSrc: freight,
//     title: 'Road Freight Service'
//   }
// ];
// const Services: React.FC = () => {
//   return (
//     <>
  
//       <section id="services">
//       <p>CUSTOMER TEAMS & AN AGILE SERVICES</p>
//       <h1>Specialist logistic services</h1>
//       <div className="swiper-container">
//       <div className="swiper-wrapper">
//           {services.map(service => (
//             <div className="swiper-slide service-item" key={service.id}>
//               <div className="overlay">
//                 <div className="service-icon">
//                   <Image src={service.iconSrc} alt={`${service.altText} icon`} width={50} height={50}/>
//                 </div>
//                 <h3>{service.title}</h3>
//               </div>
//               <Image src={service.imgSrc}  alt={service.altText}  width={350} height={450}/>
//             </div>
        
//           ))}
//               </div>
//               <div className="swiper-pagination"></div>

//         </div>
//     </section>

//     </>
//   );
// };

// export default Services;

"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import air from '../../assets/images/air.avif';
import ocean from '../../assets/images/ship.avif';
import truck from '../../assets/images/truck.avif';
import airicon from '../../assets/images/air-plane.png';
import oceanicon from '../../assets/images/cargo-boat.png';
import freight from '../../assets/images/freight.png';

const services = [
  {
    id: 1,
    imgSrc: air,
    altText: 'Air Freight',
    iconSrc: airicon,
    title: 'Air Freight Service'
  },
  {
    id: 2,
    imgSrc: ocean,
    altText: 'Ocean Freight',
    iconSrc: oceanicon,
    title: 'Ship Freight Service'
  },
  {
    id: 3,
    imgSrc: truck,
    altText: 'Road Freight',
    iconSrc: freight,
    title: 'Road Freight Service'
  },
  {
    id: 5,
    imgSrc: air,
    altText: 'Air Freight',
    iconSrc: airicon,
    title: 'Air Freight Service'
  },
  {
    id: 5,
    imgSrc: ocean,
    altText: 'Ocean Freight',
    iconSrc: oceanicon,
    title: 'Ship Freight Service'
  },
  {
    id: 6,
    imgSrc: truck,
    altText: 'Road Freight',
    iconSrc: freight,
    title: 'Road Freight Service'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services">
      <p>CUSTOMER TEAMS & AN AGILE SERVICES</p>
      <h1>Specialist logistic services</h1>
      <Swiper
        modules={[ Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        navigation={false}
      >
        {services.map(service => (
          <SwiperSlide key={service.id}>
            <div className="service-container">
            <div className="service-item">
              <div className="overlay">
                <div className="service-icon">
                  <Image src={service.iconSrc} alt={`${service.altText} icon`} width={50} height={50} />
                </div>
                <h3>{service.title}</h3>
              </div>
              <Image src={service.imgSrc} alt={service.altText} width={350} height={480} />
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;

