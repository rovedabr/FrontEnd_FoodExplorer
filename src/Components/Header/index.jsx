import { Container } from "./styles";
import { Brand } from "../Brand";
import { Input } from "../Input";
import { Button } from "../Button";
import logout from "../../assets/Icons/Logout.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import receiptIcon from "../../assets/Icons/Receipt.svg"

export function Header() {
  return(
    <Container>
      <Brand/>
      <Input
        //ver o ícone porque não está puxando
        icon={HiMagnifyingGlass}
        type="text"
        placeholder="Busque por pratos ou ingredientes"
      />
      <Button
        icon={receiptIcon} //ver porque não está puxando o ícone 
        type="button"
      >Pedidos
      <span>(0)</span>
      </Button>
        
      
      <img src={logout} alt="" />
    </Container>
  )
};