import { Container, Content } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../Button";

import pencil from "../../assets/Icons/pencil.svg"
import heart from "../../assets/Icons/heart.svg"
import minus from "../../assets/Icons/Minus.svg"
import plus from "../../assets/Icons/Plus.svg"

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useState } from "react";


export function Card({ meal, title, children, ...rest }) {
  const { user } = useAuth();
  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true)  

  const [ quantity, setQuantity ] = useState(Number(0))
  console.log(quantity)

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

  return (
    
    <Container
      {...rest}     
    >   
        <Content> 
          { isAdmin === 1 ? 
              <Link 
                to={`editmeal/${meal.id}`}>
                  <input 
                    type="image" 
                    src={pencil} 
                    alt="ícone de um lápis" 
                  />              
              </Link>
            : 
              <Link>
                <input 
                  type="image" 
                  src={heart} 
                  alt="ícone de um coração"                
                />              
              </Link>
          }                                
            <img 
              src={`${api.defaults.baseURL}/files/${meal.image}`} 
              alt="Imagem do prato"             
            />  
            <Link 
              to={`mealdetails/${meal.id}`}>
                <h2>{meal.title} &gt;</h2>            
            </Link>
            <p>{meal.description}</p>
            <span>R$ {meal.price}</span>    
          { isAdmin === 1 ? 
              <div className="hide"></div> 
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
                    type="image" src={plus} 
                    alt="Símbolo de mais" 
                    id="remove" 
                    onClick={handleUpQuantity}                  
                  />
                </div>
                <Button
                  type="button" 
                  title="incluir" 
                
                />
              </div>          
          }  

        </Content> 
    </Container>

  )

}

