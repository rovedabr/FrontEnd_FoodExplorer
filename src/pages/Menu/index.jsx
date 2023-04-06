import { Container, MenuBar, Form } from "./styles";
import { Footer } from "../../components/Footer";
import closeIcon from "../../assets/Icons/close.svg"
import { Input } from "../../components/Input"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { ButtonText } from "../../components/ButtonText"

export function Menu() {
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
        
        <ButtonText //! inserir a função de sair
          title="Sair"
        />
    
      </Form>
      <Footer>

      </Footer>
      
    </Container>
  )
}