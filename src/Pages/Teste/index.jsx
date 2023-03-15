import { Card } from "../../Components/Card";
import { Container, ContentCard } from "./styles";
import saladaRavanello from "../../assets/meals/salada_ravanello.png"
import { ButtonAddRemove } from "../../Components/ButtonAddRemove";
import { Button } from "../../Components/Button";
import favoriteIcon from "../../assets/Icons/Heart.svg"

export function Teste() {
  return (
    <Container>
      <ContentCard>
            <input type="image" src={favoriteIcon}/>
          <Card>
            <img src={saladaRavanello} alt="Imagem do prato de comida" />
            <h2>Salada Ravanello &gt;</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            <span>R$ 49,97</span>
            <div className="buttons">
              <ButtonAddRemove/>
              <Button>incluir</Button>
            </div>
        </Card>
      </ContentCard>
    </Container>
  )
}