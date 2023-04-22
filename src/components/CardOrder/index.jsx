import { Container } from "./styles";

import salada from "../../assets/meals/saladaRavanello.png"

export function CardOrder({meal, ...rest}) {
  return (
    <Container {...rest}>

        <div className="order">
          <img src={salada} alt="" />
          <p>1 x </p> //! quantity
          <h3>Salada</h3> //!title
          <span>R$ 25.00</span> //!price
        </div>
        <h3>Total: R$ 100,00</h3> //!total order
    
    </Container>
  )
}