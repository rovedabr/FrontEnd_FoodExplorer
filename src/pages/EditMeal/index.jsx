import { Container, Form } from "./styles"
import { AdminNavbar } from "../../components/AdminNavbar"
import { ButtonBack } from "../../components/ButtonBack"
import { InputLabel } from "../../components/InputLabel"
import { ButtonUpload } from "../../components/ButtonUpload"
import { Select } from "../../components/Select"
import { FiUpload} from "react-icons/fi"
import { NoteItem } from "../../components/NoteItem"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { AdminHeader } from "../../components/AdminHeader"

export function EditMeal() {
  return (
    <Container>
        <AdminNavbar/>
        <AdminHeader/> 
        <main>
            <ButtonBack
              to="/"
              id="buttonBack"
              title="Voltar"
            />
            <h2>Editar prato</h2>
          <Form>
            <div className="form1">
              <ButtonUpload label="Imagem do prato" icon={FiUpload} title="Selecione imagem para alterá-la" ></ButtonUpload>
              <InputLabel label="Nome" placeholder="Ex.: Salada Ceasar"></InputLabel>
              <Select label="Categoria" placeholder="Selecione uma categoria" ></Select>
            </div>

            <div className="form2">
              <div className="dish">
                  <label htmlFor="noteItem">Ingredientes</label>
                <div className="ingredients">
                    <NoteItem isNew  value="alface"></NoteItem>
                    <NoteItem value="rabanete"></NoteItem> 
                    <NoteItem value="batata"></NoteItem>                      
                </div>
              </div>
              <InputLabel id="price" label="Preço" placeholder="R$ 00,00"></InputLabel>
            </div>

            <div className="description">
              <label htmlFor="textArea">Descrição</label>
              <TextArea
                rows="100"
                placeholder="A salada Caesar é uma opção refrescante para o verão"
              ></TextArea>
            </div>

            <div className="buttons">
              <Button title="Excluir prato"></Button>
              <Button title="Salvar alterações"></Button>
            </div>

          </Form>
        </main>     
        <Footer/>
    </Container>
  )
}