import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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


export function Home() {
  const { user } = useAuth();
  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true)  
  
  const [ meals, setMeals ] = useState([])
  const [ amount, setAmount ] = useState(Number(0))
  const [ title, setTitle ] = useState([])
  const [ order, setOrder ] = useState([])


  const params = useParams();
  const navigate = useNavigate();

  function editMeal() {
    const params = useParams();
    return alert("teste")
    return  
  }

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await api.get(`/meals`)
        setMeals(response.data)
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
            spaceBetween: 350
          },          
        }}
      >
          {meals
            .filter(meal => meal.category === "Refeições") 
            .map( meal => (
              <SwiperSlide>
                <Card key={String(meal.id)} id={meal.id} > 
                  { isAdmin === 1 ? 
                      <Link to={`editmeal/${meal.id}`}><input type="image" src={pencil} alt="ícone de um lápis" /></Link>
                    : 
                      <Link><input type="image" src={heart} alt="ícone de um coração" /></Link>
                  }                                
                  <img src={`${api.defaults.baseURL}/files/${meal.image}`} alt="Imagem do prato" />  
                  <Link to={`mealdetails/${meal.id}`}><h2>{meal.title} &gt;</h2></Link>
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
              </SwiperSlide>               
            ))
          } 
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
            spaceBetween: 350
          },          
        }}
      >
          {meals
            .filter(meal => meal.category === "Sobremesas") 
            .map( meal => (
              <SwiperSlide>
                <Card key={String(meal.id)} id={meal.id}> 
                  { isAdmin === 1 ? 
                      <Link to={`editmeal/${meal.id}`}><input type="image" src={pencil} alt="ícone de um lápis" /></Link>
                    : 
                      <Link><input type="image" src={heart} alt="ícone de um coração" /></Link>
                  }                                
                  <img src={`${api.defaults.baseURL}/files/${meal.image}`} alt="Imagem do prato" />  
                  <Link to={`mealdetails/${meal.id}`}><h2>{meal.title} &gt;</h2></Link>
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
              </SwiperSlide>               
            ))
          } 
        </Swiper>
      </Section>
  //*-------------------------------------------------------- 
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
            spaceBetween: 350
          },          
        }}
      >
          {meals
            .filter(meal => meal.category === "Bebidas") 
            .map( meal => (
              <SwiperSlide>
                <Card key={String(meal.id)} id={meal.id}> 
                  { isAdmin === 1 ? 
                      <Link to={`editmeal/${meal.id}`}><input type="image" src={pencil} alt="ícone de um lápis" /></Link>
                    : 
                      <Link><input type="image" src={heart} alt="ícone de um coração" /></Link>
                  }                                
                  <img src={`${api.defaults.baseURL}/files/${meal.image}`} alt="Imagem do prato" />  
                  <Link to={`mealdetails/${meal.id}`}><h2>{meal.title} &gt;</h2></Link>
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
              </SwiperSlide>               
            ))
          } 
        </Swiper>
      </Section>
  {/*--------------------------------------------------------*/}
      <Footer/> 
    </Container>
  )
}
