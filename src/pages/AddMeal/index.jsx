import { Container, Form } from "./styles";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useState } from "react";

import { FiUpload} from "react-icons/fi";

import { ButtonUpload } from "../../components/ButtonUpload";
import { ButtonBack } from "../../components/ButtonBack";
import { InputLabel } from "../../components/InputLabel";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Navbar } from "../../components/NavBar";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function AddMeal() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [ title, setTitle ] = useState("");
  const [ image, setImage ] = useState(null);
  const [ price, setPrice ] = useState("");
  const [ category, setCategory ] = useState("")
  const [ description, setDescription ] = useState("");
  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState([]);

  function handleAddIngredient () {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleNewMeal() {

    if (!title) {
      return alert("Preencha o nome do prato.")
    }

    if (!category) {
      return alert("Selecione uma categoria.")
    }

    if (!ingredients) {
      return alert("adicione os ingredientes do prato")
    } 

     if (newIngredient) {
      return alert("Você deixou um ingrediente preenchido sem adicionar, clique (+) para adicionar ou remova o mesmo para continuar.")
    }
    
    const formData = new FormData()

    formData.append("title", title)
    formData.append("image", image)
    formData.append("category", category)
    formData.append("description", description)
    formData.append("price", price)
  
    ingredients.map(ingredient => formData.append("ingredients", ingredient))

    await api.post("/meals", formData)
      .then(() => {
        alert("Prato inserido com sucesso!")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar o prato!")
        }
      }) 
    }
    
  return (
    <Container>
        <Navbar/>
        <Header/> 
        <main>
            <ButtonBack
              id="buttonBack"
              title="Voltar"
              to="/"
            />
            <h2>Adicionar prato</h2>
              <Form>
                <div className="form1">
                  <ButtonUpload 
                    label="Imagem do prato" 
                    icon={FiUpload} 
                    type="file"
                    title="Selecione imagem" 
                    src={image}
                    onChange={e => setImage(e.target.files[0])}
                  />                   
                  <InputLabel 
                    label="Nome" 
                    placeholder="Ex.: Salada Ceasar"
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Select 
                    label="Categoria" 
                    placeholder="Selecione uma categoria" 
                    onChange={e => setCategory(e.target.value)}
                  >  
                    <option value="meals" >Refeições</option>
                    <option value="deserts">Sobremesas</option>
                    <option value="drinks">Bebidas</option>               
                  </Select>
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
                    onClick={() => handleNewMeal()}
                  />
                </div>
              </Form>
        </main>     
      <Footer/>
    </Container>
  )
}