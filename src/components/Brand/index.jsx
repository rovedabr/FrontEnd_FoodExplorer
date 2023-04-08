import { Container } from "./styles";
import logo from "../../assets/logo.svg"

export function Brand({ img, name, ...rest}) {
  return(   
    <Container>
      <img src={logo} alt="Logo da aplicação" />
      <h1>food explorer</h1>
    </Container>
  )
}