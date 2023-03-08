import { Container } from "./styles";
import brand from "../../assets/brand.png"

export function Brand() {
  return(
    <Container>
      <img src={brand} alt="Logo da aplicação" />
    </Container>
  )
}