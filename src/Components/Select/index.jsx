import { Container } from "./styles";
import { FiChevronDown } from "react-icons/fi"

export function Select({ label, value, category, icon:Icon, ...rest}) {
  return(
    <Container {...rest}>
        <label htmlFor={category}>{label}</label>        
        <select name="Food" id={category} Icon={FiChevronDown}>
          <option value="meal">Refeições</option>
          <option value="dessert">Sobremesas</option>
          <option value="drink">Bebidas</option>
          <div></div>                    
        </select>
    </Container>
  )
}