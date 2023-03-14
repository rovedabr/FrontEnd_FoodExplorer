import { Card } from "../../Components/Card";
import { Container } from "./styles";
import saladaRavanello from "../../assets/meals/salada_ravanello.png"

export function Teste() {
  return (
    <Container>
      <Card>
        <img src={saladaRavanello} alt="" />
      </Card>
    </Container>
  )
}