import { Container, Content, Form, Form2 } from "./styles";

import { Navbar } from "../../components/NavBar"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { CardOrder } from "../../components/CardOrder";
import { Button } from "../../components/Button";
import { InputLabel } from "../../components/InputLabel"

import pixIcon from "../../assets/Icons/PIX.svg"
import creditCardIcon from "../../assets/Icons/CreditCard.svg"
import qrCode from "../../assets/qrCode.svg"

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
              <div>
                <div className="pixForm">
                  <input type="image" src={pixIcon} alt="" /> <p>PIX</p>
                </div>
                <div className="cardForm">
                  <input type="image" src={creditCardIcon} alt="" />  <p>Crédito</p>
                </div>
              </div>
               <div className="input-wrapper">

                <div className="cardNumber">
                  <label for="cardNumber">Número do Cartão</label>
                  <input id="cardNumber" type="text"  placeholder="0000 0000 0000 0000"/>
                </div>

                <div className="cardData">
                  <div className="validity">
                    <label for="validity">Validade</label>
                    <input id="validity" type="text"  placeholder="00/00/0000"/>
                  </div>

                  <div className="cvc">
                    <label for="cvc">CVC</label>
                    <input id="cvc" type="text"  placeholder="0000"/>
                  </div>
                </div>
  
                {/* <div className="code">
                    <img src={qrCode} alt="" />
                </div> */}
              </div>
            </div>
          </Form2>
        </main>
      <Footer/>  
    </Container>  
  )
}