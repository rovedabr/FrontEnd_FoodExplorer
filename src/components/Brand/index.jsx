import { Container } from "./styles";
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

export function Brand({ img, name, ...rest}) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true) 
  return(   
    <Container>
      <div>
        <img src={logo} alt="Logo da aplicação" />
        <Link onClick={() => navigate("/")}><h1>food explorer</h1></Link>
      </div>
      { isAdmin === 1 ? <p>admin</p> : "" }
    </Container>
  )
}