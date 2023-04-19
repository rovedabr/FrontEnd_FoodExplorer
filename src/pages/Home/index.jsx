import  { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import heart from "../../assets/Icons/heart.svg"
import pencil from "../../assets/Icons/pencil.svg"

import { HiMinus } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi2";

import minus from "../../assets/Icons/Minus.svg"
import plus from "../../assets/Icons/Plus.svg"



import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
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
  //!===================================
  const { handleAddMealCart } = useCart();
  //!===================================
    
  const [ meals, setMeals ] = useState([])
  const [ quantity, setQuantity ] = useState(Number(0))
  const [ title, setTitle ] = useState([])
  const [ order, setOrder ] = useState([])
  const [ search, setSearch ] = useState("");
  const [ price, setPrice ] = useState("")


  useEffect(() => {
    async function fetchSearchMealsTitles() {
      const response = await api.get(`/meals/title=${search}`); 
      setMeals(response.data)
      // console.log(response.data)
    }
    fetchSearchMealsTitles();
  },[search]);

  //*-------------------------------------------------------

  //*-------------------------------------------------------

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
  {/*--------------------------------------------------------*/}
      <Footer/> 
    </Container>
  )
}
