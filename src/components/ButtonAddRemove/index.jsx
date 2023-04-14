import { Container } from "./styles";
import minusIcon from "../../assets/Icons/Minus.svg"
import plusIcon from "../../assets/Icons/Plus.svg"
import { useState } from "react";

export function ButtonAddRemove({ icon: Icon,  ...rest}) {
  const [ amount, setAmount ] = useState(Number(0))

  console.log(amount)

  function handleUpAmount() {
    setAmount(prevState => prevState +1)
  }

  function handleDownAmount() {
    if (amount <= 0 ){
      alert("Para remover este item é necessário já tê-lo adicionado")
    } else {
      setAmount(prevState => prevState -1)
    }
  }

  return(
    <Container>
      <input 
        type="image" 
        id="add" 
        src={minusIcon}
        onClick={handleDownAmount}
      ></input>
      <span>{amount}</span>
      <input 
        type="image" 
        id="remove"
        src={plusIcon}
        onClick={handleUpAmount}
      />      
    </Container>
  )
}