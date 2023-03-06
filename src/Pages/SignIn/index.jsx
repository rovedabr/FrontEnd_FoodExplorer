import { Container } from "./styles"
import { Brand } from "../../Components/Brand"
import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { ButtonText } from "../../Components/ButtonText"

export function SignIn() {
  return (
    <Container>
        <form>        
          <Brand/> 
          <Button>
            Entrar
          </Button>
          <ButtonText
            title="Criar uma conta"
          />
        <label>
          Email
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
    </Container>
  )
}