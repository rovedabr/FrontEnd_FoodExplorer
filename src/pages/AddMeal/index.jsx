import { Container, Form } from "./styles";

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

import { FiUpload} from "react-icons/fi"

import { AdminHeader } from "../../components/AdminHeader"
import { AdminNavbar } from "../../components/AdminNavbar"
import { ButtonUpload } from "../../components/ButtonUpload"
import { ButtonBack } from "../../components/ButtonBack"
import { InputLabel } from "../../components/InputLabel"
import { NoteItem } from "../../components/NoteItem"
import { TextArea } from "../../components/TextArea"
import { Select } from "../../components/Select"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"


export function AddMeal() {
  const navigate = useNavigate()

  const [ title, setTitle ] = useState("");
  const [ image, setImage ] = useState(null);
  const [ price, setPrice ] = useState("");
  const [ category, setCategory ] = useState("")
  const [ description, setDescription ] = useState("");
  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState("");

  function handleAddIngredient () {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleImage(event) {
    const file = event.target.file[0]
    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)
  }


  async function handleNewMeal() {
    if(!title || !category || !ingredients || !description || !image) {
      alert("Preencha todos os campos!")
    } else {
      const fileUploadForm = new FormData()
      fileUploadForm.append("image", image)

      await api.post("/meals", {
        title,
        category,
        description,
        price,
        ingredients
      })
    }
  }


  return (
    <Container>
        <AdminNavbar/>
        <AdminHeader/> 
        <main>
            <ButtonBack
              id="buttonBack"
              title="Voltar"
              onClick={navigate("/")}
            />
            <h2>Adicionar prato</h2>
          <Form>
            <div className="form1">
              {/* <label>
                Imagem do prato
                <div>
                <input type="file" id="imageUpload" icon={FiUpload} placeholder="teste"></input>

                </div>
              </label>            */}


              <ButtonUpload 
                label="Imagem do prato" 
                icon={FiUpload} 
                type="file"
                title="Selecione imagem para alterá-la" 
                src={image}
                onChange={handleImage}
              /> 
              
              <InputLabel 
                label="Nome" 
                placeholder="Ex.: Salada Ceasar"
                onChange={e => setTitle(e.target.value)}
              />
              <Select label="Categoria" placeholder="Selecione uma categoria" />
            </div>

            <div className="form2">
              <div className="dish">
                  <label htmlFor="noteItem">Ingredientes</label>
                <div className="ingredients">
                  {
                    ingredients.map((ingredient, index) => (
                        <NoteItem 
                          key={String(index)}
                          value={ingredient}
                          onChange={e => setNewIngredient(e.target.value)}
                          onClick={() => handleRemoveIngredient(ingredient)}
                        />   
                      ))
                  }
                    <NoteItem 
                      isNew
                      placeholder="Ingredientes"  
                      value={newIngredient}
                      onChange={e => setNewIngredient(e.target.value)}
                      onClick={handleAddIngredient}
                    />             
                </div>
              </div>
              <InputLabel 
                id="price" 
                label="Preço" 
                placeholder="R$ 00,00"
                onChange={e => setPrice(e.target.value)}
              />
            </div>

            <div className="description">
              <label htmlFor="textArea">Descrição</label>
              <TextArea
                rows="100"
                placeholder="A salada Caesar é uma opção refrescante para o verão"
                onChange={e => setDescription(e.target.value)}
              />

            </div>

            <div className="buttons">
              <Button 
                type="button"
                title="Salvar alterações"
                onClick={handleNewMeal}
              />
            </div>

          </Form>
        </main>     
      <Footer/>
    </Container>
  )
}