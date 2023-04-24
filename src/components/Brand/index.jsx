import { Container } from "./styles";
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";

export function Brand({ img, name, ...rest}) {
  const navigate = useNavigate()
  return(   
    <Container>
      <input type="image" src={logo} alt="Logo da aplicação" onClick={() => navigate("/")}/>
      <h1>food explorer</h1>
    </Container>
  )
}