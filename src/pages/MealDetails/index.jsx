import { Container, Form } from "./styles";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { Navbar } from "../../components/NavBar"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button";
import { ButtonAddRemove } from "../../components/ButtonAddRemove";
import { ButtonBack } from "../../components/ButtonBack";

import receiptIcon from "../../assets/Icons/Receipt.svg"
import caretLeftIcon from "../../assets/Icons/CaretLeft.svg"
import saladaRavanello from "../../assets/meals/saladaRavanello.png"

export function MealDetails() {
  const { user } = useAuth()
  const [ meal, setMeal ] = useState([])

  const params = useParams()

  useEffect(() => {
    async function fetchMeal() {
      try {
        const response = await api.get(`/meals/${params.id}`)
        setMeal(response.data)
      } catch (error) {
        alert("Não foi possível buscar as informações")
      }
    }
    fetchMeal();
  }, [])


  console.log(meal)

  return(
    <Container>
      <Navbar/> 
      <Header/>
        <main>

            <ButtonBack
              type="button"
              to="/"
              title="Voltar"
            />
             <Form>
                <div id="menu">
                    <img 
                      src={`${api.defaults.baseURL}/files/${meal.image}`} 
                    />
                    
                    <div className="content"> 
                      <div className="mealData">
                        <h2>{meal.title}</h2>
                        <span>{meal.description}</span>         
                      </div>   

                      {
                        meal.ingredients && 
                          <div className="tags">
                            {
                              meal.ingredients.map(ingredient => (
                                <Tag
                                  key={String(ingredient.id)}
                                  title={ingredient.name}
                                />
                              ))
                            }                 
                          </div>
                      } 

                      <div className="buttons">
                        <ButtonAddRemove/>
                        <Button 
                          type="text"
                          icon={receiptIcon}
                          title="Incluir"
                        
                        />
                      </div>

                    </div>
              </div>  
            </Form>

        </main> 
      <Footer/>
    </Container>
  )
}