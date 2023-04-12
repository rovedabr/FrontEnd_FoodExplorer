import { Container, Form } from "./styles";
import { Brand } from "../Brand";
import menuIcon from "../../assets/Icons/menu.svg"
import receiptIcon from "../../assets/Icons/Receipt.svg"
import { useNavigate } from "react-router-dom";

export function Navbar({ img, ...rest }) {
  const navigate = useNavigate()

  function menu() {
    return navigate("/menu")
  }

  return(    
    <Container>
      <Form>
        <input 
          type="image" 
          src={menuIcon} 
          alt="Ícone do Menu do aplicativo"
          onClick={menu} 
        /> 
        <Brand/>
        <div className="receipt">
          <img src={receiptIcon} alt="Ícone do recibo da compra" />
          <span>0</span>
        </div>
      </Form>      
    </Container>
  )
}