import { Container } from "./styles";
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

export function Brand({ img, name, ...rest}) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true) 

  function goHome() {
    return navigate("/")
  }

  return(   
    <Container>
      <div>
        <input type="image" src={logo} alt="Logo da aplicação" onClick={() => goHome()}/>
        <h1>food explorer</h1>
      </div>
      { isAdmin === 1 ? <p>admin</p> : "" }
    </Container>
  )
}