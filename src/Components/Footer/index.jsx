import { Container } from "./styles";
import grayLogo from "../../assets/grayLogo.svg"

export function Footer() {
  return (
    <Container>
      <img src={grayLogo} alt="Logo do aplciativo na cor cinza" />
      <p>&copy</p>
    </Container>
  )
}