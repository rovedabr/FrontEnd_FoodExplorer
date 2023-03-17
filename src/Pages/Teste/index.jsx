import { Container } from "./styles";
import { TextArea } from "../../Components/TextArea"
import { ButtonText } from "../../Components/ButtonText";


export function Teste() {
  return (
    <Container>
      <div className="note-wrapper">
        <label for="event-note">Descrição</label>
        <TextArea id="event-note"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        >        
        </TextArea>

      </div>
      <ButtonText

      >
   
      </ButtonText>

    </Container>
  )
}