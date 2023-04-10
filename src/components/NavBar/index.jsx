import { Container, Form } from "./styles";
import { Brand } from "../Brand";
import menuIcon from "../../assets/Icons/menu.svg"
import receiptIcon from "../../assets/Icons/Receipt.svg"

export function Navbar({ img, ...rest }) {
  return(    
    <Container>
      <Form>
        <input src={menuIcon} alt="Ícone do Menu do aplicativo" />   
        <Brand/>
        <div className="receipt">
          <img src={receiptIcon} alt="Ícone do recibo da compra" />
          <span>0</span>
        </div>
      </Form>      
    </Container>
  )
}