import { Container, Form } from "./styles"
import { AdminNavbar } from "../../Components/Admin_NavBar"
import { ButtonBack } from "../../Components/ButtonBack"
import { InputLabel } from "../../Components/InputLabel"
import { ButtonUpload } from "../../Components/ButtonUpload"
import { Select } from "../../Components/Select"
import { FiUpload} from "react-icons/fi"
import { NoteItem } from "../../Components/NoteItem"
import { TextArea } from "../../Components/TextArea"
import { Button } from "../../Components/Button"
import { Footer } from "../../Components/Footer"

export function NewMeal() {
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

        <div className="Ingredients">
          <label htmlFor="noteItem">Ingredientes</label>
          <div>
            <NoteItem isNew  value="teste"></NoteItem>
            <NoteItem value="rabanete"></NoteItem> 
            <NoteItem isNew value="batata"></NoteItem>        
          </div>
        </div>

        <InputLabel label="Preço" placeholder="R$ 00,00"></InputLabel>
        <label htmlFor="textArea">Descrição</label>
        <TextArea
          rows="100"
          placeholder="A salada Caesar é uma opção refrescante para o verão"
        ></TextArea>
          <div className="buttons">
            <Button>Salvar alterações</Button>
          </div>
      </Form>
      <Footer/>
    </Container>
  )
}