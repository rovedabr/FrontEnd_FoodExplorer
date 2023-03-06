import { Container } from "./styles";
import { Brand } from "../Brand";
import menuIcon from "../../assets/Icons/menu.svg"
import receiptIcon from "../../assets/Icons/Receipt.svg"

export function Navbar({ icon, ...rest }) {
  return(
    <Container
      {...rest}
    > 
      
        <img src={menuIcon} alt="Ícone do Menu do aplicativo" />   
        <Brand/>
        <img src={receiptIcon} alt="Ícone do recibo da compra" />
      
        {icon}
    </Container>
  )
}