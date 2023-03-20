import { Container } from "./styles";
import { TextArea } from "../../Components/TextArea"
import { ButtonText } from "../../Components/ButtonText";
import { ButtonBack } from "../../Components/ButtonBack";
import { NoteItem } from "../../Components/NoteItem"


export function Teste() {
  return (
    <Container>
      <NoteItem value="batata" isNew></NoteItem>
      <NoteItem value="abacaxi" ></NoteItem>

    </Container>
  )
}