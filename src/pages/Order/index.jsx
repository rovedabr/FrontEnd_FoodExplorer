import { Container, Content, Form, Form2 } from "./styles";

import { Navbar } from "../../components/NavBar"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { CardOrder } from "../../components/CardOrder";
import { Button } from "../../components/Button";

import { MdPix } from "react-icons/md"
import { BsCreditCardFill } from "react-icons/bs"

export function Order() {
  return (
    <Container>
      <Navbar/>
      <Header/>
        <main>
          <Form>
              <Content>
                <h2>Meu pedido</h2>
                  <CardOrder/>
              </Content>
            <Button title="Avançar"/>
          </Form>
          <Form2>
            <h2>Pagamento</h2>
            <div className="payForm">
              <div className="pixForm">
                <input type="image" src={MdPix} alt="" /> <p>PIX</p>
              </div>
              <div className="cardForm">
                <input type="image" src={BsCreditCardFill} alt="" />  <p>Crédito</p>
              </div>  
            </div>
          </Form2>
        </main>
      <Footer/>  
    </Container>  
  )
}