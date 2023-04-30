import { Container, Form } from "./styles";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";

import { Tag } from "../../components/Tag";
import { Navbar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";

import plus from "../../assets/Icons/Plus.svg"
import minus from "../../assets/Icons/Minus.svg"
import receiptIcon from "../../assets/Icons/Receipt.svg"

export function MealDetails() {
  const { user } = useAuth();
  const [ meal, setMeal ] = useState([]);
  const { handleAddMealCart } = useCart();

  const isAdmin = user.admin; //IsAdmin = 0 (false) | isAdmin = 1 (true) 

  const params = useParams();
  const navigate = useNavigate();

  const [ quantity, setQuantity ] = useState(Number(0));

  function editMeal() {
    return navigate(`/editmeal/${meal.id}`)
  }

  function handleUpQuantity() {
    setQuantity(prevState => prevState +1)
  }

  function handleDownQuantity() {
    if (quantity <= 0 ){
      alert("Para remover este item é necessário já tê-lo adicionado")
    } else {
      setQuantity(prevState => prevState -1)
    }
  }

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
                      { isAdmin === 1 ?
                        <Button 
                          type="button"
                          title="Editar" 
                          onClick={() => editMeal()}                        
                        />
                      :
                        <div className="buttons">
                          <div className="addRemoveButton"> 
                            <input 
                              type="image" 
                              src={minus} 
                              alt="Símbolo de menos" 
                              id="add" 
                              onClick={handleDownQuantity}                  
                            />
                          <span>{quantity}</span>
                            <input 
                              type="image" 
                              src={plus} 
                              alt="Símbolo de mais" 
                              id="remove" 
                              onClick={handleUpQuantity}                  
                            />
                          </div>
                            <Button 
                              type="text"
                              icon={receiptIcon}
                              title={`Incluir R$ ${meal.price}`}
                              onClick={() => handleAddMealCart(meal, quantity)}
                            />
                          </div>
                      }
                    </div>
              </div>  
            </Form>
        </main> 
      <Footer/>
    </Container>
  )
}