import { Container, Form } from "./styles";

import { Navbar } from "../../components/NavBar"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button";
import { ButtonAddRemove } from "../../components/ButtonAddRemove";
import { ButtonBack } from "../../components/ButtonBack";

import receiptIcon from "../../assets/Icons/Receipt.svg"
import caretLeftIcon from "../../assets/Icons/CaretLeft.svg"
import saladaRavanello from "../../assets/meals/saladaRavanello.png"

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
                    <Tag title="tomate com agrião"></Tag>
                  </div>

                  <div className="buttons">
                    <ButtonAddRemove/>
                    <Button> incluir ∙ R$ 25,00</Button>
                  </div>

                </div>
              </div>  
          </Form>
        </main> 
        <Footer/>
    </Container>
  )
}