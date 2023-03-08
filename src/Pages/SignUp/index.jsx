import { Container, BrandForm, Form } from "./styles";
import { Brand } from "../../Components/Brand";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText"

export function SignUp() {
  return(
    <Container>

      <main>
        <BrandForm>
          <Brand/>
        </BrandForm>

        <Form>

        </Form>
      </main>

    </Container>


  )
}