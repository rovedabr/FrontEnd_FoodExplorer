import { Container, MenuBar, Form } from "./styles";

import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText"

import closeIcon from "../../assets/Icons/close.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"


export function Menu() {
  const { signOut } = useAuth();
  
  return (
    <Container>
      <MenuBar>
        <div>
          <img src={closeIcon} alt="ícone do botão fechar" />
          <span>Menu</span>
        </div>
      </MenuBar>
      <Form>
        <Input
          icon={HiMagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
        >          
        </Input>
        
        <ButtonText
          type="button"
          title="Sair"
          onClick={signOut}
        />
    
      </Form>
      <Footer>

      </Footer>
      
    </Container>
  )
}