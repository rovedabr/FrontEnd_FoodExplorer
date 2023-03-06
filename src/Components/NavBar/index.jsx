import { Container } from "./styles";
import { Brand } from "../Brand";

export function Navbar({ icon, ...rest }) {
  return(
    <Container
      {...rest}
    >      
      {icon}
      <Brand/>
    </Container>
  )
}