import { Container, Content } from "./styles"

import  { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { api } from "../../services/api";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import 'swiper/css/navigation'
import 'swiper/css'

import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { Navbar } from "../../components/NavBar"
import { Footer } from "../../components/Footer"
import { Banner } from "../../components/Banner"
import { Section } from "../../components/Section"


export function Home() {
  const { user } = useAuth();
  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true)  
    
  const [ meals, setMeals ] = useState([])
  const [ search, setSearch ] = useState("");

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await api.get(`/meals?title=${search}`)  //"&ingredients=${search}"
        setMeals(response.data)
      } catch (error) {
        alert("Não foi possível buscar as informações")
      }
    }
    fetchMeals();
  }, [search])

  
  return (
     <Container>
       <Navbar search={setSearch}/>
       <Header search={setSearch}/> 
        <main>
         <Content>
           <Banner className="banner"/>
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
                  mousewheel={true}
                  modules={[Navigation]}
                  navigation={true}
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
                      slidesPerView: 4.2,
                      spaceBetween: 250
                    },          
                }}
                >
                  { meals
                    .filter(meal => meal.category === "Refeições") 
                    .map( meal => (
                      <SwiperSlide key={String(meal.id)} >
                        <Card meal={meal}/> 
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
                      slidesPerView: 4.2,
                      spaceBetween: 250
                    },          
                }}
                >
                  { meals
                    .filter(meal => meal.category === "Sobremesas") 
                    .map( meal => (
                      <SwiperSlide key={String(meal.id)} >
                        <Card meal={meal}/> 
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
                      slidesPerView: 4.2,
                      spaceBetween: 250
                    },          
                }}
                >
                  { meals
                    .filter(meal => meal.category === "Bebidas") 
                    .map( meal => (
                      <SwiperSlide key={String(meal.id)} >
                        <Card meal={meal}/> 
                      </SwiperSlide>               
                    ))
                  } 
                </Swiper>      
              </Section> 

        </Content>
      </main>
    {/*--------------------------------------------------------*/}
      <Footer/> 
    </Container>
  )
}
