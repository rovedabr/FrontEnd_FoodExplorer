import { Container, Form } from "../Menu/styles";
import { Tag } from "../../Components/Tag";
import { ButtonAdd } from "../../Components/ButtonAdd";

import minusIcon from "../../assets/Icons/Minus.svg"

export function Home() {
  return (
    <Container>
      <Form>

      </Form>

       <ButtonAdd
        img={minusIcon}
        type="button"
      >
      </ButtonAdd>
    </Container>
  )
}