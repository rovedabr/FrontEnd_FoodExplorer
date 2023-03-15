import { Container, Form } from "./styles";
import { ButtonAddRemove } from "../../Components/ButtonAddRemove";
import { Navbar } from "../../Components/NavBar"
import caretLeftIcon from "../../assets/Icons/CaretLeft.svg"
import saladaRavanello from "../../assets/meals/salada_ravanello.png"
import { Section } from "../../Components/Section";
import { Card } from "../../Components/Card";
import { Tag } from "../../Components/Tag"
import { Button } from "../../Components/Button";
import { Footer } from "../../Components/Footer"

export function Meal() {
  return(
    <Container>

     <Navbar/>

    <main>
      <Form>
        <button
          title="button"
          icon={caretLeftIcon}
         >
          <input
            type="image"
            src={caretLeftIcon}
          ></input>
          Voltar
        </button>

          <Section
          >
            <img 
              src={saladaRavanello} 
            />
            <h2>Salada Ravanello</h2>
            <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</span>           
          </Section> 

          <div className="tags">
            <Tag
              title="alface"
            />
            <Tag                    
              title="cebola"
            />
            <Tag                 
              title="pão naan"
            />
            <Tag
              title="pepino"
            />
            <Tag                    
              title="rabanete"
            />
            <Tag                 
              title="tomate"
            />            
          </div>

          <div className="buttons">
            <ButtonAddRemove/>
            <Button></Button>
          </div>

        </Form>
      </main> 
    </Container>
  )
}