import { Container, Form } from "./styles"
import { AdminNavbar } from "../../Components/Admin_NavBar"
import { Input } from "../../Components/Input"
import { ButtonBack } from "../../Components/ButtonBack"
import { InputLabel } from "../../Components/InputLabel"
import { ButtonUpload } from "../../Components/ButtonUpload"
import { Select } from "../../Components/Select"
import { FiUpload} from "react-icons/fi"
import { FiChevronDown } from "react-icons/fi"

export function New() {
  return (
    <Container>
        <AdminNavbar/>      
      <Form>
        <ButtonBack
          title="Voltar"
        />
        <h2>Novo prato</h2>

        <ButtonUpload label="Imagem do prato" icon={FiUpload} title="Selecione imagem para alterá-la" ></ButtonUpload>
        <InputLabel label="Nome" placeholder="Ex.: Salada Ceasar"></InputLabel>
        <Select label="Categoria" placeholder="Selecione uma categoria" ></Select>

{/*         <label htmlFor="uploadImage">Imagem do prato</label>
        <Input
          type="file"
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
 */}



      </Form>
    </Container>
  )
}