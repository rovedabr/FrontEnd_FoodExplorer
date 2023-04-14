import { Container } from "./styles";

export function Select({ label, value, title, category, placeholder, icon:Icon, ...rest}) {
  return(
    <Container {...rest}>
        <label htmlFor={category}>{label}</label>
        <div>
          <select name="Food" id={category} value={value}>
            <option value="Refeições">Refeições</option>
            <option value="Sobremesas">Sobremesas</option>
            <option value="Bebidas">Bebidas</option>              
          </select>
        </div>
    </Container>
  )
}