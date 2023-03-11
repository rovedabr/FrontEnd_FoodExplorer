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
      <Form>
        <button
          title="button"
          icon={caretLeftIcon}
         >
          <input
          type="image"
          src={caretLeftIcon}
          ></input>
          Voltar</button>

          <Section
          >
            <img 
              src={saladaRavanello} 
            />
            <h1>Salada Ravanello</h1>
            <p>abanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>           
          </Section> 
          <div className="tags">
            <Tag
              title="alface"
            ></Tag>                      <Tag
              title="cebola"
            ></Tag>
          </div>
       <ButtonAddRemove/>
       <Button/>
      </Form>
      <Footer/>

    </Container>
  )
}