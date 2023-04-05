import { Container } from "./styles";
import { Card } from "../../Components/Card"
import { ButtonAddRemove } from "../../Components/ButtonAddRemove";
import { Button } from "../../Components/Button";
import { Carousel } from "../../Components/Carousel";

import saladaRavanello from "../../assets/meals/saladaRavanello.png"
import { AiOutlineHeart } from "react-icons/ai"

import React from "react";
import { ReactDOM } from "react";


import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from "swiper";

export function Teste() {
  return (
      <Container>

        <Carousel>
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

        </Carousel>
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