import { Container, Form } from "./styles";

import { AdminNavbar } from "../../Components/Admin_NavBar"
import { AdminHeader } from "../../Components/Admin_Header"
import { Footer } from "../../Components/Footer"
import { Tag } from "../../Components/Tag"
import { Button } from "../../Components/Button";
import { ButtonBack } from "../../Components/ButtonBack";

import receiptIcon from "../../assets/Icons/Receipt.svg"
import caretLeftIcon from "../../assets/Icons/CaretLeft.svg"
import saladaRavanello from "../../assets/meals/salada_ravanello.png"

export function AdminMeal() {
  return(
    <Container>
     <AdminNavbar/>
     <AdminHeader/>

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
                    <Button>Editar prato</Button>
                  </div>

                </div>
              </div>  
          </Form>
        </main> 
        <Footer/>
    </Container>
  )
}