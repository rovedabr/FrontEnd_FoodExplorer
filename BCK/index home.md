import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import heart from "../../assets/Icons/heart.svg"
import pencil from "../../assets/Icons/pencil.svg"

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

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
import { Carousel } from "../../components/Carousel";


export function Home() {
  const { user } = useAuth();
  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true)  
  const [ meals, setMeals ] = useState([])

  const navigate = useNavigate();

  function editMeal() {
    return navigate("/editmeal")
  }

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await api.get(`/meals`)
        setMeals(response.data)
        console.log(response.data)
      } catch (error) {
        alert("Não foi possível buscar as informações")
      }
    }
    fetchMeals();
  }, [])

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
        <Carousel>        
          {meals
            .filter(meal => meal.category === "Refeições") 
            .map( meal => (
              <Card key={String(meal.id)} > 
                { isAdmin === 1 ? 
                    <input type="image" src={pencil} alt="ícone de um lápis"/>  
                  : 
                    <input type="image" src={heart} alt="ícone de um coração" />
                }                                
                <img src={`${api.defaults.baseURL}/files/${meal.image}`} alt="Imagem do prato" />  
                <Link><h2>{meal.title} &gt;</h2></Link>
                <p>{meal.description}</p>
                <span>{meal.price}</span>    
                { isAdmin === 1 ? 
                    <div className="hide"></div> 
                  :
                    <div className="buttons">
                      <ButtonAddRemove/>
                      <Button title="incluir"/>
                    </div>          
                } 
              </Card>               
            ))
          } 
        </Carousel>
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
              spaceBetween: 350
            },          
          }}
        >
          <SwiperSlide>
            {meals
              .filter(meal => meal.category === "Sobremesas") 
              .map( meal => (
                <Card key={String(meal.id)} > 
                  { isAdmin === 1 ? 
                      <input type="image" src={pencil} alt="ícone de um lápis"/>  
                    : 
                      <input type="image" src={heart} alt="ícone de um coração" />
                  }                                
                  <img src={`${api.defaults.baseURL}/files/${meal.image}`} alt="Imagem do prato" />  
                  <Link><h2>{meal.title} &gt;</h2></Link>
                  <p>{meal.description}</p>
                  <span>{meal.price}</span>    
                  { isAdmin === 1 ? 
                      <div className="hide"></div> 
                    :
                      <div className="buttons">
                        <ButtonAddRemove/>
                        <Button title="incluir"/>
                      </div>          
                  } 
                </Card>               
              ))
            } 

          </SwiperSlide>

        </Swiper>
    </Section>
  {/*--------------------------------------------------------*/}
  //*--------------------------------------------------------
    <Section
        className="mainMeal"
        title="Bebidas"
      >
        <Carousel>     
          {meals
            .filter(meal => meal.category === "Bebidas") 
            .map( meal => (
              <Card key={String(meal.id)} > 
                { isAdmin === 1 ? 
                    <input type="image" src={pencil} alt="ícone de um lápis"/>  
                  : 
                    <input type="image" src={heart} alt="ícone de um coração" />
                }                                
                <img src={`${api.defaults.baseURL}/files/${meal.image}`} alt="Imagem do prato" />  
                <Link><h2>{meal.title} &gt;</h2></Link>
                <p>{meal.description}</p>
                <span>{meal.price}</span>    
                { isAdmin === 1 ? 
                    <div className="hide"></div> 
                  :
                    <div className="buttons">
                      <ButtonAddRemove/>
                      <Button title="incluir"/>
                    </div>          
                } 
              </Card>               
            ))
          } 
        </Carousel>
    </Section>
  {/*--------------------------------------------------------*/}
      <Footer/> 
    </Container>
  )
}
