import { Container } from "./styles";
import brand from "../../assets/brand.png"

export function AdminBrand({ img, name, ...rest}) {
  return(
    <Container>
      <img src={brand} alt="Logo da aplicação" />
      <span>admin</span>
    </Container>
  )
}