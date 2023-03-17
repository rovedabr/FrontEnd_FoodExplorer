import { Container, Form } from "./styles";

import { Navbar } from "../../Components/NavBar"
import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Tag } from "../../Components/Tag"
import { Button } from "../../Components/Button";
import { ButtonAddRemove } from "../../Components/ButtonAddRemove";
import { ButtonBack } from "../../Components/ButtonBack";

import receiptIcon from "../../assets/Icons/Receipt.svg"
import caretLeftIcon from "../../assets/Icons/CaretLeft.svg"
import saladaRavanello from "../../assets/meals/salada_ravanello.png"

export function MealDetails() {
  return(
    <Container>
     <Navbar/>
     <Header/>

      <main>
        <Form>
          <ButtonBack
            title="Voltar"
          />

            <div id="menu">
                <img 
                  src={saladaRavanello} 
                />
                
                <div className="content"> 

                  <div className="mealData">
                    <h2>Salada Ravanello</h2>
                    <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</span>         
                  </div>   

                  <div className="tags">
                    <Tag title="alface"></Tag>
                    <Tag title="cebola"></Tag>
                    <Tag title="pão naan"></Tag>
                    <Tag title="pepino"></Tag>
                    <Tag title="rabanete"></Tag>
                    <Tag title="tomate"></Tag>
                  </div>

                  <div className="buttons">
                    <ButtonAddRemove/>
                    <Button><img src={receiptIcon} alt="" /> pedir ∙ R$ 25,00</Button>
                  </div>

                </div>
              </div>  
          </Form>
        </main> 
        <Footer/>
    </Container>
  )
}