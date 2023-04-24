import { Container } from "./styles";
import { Link } from "react-router-dom";

import salada from "../../assets/meals/saladaRavanello.png"
import { useCart } from "../../hooks/cart";

export function CardOrder({meal}) {
  const { handleRemoveMealFromCart } = useCart()
  image = meal.image
  return (

    <Container {...rest}>   
        <div className="order">
          <div className="orderData">
            <img src={image} alt="Imagem da comida/bebida" />
            <p>{meal.quantity} x</p> 
            <h3>{meal.title}</h3> 
            <span>R$ {meal.price}</span> 
          </div>
          <Link>Excluir</Link>
        </div>
        <h3>Total: R$ {meal.quantity}*{meal.price}</h3> 
    
    </Container>
  )
}