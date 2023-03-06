import { Container } from "./styles";
import grayLogo from "../../assets/grayLogo.svg"
import { AiOutlineCopyrightCircle } from "react-icons/ai"

export function Footer( { icon, ...rest}) {
  return (
    <Container
      {...rest}
    >
      <img src={grayLogo} alt="Logo do aplicativo na cor cinza" />
      <div>
        <span><AiOutlineCopyrightCircle/> 2023 - Todos os direitos reservados.</span>        
      </div>
    </Container>
  )
}