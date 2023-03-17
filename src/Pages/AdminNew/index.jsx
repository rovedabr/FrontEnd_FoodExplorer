import { Container, Form } from "./styles"
import { AdminNavbar } from "../../Components/Admin_NavBar"
import { Input } from "../../Components/Input"
import { ButtonBack } from "../../Components/ButtonBack"

export function New() {
  return (
    <Container>
        <AdminNavbar/>      
      <Form>
        <ButtonBack
          title="Voltar"
        />
        <h2>Novo prato</h2>

        <label 
          htmlFor="uploadImage"
        >
          Imagem do prato
        </label><Input
          id="uploadImage"
          placeholder="Selecione imagem"
        ></Input>

        <label 
          htmlFor="name"
        >
          Nome
        </label><Input
          id="name"
          placeholder="Ex.: Salada Ceasar"
        ></Input>




      </Form>
    </Container>
  )
}