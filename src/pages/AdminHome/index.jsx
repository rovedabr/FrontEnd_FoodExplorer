import React from "react";
import { TbPencil } from "react-icons/tb"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import 'swiper/css/navigation'
import 'swiper/css'

import { AdminHeader } from "../../components/AdminHeader"
import { AdminNavbar } from "../../components/AdminNavbar"

import { Container } from "./styles"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { Banner } from "../../components/Banner"
import { Section } from "../../components/Section"
import { ButtonAddRemove } from "../../components/ButtonAddRemove"

import saladaRavanello from "../../assets/meals/saladaRavanello.png"
import spaguettiGambe from "../../assets/meals/spaguettiGambe.png"
import torradasParma from "../../assets/meals/TorradasParma.png"
import saladaMolla from "../../assets/meals/saladaMolla.png"

import peachyPastrie from "../../assets/meals/peachyPastrie.png"
import boloDamasco from "../../assets/meals/boloDamasco.png"
import prugnaPie from "../../assets/meals/prugnaPie.png"
import macarrons from "../../assets/meals/macarrons.png"

import sucoMaracuja from "../../assets/meals/SucoMaracuja.png"
import pomoBourboun from "../../assets/meals/pomoBourbon.png"
import expresso from "../../assets/meals/cafeExpresso.png"
import teAutunno from "../../assets/meals/teAutunno.png"

export function AdminHome() {

  const admin = true

  return (
    <Container>
    <AdminNavbar/>
    <AdminHeader/>
  
    <Banner/>
//*--------------------------------------------------------
    <Section 
      className="mainMeal"
      title="Refeições"
    >
       <Swiper
        className="Carousel"        
        slidesPerView={1.6}
        spaceBetween={10}
        loop={true}
        navigation={true}
        mousewheel={true}
        modules={[Navigation]}
        breakpoints={{          
          480: { 
            width: 480,
            slidesPerView: 2.1,
            spaceBetween: 15
          },          
          768: { 
            width: 768,
            slidesPerView: 3.2,
            spaceBetween: 25
          },
          1280: { 
            width: 1280,
            slidesPerView: 4,
            spaceBetween: 35
          },          
        }}
      >
        <SwiperSlide>
          <Card
            icon={TbPencil}
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
                icon={TbPencil}
                >
                  <img src={torradasParma} alt="Imagem do prato de comida" />
                  <h2>Torradas de Parma &gt;</h2>
                  <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                  <span>R$ 25,97</span>
                  <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
            </SwiperSlide> 

            <SwiperSlide>
                <Card
                icon={TbPencil}
                >
                  <img src={saladaMolla} alt="Imagem do prato de comida" />
                  <h2>Salada Molla &gt;</h2>
                  <p>Massa fresca com camarões e pesto. </p>
                  <span>R$ 79,97</span>
                  <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
            </SwiperSlide>

            <SwiperSlide>
                <Card
                icon={TbPencil}
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
            icon={TbPencil}
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
    </Section>
//*--------------------------------------------------------
    <Section
      className="mainMeal"
      title="Sobremesas"
    >
      <Swiper
        className="Carousel"        
        slidesPerView={1.6}
        spaceBetween={10}
        loop={true}
        navigation={true}
        mousewheel={true}
        modules={[Navigation]}
        breakpoints={{          
          480: { 
            width: 480,
            slidesPerView: 2.1,
            spaceBetween: 15
          },          
          768: { 
            width: 768,
            slidesPerView: 3.2,
            spaceBetween: 25
          },
          1280: { 
            width: 1280,
            slidesPerView: 4,
            spaceBetween: 35
          },          
        }}
      >     
         <SwiperSlide>
            <Card
              icon={TbPencil}
            >
              <img src={prugnaPie} alt="Imagem do prato de sobremesa" />
              <h2>Prugna Pie &gt;</h2>
              <p>Torta de ameixa com massa amanteigada, polvilho em açúcar.</p>
              <span>R$ 79,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              icon={TbPencil}
            >
              <img src={peachyPastrie} alt="Imagem do prato de sobremesa" />
              <h2>Peachy pastrie &gt;</h2>
              <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
              <span>R$ 32,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              icon={TbPencil}
            >
              <img src={macarrons} alt="Imagem do prato de sobremesa" />
              <h2>Macarons &gt;</h2>
              <p>Farinha de amêndoas, manteiga, claras e açúcar.</p>
              <span>R$ 79,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>           
          </SwiperSlide>
           <SwiperSlide>              
            <Card
              icon={TbPencil}
            >
              <img src={boloDamasco} alt="Imagem do prato de sobremesa" />
              <h2>Bolo de Damasco &gt;</h2>
              <p>Damascos frescos em uma massa sem glúten. </p>
              <span>R$ 19,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </SwiperSlide> 
        </Swiper>

    </Section>
//*--------------------------------------------------------
    <Section
      className="mainMeal"
      title="Bebidas"
    >
      <Swiper
        className="Carousel"        
        slidesPerView={1.6}
        spaceBetween={10}
        loop={true}
        navigation={true}
        mousewheel={true}
        modules={[Navigation]}
        breakpoints={{          
          480: { 
            width: 480,
            slidesPerView: 2.1,
            spaceBetween: 15
          },          
          768: { 
            width: 768,
            slidesPerView: 3.2,
            spaceBetween: 25
          },
          1280: { 
            width: 1280,
            slidesPerView: 4,
            spaceBetween: 35
          },          
        }}
      >
        <SwiperSlide>
            <Card
              icon={TbPencil}
            >
              <img src={expresso} alt="Imagem da bebida" />
              <h2>Expresso &gt;</h2>
              <p>Café cremoso feito na temperatura e pressões perfeitas.</p>
              <span>R$ 15,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </SwiperSlide> 

          <SwiperSlide>
            <Card
              icon={TbPencil}
            >
              <img src={sucoMaracuja} alt="Imagem da bebida" />
              <h2>Suco de maracujá &gt;</h2>
              <p>Suco de maracujá gelado, cremoso, docinho..</p>
              <span>R$ 13,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              icon={TbPencil}
            >
              <img src={teAutunno} alt="Imagem da bebida" />
              <h2>Tè d'autunno  &gt;</h2>
              <p>Chá de anis, canela e limão. Sinta o outono italiano.</p>
              <span>R$ 19,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </SwiperSlide>
           <SwiperSlide>
            <Card
              icon={TbPencil}
            >
              <img src={pomoBourboun} alt="Imagem da bebida" />
              <h2>Pomo bourbon &gt;</h2>
              <p>Maçã, whisky, canela. On the rocks. </p>
              <span>R$ 79,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </SwiperSlide>
      </Swiper>
    </Section>
{/*--------------------------------------------------------*/}
      <Footer/> 
    </Container>
  )
}
