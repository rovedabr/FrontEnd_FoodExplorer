import { Container } from "../Menu/styles";
import { Tag } from "../../Components/Tag";
import { ButtonAdd } from "../../Components/ButtonAdd";
import minus from "../../assets/Icons/Minus.svg"

export function Home() {
  return (
    <Container>
      <Tag
      title="teste"
      >  
      </Tag>
      <ButtonAdd
        icon={minus}
        type="button"
      >
        Test Botão
      </ButtonAdd>
    </Container>
  )
}