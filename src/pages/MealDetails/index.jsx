import { Container, Form } from "./styles";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Navbar } from "../../components/NavBar"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

import receiptIcon from "../../assets/Icons/Receipt.svg"
import minus from "../../assets/Icons/Minus.svg"
import plus from "../../assets/Icons/Plus.svg"

export function MealDetails() {
  const { user } = useAuth()
  const [ meal, setMeal ] = useState([])

  const params = useParams()

  useEffect(() => {
    async function fetchMealDetail() {
      try {
        const response = await api.get(`/meals/${params.id}`)
        setMeal(response.data)
      } catch (error) {
        alert("Não foi possível buscar as informações")
      }
    }
    fetchMealDetail();
  }, [])

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
                      <div className="addRemoveButton"> //! corrigir o styles
                        <input 
                          type="image" 
                          src={minus} 
                          alt="Símbolo de menos" 
                          id="add" 
                          onClick={handleDownQuantity}                  
                        />
                        <span>{quantity}</span>
                        <input 
                          type="image" src={plus} 
                          alt="Símbolo de mais" 
                          id="remove" 
                          onClick={handleUpQuantity}                  
                        />
                      </div>
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