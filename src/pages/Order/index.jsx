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

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { api } from "../../services/api";

export function Order() {
  const { cart, clearCart, totalCart } = useCart()


  function handleNewCart(cart) {
    const user_id  = useAuth(user.id)    
    return{
      cart: cart.map(item => (
        {
          user_id: user_id,
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
    console.log(newCart)

    await api.post("/mealsOrder", newCart)
  }  
 
  return (
    <Container>
      <Navbar/>
      <Header/>
        <main>
          <Form className="form1" >
              <Content>
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
            <Button title="Avançar" className="goPay" onClick={() => handleCreateOrder(cart)}/>
          </Form>
          <Form2 className="form2" >
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
                <Button title="Finalizar pagamento" onClick={handleCreateOrder(cart)}/>
              </div>
              {/* <div className="codeInput-wrapper">
                <div className="code">
                    <img src={qrCode} alt="" />
                </div>
              </div> */}
            </div>
          </Form2>
        </main>
      <Footer/>  
    </Container>  
  )
}