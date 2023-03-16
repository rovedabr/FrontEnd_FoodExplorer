import { Container } from "./styles";
import { TextArea } from "../../Components/TextArea"


export function Teste() {
  return (
    <Container>
      <div className="note">
        <label>Descrição</label>
        <TextArea
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        >        
        </TextArea>

      </div>

    </Container>
  )
}