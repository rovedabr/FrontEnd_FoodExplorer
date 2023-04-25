import { Container, Content, Form2 } from "./styles";

import { Navbar } from "../../components/NavBar"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { CardOrder } from "../../components/CardOrder";
import { Button } from "../../components/Button";
import { InputLabel } from "../../components/InputLabel"

import pixIcon from "../../assets/Icons/PIX.svg"
import creditCardIcon from "../../assets/Icons/CreditCard.svg"
import qrCode from "../../assets/qrCode.svg"

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { api } from "../../services/api";
import { useState } from "react";

export function Order() {
  const { cart, clearCart, totalCart } = useCart()
  const  { user }  = useAuth() 

  const [ showPix, setShowPix ] = useState(false)
  const [ showCard, setShowCard ] = useState(false)

  function pixPaymentForm () {
    setShowPix(true)
    setShowCard(false)
  }

  function cardPaymentForm() {
    setShowCard(true)
    setShowPix(false)
  }

  function handleNewCart(cart) {
    return{
      cart: cart.map(item => (
        {
          user_id: user.id,
          meals_id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity
        }
      ))
    }
  }

  async function handleCreateOrder(cart) { 
    const newCart = handleNewCart(cart)
    await api.post("/mealsOrder", newCart)
    clearCart()
  }  
 
  return (
    <Container>
      <Navbar/>
      <Header/>
        <main>
          <Content className="form1" >
                <h2>Meu pedido</h2>
                { cart && 
                    cart.map( item => (
                      <CardOrder
                        key={String(item.id)}
                        data={item}
                      />
                    ))
                }
              <h3>Total: R$ {totalCart}</h3>    
          </Content>
          <Form2 className="form2" >
            <h2>Pagamento</h2>
            <div className="payForm">
              <div>
                <div className="pixForm">
                  <input type="image" src={pixIcon} alt=""  onClick={() => pixPaymentForm()}/> <p>PIX</p>
                </div>
                <div className="cardForm">
                  <input type="image" src={creditCardIcon} alt="" onClick={() => cardPaymentForm()} /> <p>Crédito</p>
                </div>
              </div>
                { showCard ? 
                  <div className="cardInput-wrapper">
                    <div className="cardNumber">
                      <label htmlFor="cardNumber">Número do Cartão</label>
                      <input id="cardNumber" type="text"  placeholder="0000 0000 0000 0000"/>
                    </div>
                    <div className="cardData">
                      <div className="validity">
                        <label htmlFor="validity">Validade</label>
                        <input id="validity" type="text"  placeholder="00/00/0000"/>
                      </div>
                      <div className="cvc">
                        <label htmlFor="cvc">CVC</label>
                        <input id="cvc" type="text"  placeholder="0000"/>
                      </div>
                    </div>  
                  </div>
                  : null 
                }
                {
                  showPix ?
                  <div className="pixInput-wrapper">
                    <div className="pix">
                    <img src={qrCode} alt="" />
                    </div>
                  </div>
                  : null
                }

              <Button title="Finalizar pedido" onClick={() => handleCreateOrder(cart)}/>
            </div>
          </Form2>
        </main>
      <Footer/>  
    </Container>  
  )
}