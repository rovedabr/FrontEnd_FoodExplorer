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
           <input 
              type="image"  
              src={favoriteIcon} 
            /> 
            <Card 
            > 
  
              <img src={saladaRavanello} alt="" />
              <h2>Salada Ravanello</h2>
              <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
              <strong>R$ 49,97</strong>
            </Card>
            <Button
              type="button"
            >
              Incluir
            </Button>

      </Form>
     </Section>

    </Container>
  )
}