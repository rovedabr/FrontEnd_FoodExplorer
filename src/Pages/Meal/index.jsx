import { Container, Form } from "./styles";
import { ButtonAddRemove } from "../../Components/ButtonAddRemove";
import { Navbar } from "../../Components/NavBar"
import { ButtonText } from "../../Components/ButtonText"
import caretLeftIcon from "../../assets/Icons/CaretLeft.svg"

export function Meal() {
  return(
    <Container>
     <Navbar/>
      <Form>
        <button
          title="button"
          icon={caretLeftIcon}
         >
          <input
          type="image"
          src={caretLeftIcon}
          ></input>
          Voltar</button>

       <ButtonAddRemove/>
      </Form>

    </Container>
  )
}