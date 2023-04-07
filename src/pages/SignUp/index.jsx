import { Container, Content, Form } from "./styles";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos para criar a conta!")
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Conta criada com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar a conta!")
      }
    });
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

            <Button onClick={handleSignUp} title="Criar conta" />                        
            <Link to="/" >Já tenho uma conta</Link>

          </Form>
        </main>
      </Content>
    </Container>
  )
}