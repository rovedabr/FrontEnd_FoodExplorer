import { Container } from "./styles";
import minusIcon from "../../assets/Icons/Minus.svg"
import plusIcon from "../../assets/Icons/Plus.svg"

export function ButtonAddRemove({ icon: Icon,  ...rest}) {
  return(
    <Container>
      <input 
        type="image" 
        id="add" 
        src={minusIcon}
      ></input>
      <span>00</span>
      <input 
        type="image" 
        id="remove"
        src={plusIcon}
      />
      
    </Container>
  )
}