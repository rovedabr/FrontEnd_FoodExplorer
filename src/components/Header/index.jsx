import { Container, Content } from "./styles";
import { Brand } from "../Brand";
import { Input } from "../Input";
import { Button } from "../Button";
import logout from "../../assets/Icons/Logout.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import receiptIcon from "../../assets/Icons/Receipt.svg"


export function Header() {
  return(
    <Container>
      <Content>
        <Brand/>
        <Input
          icon={HiMagnifyingGlass}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        /> 
      <Button        
        type="button"
        title="Pedidos"
      >
        <img src={receiptIcon} alt="" /> //!fazer aparecer o ícone de recebido e os dados de pedido
        Pedidos
        <span>(0)</span>
      </Button>       
      <img src={logout} alt="Botão de sair"/>

      </Content>
    </Container>
  )
};