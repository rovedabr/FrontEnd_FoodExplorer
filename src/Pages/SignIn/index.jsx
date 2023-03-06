import { Container } from "./styles";
import { Brand } from "../../Components/Brand";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { Navbar } from "../../Components/NavBar";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";

export function SignIn() {
  return (
    <Container>
      <Header/>
      {/* <Navbar/> */}
        <form>        
          <Brand/> 
          <Button>
            Entrar
          </Button>
          <ButtonText
            title="Criar uma conta"
          />
        <label>
          Email    {/* Não está ficando com margem abaixo */}
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </label>
        <label>
          Senha
          <Input
            placeholder="No mínimo 6 caracteres"
          />
        </label>
      </form> 
      <Footer/>
    </Container>
  )
}