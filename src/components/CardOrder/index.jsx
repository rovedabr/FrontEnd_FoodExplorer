import { Container } from "./styles";

import { useCart } from "../../hooks/cart";
import { api } from "../../services/api";

export function CardOrder({data}) {
  const { handleRemoveMealFromCart, cart } = useCart()

  return (

    <Container>   
        <div className="order">

          <div className="orderData">            
            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="Imagem da comida/bebida" />
            <p>{data.quantity} x </p> 
            <h2> {data.title}</h2> 
            <span>R$ {data.price}</span> 
          </div>
          
          <button
            type="button"
            onClick={() => handleRemoveMealFromCart(data.id)}
          >Excluir</button>
        </div>  
    
    </Container>
  )
}