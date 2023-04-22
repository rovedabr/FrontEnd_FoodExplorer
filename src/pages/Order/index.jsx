import { Container, Content, Form } from "./styles";

import { Navbar } from "../../components/NavBar"
import { Footer } from "../../components/Footer"

export function Order() {
  return (
    <Container>
      <Navbar/>
        <main>
          <Content>
            <h2>Meu pedido</h2>
              <Form>
                <div className="order">
                  <img src="" alt="" />
                  <p>1 x </p> //! quantity
                  <h3>Salada</h3> //!title
                  <span>R$ 25.00</span> //!price
                </div>
                <h3>Total: R$ 100,00</h3> //!total order
              </Form>
          </Content>
        </main>
      <Footer/>  
    </Container>  
  )
}