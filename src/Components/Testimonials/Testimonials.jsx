import React from "react";
import './Testimonials.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
    const clients = [
      {
        img: profilePic1,
        review:
          "Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.",
      },
      {
        img: profilePic2,
        review:
          "Copo furadis é disculpa de bebadis, arcu quam euismod magna.Manduma pindureta quium dia nois paga. Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim.",
      },
      {
        img: profilePic3,
        review:
          "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Leite de capivaris, leite de mula manquis sem cabeça.Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Manduma pindureta quium dia nois paga.",
      },
      {
        img: profilePic4,
        review:
          "Quem num gosta di mé, boa gentis num é.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Mé faiz elementum girarzis.",
      },
    ];
  
    return (
      <div className="t-wrapper" id="testimonial">
        <div className="t-heading">
          <span>Os clientes sempre recebem </span>
          <span>Trabalho excepcional </span>
          <span>de mim...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
  
        </div>
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <img src={client.img} alt="" />
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  };
  
  export default Testimonial;
 