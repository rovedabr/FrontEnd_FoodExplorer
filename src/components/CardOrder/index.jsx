import { Container } from "./styles";
import { Link } from "react-router-dom";

import salada from "../../assets/meals/saladaRavanello.png"
import { useCart } from "../../hooks/cart";
import { api } from "../../services/api";

export function CardOrder({data}) {
  const { handleRemoveMealFromCart, cart } = useCart()
  // image = meal.image

  return (

    <Container>   
        <div className="order">

          <div className="orderData">            
            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="Imagem da comida/bebida" />
            <p>{data.quantity} x </p> 
            <h2> {data.title}</h2> 
            <span>R$ {data.price}</span> 
          </div>

          <Link
            onClick={()=> handleRemoveMealFromCart(data.id)}          
          >Excluir</Link>
        </div>  
    
    </Container>
  )
}