import { Container } from "./styles";
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Brand({ img, name, ...rest}) {
  const navigate = useNavigate()
  return(   
    <Container>
      <img src={logo} alt="Logo da aplicação" />
      <Link onClick={() => navigate("/")}><h1>food explorer</h1></Link>
    </Container>
  )
}