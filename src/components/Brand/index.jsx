import { Container } from "./styles";
import brand from "../../assets/brand.png"

export function Brand({ img, name, ...rest}) {
  return(
    <Container>
      <img src={brand} alt="Logo da aplicação" />
    </Container>
  )
}