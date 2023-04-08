import { Container } from "./styles";
import logo from "../../assets/logo.svg"

export function AdminBrand({ img, name, ...rest}) {
  return(   
    <Container>
      <div>
        <img src={logo} alt="Logo da aplicação" />
        <h1>food explorer</h1>
      </div>
      <p>admin</p>
    </Container>
  )
}