import { Container } from "./styles";

export function Select({ label, value, category, placeholder, icon:Icon, ...rest}) {
  return(
    <Container {...rest}>
        <label htmlFor={category}>{label}</label>
        <div>
          <select name="Food" id={category}>
            <option value="meal">Refeições</option>
            <option value="dessert">Sobremesas</option>
            <option value="drink">Bebidas</option>              
          </select>
        </div>
    </Container>
  )
}