import { Container, Form } from "./styles";
import { Card } from "../../Components/Card"
import saladaRavanello from "../../assets/meals/salada_ravanello.png"
import favoriteIcon from "../../assets/Icons/Heart.svg"
import { Section } from "../../Components/Section copy";

export function Home() {
  return(
    <Container>
        <Section>
         {/* <Form>

        <Card 
        > 
          <button
            type="button"
            img={favoriteIcon}
          >
          </button>         
          <img src={saladaRavanello} alt="" />
          <h2>Salada Ravanello</h2>
          <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
          <strong>R$ 49,97</strong>
        </Card>

      </Form> */}
        </Section>
    </Container>
  )
}