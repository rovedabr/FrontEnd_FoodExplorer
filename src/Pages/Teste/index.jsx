import { Container } from "./styles";
import { Card } from "../../Components/Card"
import { ButtonAddRemove } from "../../Components/ButtonAddRemove";
import { Button } from "../../Components/Button";

import saladaRavanello from "../../assets/meals/saladaRavanello.png"
import { AiOutlineHeart } from "react-icons/ai"

import React from "react";
import { ReactDOM } from "react";


import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination} from "swiper";
import 'swiper/css/navigation'

export function Teste() {
  return (
      <Container>
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
{/*         
        <Swiper
          breakpoints = {{
            480:  {
              width: 480,
              slidesPerView: 1.8,
              spaceBetween:1
            },
            768: {
              width: 768,
              slidesPerView: 2.5,
              spaceBetween:2
            },
            1280: {
              width: 1280,
              slidesPerView: 4.5,
              spaceBetween:2
            }
          }}
          // spaceBetween={0}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="carrousel"
        >        
        <SwiperSlide>
        <Card className="card"
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

      </Swiper> */}
      </Container>
  )
}