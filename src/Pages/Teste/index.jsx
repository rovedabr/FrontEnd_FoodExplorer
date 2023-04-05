import { Container } from "./styles";
import { Card } from "../../Components/Card"
import { ButtonAddRemove } from "../../Components/ButtonAddRemove";
import { Button } from "../../Components/Button";


import saladaRavanello from "../../assets/meals/saladaRavanello.png"

import { ReactDOM } from "react";

import React from "react";
import { AiOutlineHeart } from "react-icons/ai"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";

import 'swiper/css/navigation'
import 'swiper/css'

export function Teste() {
  return (
      <Container>
        <Swiper
          className="Carousel"        
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            480: {
              slidesPerView: 1.9,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1280: {
              slidesPerView: 4.5,
              spaceBetween: 180
            }
          }}  
        >
          <SwiperSlide>
              <Card
              icon={AiOutlineHeart}
              >
                <img src={saladaRavanello} alt="Imagem do prato de comida" />
                <h2>Salada Ravanello &gt;</h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                <span>R$ 49,97</span>
                <div className="buttons">
              <ButtonAddRemove/>
              <Button>incluir</Button>
            </div>
          </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card
              icon={AiOutlineHeart}
              >
                <img src={saladaRavanello} alt="Imagem do prato de comida" />
                <h2>Salada Ravanello &gt;</h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                <span>R$ 49,97</span>
                <div className="buttons">
              <ButtonAddRemove/>
              <Button>incluir</Button>
            </div>
          </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card
              icon={AiOutlineHeart}
              >
                <img src={saladaRavanello} alt="Imagem do prato de comida" />
                <h2>Salada Ravanello &gt;</h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                <span>R$ 49,97</span>
                <div className="buttons">
              <ButtonAddRemove/>
              <Button>incluir</Button>
            </div>
          </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card
              icon={AiOutlineHeart}
              >
                <img src={saladaRavanello} alt="Imagem do prato de comida" />
                <h2>Salada Ravanello &gt;</h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                <span>R$ 49,97</span>
                <div className="buttons">
              <ButtonAddRemove/>
              <Button>incluir</Button>
            </div>
          </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card
              icon={AiOutlineHeart}
              >
                <img src={saladaRavanello} alt="Imagem do prato de comida" />
                <h2>Salada Ravanello &gt;</h2>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                <span>R$ 49,97</span>
                <div className="buttons">
              <ButtonAddRemove/>
              <Button>incluir</Button>
            </div>
          </Card>
          </SwiperSlide>
   


 

        </Swiper>
{/*         <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}    
        modules={[ Navigation]}
        className="Carousel"
        >
          <SwiperSlide>
          <Card
            icon={AiOutlineHeart}
          >
            <img src={saladaRavanello} alt="Imagem do prato de comida" />
            <h2>Salada Ravanello &gt;</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            <span>R$ 49,97</span>
            <div className="buttons">
              <ButtonAddRemove/>
              <Button>incluir</Button>
            </div>
          </Card>
          </SwiperSlide>
          <SwiperSlide>
        <Card
          icon={AiOutlineHeart}
        >
          <img src={saladaRavanello} alt="Imagem do prato de comida" />
          <h2>Salada Ravanello &gt;</h2>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
          <span>R$ 49,97</span>
          <div className="buttons">
            <ButtonAddRemove/>
            <Button>incluir</Button>
          </div>
        </Card>
        </SwiperSlide>
          <SwiperSlide>

        <Card
              icon={AiOutlineHeart}
            >
              <img src={saladaRavanello} alt="Imagem do prato de comida" />
              <h2>Salada Ravanello &gt;</h2>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
              <span>R$ 49,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
            </SwiperSlide>
          <SwiperSlide>

        <Card
          icon={AiOutlineHeart}
        >
          <img src={saladaRavanello} alt="Imagem do prato de comida" />
          <h2>Salada Ravanello &gt;</h2>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
          <span>R$ 49,97</span>
          <div className="buttons">
            <ButtonAddRemove/>
            <Button>incluir</Button>
          </div>
        </Card>
        </SwiperSlide>
          <SwiperSlide>

        <Card
          icon={AiOutlineHeart}
        >
          <img src={saladaRavanello} alt="Imagem do prato de comida" />
          <h2>Salada Ravanello &gt;</h2>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
          <span>R$ 49,97</span>
          <div className="buttons">
            <ButtonAddRemove/>
            <Button>incluir</Button>
          </div>
        </Card>
        </SwiperSlide>
       
        </Swiper>
        */}



    




      </Container>
  )
}