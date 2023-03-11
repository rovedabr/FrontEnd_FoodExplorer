import { Container, Form } from "./styles";
import { Card } from "../../Components/Card"
import saladaRavanello from "../../assets/meals/salada_ravanello.png"
import favoriteIcon from "../../assets/Icons/Heart.svg"
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button"


export function Home() {
  return(
    <Container>

        <Section> 
          <h2>Refeições</h2>
         <Form>
            <Card> 
              <input 
                type="image"  
                src={favoriteIcon} 
              /> 
  
              <img src={saladaRavanello} alt="" />
              <h2>Salada Ravanello</h2>
              <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
              <strong>R$ 49,97</strong>
            <Button
              type="button"
              >
              Incluir
            </Button>
           </Card>
           <Card> 
              <input 
                type="image"  
                src={favoriteIcon} 
              /> 
  
              <img src={saladaRavanello} alt="" />
              <h2>Salada Ravanello</h2>
              <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
              <strong>R$ 49,97</strong>
            <Button
              type="button"
              >
              Incluir
            </Button>
           </Card>
          </Form>
         </Section>

    </Container>
  )
}