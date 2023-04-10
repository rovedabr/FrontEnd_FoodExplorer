import { Container } from "./styles";

export function Select({ label, value, title, category, placeholder, icon:Icon, ...rest}) {
  return(
    <Container {...rest}>
        <label htmlFor={category}>{label}</label>
        <div>
          <select name="Food" id={category}>
            <option value={value}>Refeições</option>
            <option value={value}>Sobremesas</option>
            <option value={value}>Bebidas</option>              
          </select>
        </div>
    </Container>
  )
}