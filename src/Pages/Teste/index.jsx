import { Card } from "../../Components/Card";
import { Container } from "./styles";
import saladaRavanello from "../../assets/meals/salada_ravanello.png"
import { ButtonAddRemove } from "../../Components/ButtonAddRemove";
import { Button } from "../../Components/Button";

export function Teste() {
  return (
    <Container>
      <Card>
        <img src={saladaRavanello} alt="" />
        <h2>Salada Ravanello</h2>
        <p>R$ 49,97</p>
        <div className="buttons">
          <ButtonAddRemove/>
          <Button>incluir</Button>
        </div>
      </Card>
    </Container>
  )
}