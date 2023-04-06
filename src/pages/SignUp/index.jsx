import { Container, Content, Form } from "./styles";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  function handleSignUp() {

  }

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
                type="text"
                onChange={e => setName(e.target.value)}
              ></Input>
            </div>
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

            <Button onClick={handleSignUp} >Criar conta</Button>
                        
            <Link to="/" >Já tenho uma conta</Link>

          </Form>
        </main>
      </Content>
    </Container>
  )
}