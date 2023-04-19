import  { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import heart from "../../assets/Icons/heart.svg"
import pencil from "../../assets/Icons/pencil.svg"
import minusIcon from "../../assets/Icons/Minus.svg"
import plusIcon from "../../assets/Icons/Plus.svg"


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
// import { ButtonAddRemove } from "../../components/ButtonAddRemove"


export function Home() {
  const { user } = useAuth();
  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true)  
    
  const [ meals, setMeals ] = useState([])
  const [ quantity, setQuantity ] = useState(Number(0))
  const [ title, setTitle ] = useState([])
  const [ order, setOrder ] = useState([])
  const [ search, setSearch ] = useState("");
  const [ price, setPrice ] = useState("")


  //!===================================
  // const { handleAddMealCart } = useCart();
  //!===================================


  useEffect(() => {
    async function fetchSearchMealsTitles() {
      const response = await api.get(`/meals/title=${search}`); 
      setMeals(response.data)
      console.log(response.data)
    }
    fetchSearchMealsTitles();
  },[search]);

  //*-------------------------------------------------------
  // const [ search, setSearch ] = useState("");
  // const [ data , setData ] = useState("")

  // useEffect(() => {
  //   async function fetchSearchMealsAndIngredients() {
  //     const response = await api.get(`/meals?title=${search}`); //!&/ingredients?name=${search}
  //     setMeals(response.data)
  //     console.log(response.data)
  //   }
  //   fetchSearchMealsAndIngredients();
  // },[search]);

  // // console.log(search, setSearch)

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
          {
            meals.filter(meal => meal.category === "Refeições").length > 0 &&
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
                      <Card id={meal.id}> 
                        { isAdmin === 1 ? 
                            <Link to={`editmeal/${meal.id}`}><input type="image" src={pencil} alt="ícone de um lápis" /></Link>
                          : 
                            <Link><input type="image" src={heart} alt="ícone de um coração" /></Link>
                        }                                
                        <img src={`${api.defaults.baseURL}/files/${meal.image}`} alt="Imagem do prato" />  
                        <Link to={`mealdetails/${meal.id}`}><h2>{meal.title} &gt;</h2></Link>
                        <p>{meal.description}</p>
                        <span>R$ {meal.price}</span>    
                        { isAdmin === 1 ? 
                            <div className="hide"></div> 
                          :
                            <div className="buttons">
                              <button id="addRemove">
                                <input type="image"  id="add"  src={minusIcon} onClick={handleDownQuantity} alt="" />

                                <input type="image" id="remove" src={plusIcon} onClick={handleUpQuantity} alt="" />
                              </button>

                              <Button title="incluir" />
                            </div>          
                        } 
                      </Card>
                  </SwiperSlide>               
                ))
              } 
            </Swiper>

          }

        </Section>
//*--------------------------------------------------------
        <Section
              className="mainMeal"
              title="Sobremesas"
            >
            {
                meals.filter(meal => meal.category === "Sobremesas").length > 0 &&
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
                  {meals
                    .filter(meal => meal.category === "Sobremesas") 
                    .map( meal => (
                      <SwiperSlide key={String(meal.id)} >
                        <Card id={meal.id}> 
                          { isAdmin === 1 ? 
                              <Link to={`editmeal/${meal.id}`}><input type="image" src={pencil} alt="ícone de um lápis" /></Link>
                            : 
                              <Link><input type="image" src={heart} alt="ícone de um coração" /></Link>
                          }                                
                          <img src={`${api.defaults.baseURL}/files/${meal.image}`} alt="Imagem do prato" />  
                          <Link to={`mealdetails/${meal.id}`}><h2>{meal.title} &gt;</h2></Link>
                          <p>{meal.description}</p>
                          <span>R$ {meal.price}</span>    
                          { isAdmin === 1 ? 
                              <div className="hide"></div> 
                            :
                              <div className="buttons">
                                <button id="addRemove">
                                  <input type="image"  id="add"  src={minusIcon} onClick={handleDownQuantity} alt="" />

                                  <input type="image" id="remove" src={plusIcon} onClick={handleUpQuantity} alt="" />
                                </button>


                                <Button title="incluir" />
                              </div>          
                          } 
                        </Card>
                      </SwiperSlide>               
                    ))
                  } 
                </Swiper>
            }
        </Section>
//*-------------------------------------------------------- 
//*--------------------------------------------------------
        <Section
            className="mainMeal"
            title="Bebidas"
          >
            {
              meals.filter(meal => meal.category === "Bebidas").length > 0 &&
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
                {meals
                  .filter(meal => meal.category === "Bebidas") 
                  .map( meal => (
                    <SwiperSlide key={String(meal.id)}>
                      <Card  id={meal.id}> 
                        { isAdmin === 1 ? 
                            <Link to={`editmeal/${meal.id}`}><input type="image" src={pencil} alt="ícone de um lápis" /></Link>
                          : 
                            <Link><input type="image" src={heart} alt="ícone de um coração" /></Link>
                        }                                
                        <img src={`${api.defaults.baseURL}/files/${meal.image}`} alt="Imagem do prato" />  
                        <Link to={`mealdetails/${meal.id}`}><h2>{meal.title} &gt;</h2></Link>
                        <p>{meal.description}</p>
                        <span>R$ {meal.price}</span>    
                        { isAdmin === 1 ? 
                            <div className="hide"></div> 
                          :
                            <div className="buttons">

                              <Button title="incluir" />
                            </div>          
                        } 
                      </Card>
                    </SwiperSlide>               
                  ))
                } 
              </Swiper>
          }
        </Section>
  {/*--------------------------------------------------------*/}
      <Footer/> 
    </Container>
  )
}
