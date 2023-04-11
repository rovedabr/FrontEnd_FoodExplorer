import { Container, MenuBar, Form } from "./styles";

import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText"

import closeIcon from "../../assets/Icons/close.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { Link, useNavigate } from "react-router-dom";


export function Menu() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true) 

  function handleMenu() {
    return navigate(-1)
  }
 
  return (
    <Container>
      <MenuBar>
        <div>
          <input 
            type="image" 
            src={closeIcon} 
            alt="ícone do botão fechar" 
            onClick={handleMenu}
          />
          <span>Menu</span>
        </div>
      </MenuBar>
      <Form>
        <Input
          type="text"
          icon={HiMagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
        >          
        </Input>
        {
          isAdmin === 1 ? 
          <ButtonText
            type="button"
            title="Novo Prato"
            onClick={navigate("/addmeal")}
          /> 
          : <div></div>
        }
        
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