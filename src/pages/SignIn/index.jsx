import { Container, Content, Form } from "./styles";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";

export function SignIn() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }

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
                type="text"
                onChange={e => setEmail(e.target.value)}
              ></Input>
            </div>
            <div className="input-wrapper">
             <label>Senha</label>
              <Input
                placeholder="No mínimo 6 caracteres"
                type="text"
                onChange={e => setPassword(e.target.value)}
              ></Input>
            </div>

            <Button title="Entrar" onClick={handleSignIn}/>
            <Link to="/register"> Criar uma conta </Link>  
                  
          </Form>
        </main>
      </Content>
    </Container>
  )
}