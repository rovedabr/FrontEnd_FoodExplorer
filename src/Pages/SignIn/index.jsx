import { Container, Form } from "./styles";
import { Brand } from "../../Components/Brand";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";

export function SignIn() {
  return (
    <Container>
        
          <div className="brand">
            <Brand/>
          </div>  

        <Form> 

          <label>
            <span>Email</span>    {/* Não está ficando com margem abaixo */}
            <Input
              placeholder="Exemplo: exemplo@exemplo.com.br"
            />
          </label>            
     
          <label>
            <span>Senha</span>
            <Input
              placeholder="No mínimo 6 caracteres"
              />
          </label>

          <Button>Entrar</Button>

          <ButtonText
            id="buttonText"
            title="Criar uma conta"
          />

        </Form> 
    </Container>
  )
}