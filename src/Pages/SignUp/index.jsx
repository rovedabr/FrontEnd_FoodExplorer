import { Container, Content, Form } from "./styles";
import { Brand } from "../../Components/Brand";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText"

export function SignUp() {
  return(
    <Container>
      <Content>
      <Brand/>
        <main>
          <Form>
            <h1>Crie sua conta</h1>
            <div className="input-wrapper">
              <label>Seu Nome</label>
              <Input
                placeholder="Exemplo: Maria da Silva"
              ></Input>
            </div>
            <div className="input-wrapper">
              <label>Email</label>
              <Input
                placeholder="Exemplo: exemplo@exemplo.com.br"
              ></Input>  
            </div>
            <div className="input-wrapper">
             <label>Senha</label>
              <Input
                placeholder="No mínimo 6 caracteres"
              ></Input>
            </div>

            <Button>Criar conta</Button>
            
            <ButtonText
              title="Já tenho uma conta"
            >              
            </ButtonText>


          </Form>
        </main>
      </Content>
    </Container>
  )
}