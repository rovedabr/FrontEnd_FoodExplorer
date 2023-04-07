import { Container, Content } from "./styles";
import  brand from "../../assets/brand.png"
import { Input } from "../Input";

import logout from "../../assets/Icons/Logout.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import receiptIcon from "../../assets/Icons/Receipt.svg"


export function Header() {
  return(
    <Container>
      <Content>
        <div className="brand">
          <img src={brand} alt="Logo da empresa Food Explorer" />
        </div>
        
        <Input
          icon={HiMagnifyingGlass}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        /> 

        <button className="order">
          <img src={receiptIcon} alt="" /> 
          <h3>Pedidos</h3>
          <span>(0)</span>
        </button>

      <button className="logout">
        <img src={logout} alt="Botão de sair"/>
      </button>       

      </Content>
    </Container>
  )
};