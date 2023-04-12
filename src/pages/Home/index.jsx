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
        <Carousel>     //!if category    
          {
            meals.map( meal => (
              <Card key={String(meal.id)} > 
                { isAdmin === 1 ? 
                    <input type="image" src={pencil} alt="ícone de um lápis"/>  
                  : 
                    <input type="image" src={heart} alt="ícone de um coração" />
                }                                
                <img src={meal.image} alt="Imagem do prato" />  
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
        <Carousel>     //!if category    
          {
            meals.map( meal => (
              <Card key={String(meal.id)} > 
                { isAdmin === 1 ? 
                    <input type="image" src={pencil} alt="ícone de um lápis"/>  
                  : 
                    <input type="image" src={heart} alt="ícone de um coração" />
                }                                
                <img src={meal.image} alt="Imagem do prato" />  
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
  //*--------------------------------------------------------
    <Section
        className="mainMeal"
        title="Bebidas"
      >
        <Carousel>     //!if category    
          {
            meals.map( meal => (
              <Card key={String(meal.id)} > 
                { isAdmin === 1 ? 
                    <input type="image" src={pencil} alt="ícone de um lápis"/>  
                  : 
                    <input type="image" src={heart} alt="ícone de um coração" />
                }                                
                <img src={meal.image} alt="Imagem do prato" />  
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
