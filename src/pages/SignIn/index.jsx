import { Container, Content, Form } from "./styles";

import { Link } from "react-router-dom";

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";

export function SignIn() {
  return(
    <Container>
      <Content>
      <Brand/>
        <main>
          <Form>
            <h1>Faça login</h1>
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

            <Button>Entrar</Button>
            
            <Link to="/register"> Criar uma conta </Link>  
                  
          </Form>
        </main>
      </Content>
    </Container>
  )
}