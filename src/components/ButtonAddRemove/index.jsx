import { Container } from "./styles";
import minusIcon from "../../assets/Icons/Minus.svg"
import plusIcon from "../../assets/Icons/Plus.svg"
import { useState } from "react";

import { useCart } from "../../hooks/cart";

export function ButtonAddRemove({ icon: Icon,  ...rest}) {
  const [ quantity, setQuantity ] = useState(Number(0))

  const { handleAddMealCart } = useCart();

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

  return(
    <Container>
      <input 
        type="image" 
        id="add" 
        src={minusIcon}
        onClick={handleDownQuantity}
      ></input>
      <span>{quantity}</span>
      <input 
        type="image" 
        id="remove"
        src={plusIcon}
        onClick={handleUpQuantity}
      />      
    </Container>
  )
}