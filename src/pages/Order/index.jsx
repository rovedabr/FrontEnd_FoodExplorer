import { Container, Content } from "./styles";

import { Navbar } from "../../components/NavBar"
import { Footer } from "../../components/Footer"
import { CardOrder } from "../../components/CardOrder";

export function Order() {
  return (
    <Container>
      <Navbar/>
        <main>
          <Content>
            <h2>Meu pedido</h2>
              <CardOrder/>
          </Content>
        </main>
      <Footer/>  
    </Container>  
  )
}