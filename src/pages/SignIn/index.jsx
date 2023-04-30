import { Container, Content, Form } from "./styles";

import brand from "../../assets/brand.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

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
       <img 
        src={brand} 
        alt="Logo da empresa"        
       />
        <main>
          <Form>
            <h1>Faça login</h1>

            <div className="input-wrapper">
              <label>Email</label>
              <Input
                required
                placeholder="Exemplo: exemplo@exemplo.com.br"
                type="email"
                onChange={e => setEmail(e.target.value)}
              ></Input>
            </div>

            <div className="input-wrapper">
             <label>Senha</label>
              <Input
                className="password"
                required
                placeholder="No mínimo 6 caracteres"
                type="password"
                minlength="6"
                secureTextEntry={true}
                onChange={e => setPassword(e.target.value)}
              ></Input>
            </div>

            <Button 
              type="button"
              title="Entrar" 
              onClick={handleSignIn} 
              onkeypress={handleSignIn}            
            />

            <Link to="/register"> Criar uma conta </Link>  
                  
          </Form>
        </main>
      </Content>
    </Container>
  )
}