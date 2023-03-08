import { Container, MenuBar, Form } from "./styles";
import { Footer } from "../../Components/Footer";
import closeIcon from "../../assets/Icons/close.svg"
import { Input } from "../../Components/Input"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { ButtonText } from "../../Components/ButtonText"

export function AdminMenu() {
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
          title="Novo Prato"
        />        
        <ButtonText
          title="Sair"
        />
    
      </Form>
      <Footer>

      </Footer>
      
    </Container>
  )
}