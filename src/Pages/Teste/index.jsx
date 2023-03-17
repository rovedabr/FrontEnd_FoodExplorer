import { Container } from "./styles";
import { TextArea } from "../../Components/TextArea"
import { ButtonText } from "../../Components/ButtonText";
import { ButtonBack } from "../../Components/ButtonBack";



export function Teste() {
  return (
    <Container>
      <div className="note-wrapper">
        <label >Descrição</label>
        <TextArea id="event-note"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        >        
        </TextArea>

      </div>
      <ButtonBack
      title="Voltar"
      >
        Voltar
      </ButtonBack>

    </Container>
  )
}