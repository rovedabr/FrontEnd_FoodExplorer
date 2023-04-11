import React from "react";
import { Link, useNavigate } from "react-router-dom";

import heart from "../../assets/Icons/heart.svg"
import pencil from "../../assets/Icons/pencil.svg"

import { useAuth } from "../../hooks/auth";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import 'swiper/css/navigation'
import 'swiper/css'


import { Container } from "./styles"
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { AdminHeader } from "../../components/AdminHeader"
import { Navbar } from "../../components/NavBar"
import { AdminNavbar } from "../../components/AdminNavbar"
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

export function Home() {
  const { user } = useAuth();
  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true)  

  const navigate = useNavigate();

  function editMeal() {
    return navigate("/editmeal")
  }

  return (
    <Container>
      { isAdmin === 1 ? <AdminNavbar/> : <Navbar/> }
      { isAdmin === 1 ? <AdminHeader/> : <Header/> }
    
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
          loop={false}
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
            <Card>   
              { isAdmin === 1 ? 
                <input 
                  type="image" 
                  src={pencil} 
                  alt="ícone de um lápis"
                  onClick={editMeal} 
                />  :
                <input 
                  type="image" 
                  src={heart} 
                  alt="ícone de um coração" 
                />
              }
              <img src={saladaRavanello} alt="Imagem do prato de comida" />
              <Link
              
              >
                <h2>Salada Ravanello &gt;</h2>
              </Link> 

              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
              <span>R$ 49,97</span>
              { isAdmin === 1 ? <div className="hide"></div> :
                <div className="buttons">
                  <ButtonAddRemove/>
                  <Button title="incluir"/>
                </div>          
              }
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
          loop={false}
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
            <Card>   
                { isAdmin === 1 ? 
                  <input 
                    type="image" 
                    src={pencil} 
                    alt="ícone de um lápis" 
                  />  :
                  <input 
                    type="image" 
                    src={heart} 
                    alt="ícone de um coração" 
                  />
                }
                <img src={prugnaPie} alt="Imagem do prato de sobremesa" />
                <Link
              
                >
                  <h2>Prugna Pie &gt;</h2>
                </Link>

                <p>Torta de ameixa com massa amanteigada, polvilho em açúcar.</p>
                <span>R$ 79,97</span>
                { isAdmin === 1 ? <div className="hide"></div> :
                  <div className="buttons">
                    <ButtonAddRemove/>
                    <Button title="incluir"/>
                  </div>          
                 }
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
          loop={false}
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
            <Card>   
              { isAdmin === 1 ? 
                <input 
                  type="image" 
                  src={pencil} 
                  alt="ícone de um lápis" 
                />  :
                <input 
                  type="image" 
                  src={heart} 
                  alt="ícone de um coração" 
                />
              }
              <img src={expresso} alt="Imagem da bebida" />
              <Link

              >
              <h2>Expresso &gt;</h2>
              </Link>

              <p>Café cremoso feito na temperatura e pressões perfeitas.</p>
              <span>R$ 15,97</span>
              { isAdmin === 1 ? <div className="hide"></div> :
                  <div className="buttons">
                    <ButtonAddRemove/>
                    <Button title="incluir"/>
                  </div>          
                }
            </Card>
          </SwiperSlide> 
        </Swiper>
      </Section>
  {/*--------------------------------------------------------*/}
      <Footer/> 
    </Container>
  )
}
