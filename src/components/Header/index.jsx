import { Container } from "./styles";
import { Brand } from "../Brand";
import { Input } from "../Input";
import { Button } from "../Button";
import logout from "../../assets/Icons/Logout.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import receiptIcon from "../../assets/Icons/Receipt.svg"
import { TbReceipt } from "react-icons/tb"

export function Header() {
  return(
    <Container>
        <Brand/>
        <Input
          icon={HiMagnifyingGlass}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        /> 
      <Button        
        type="button"
      >
        <img src={receiptIcon} alt="" />
        Pedidos
        <span>(0)</span>
      </Button>       
      <img src={logout} alt="Botão de sair"/>
    </Container>
  )
};