import { Container, Form } from "./styles";
import { useAuth } from "../../hooks/auth";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { FiUpload} from "react-icons/fi";

import { ButtonUpload } from "../../components/ButtonUpload";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/NavBar";
import { ButtonBack } from "../../components/ButtonBack";
import { InputLabel } from "../../components/InputLabel";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { Footer } from "../../components/Footer";

import { api } from "../../services/api";


export function EditMeal() {
  const { user } = useAuth()
  const isAdmin = user.admin //IsAdmin = 0 (false) | isAdmin = 1 (true) 

  const params = useParams()
  const navigate = useNavigate()

  const [ meal, setMeal ] = useState([])
  const [ price, setPrice ] = useState("")
  const [ image, setImage ] = useState("")
  const [ title, setTitle ] = useState("")
  const [ category, setCategory] = useState("")
  const [ ingredients, setIngredients ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ newIngredient, setNewIngredient ] = useState("");


  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function deleteMeal() {
    var deleteMeal = confirm("Realmente deseja excluir este prato?")
    if( deleteMeal === true) {
      await api.delete(`/meals/${params.id}`)
      alert("O prato foi excluído com sucesso!")
      navigate(-1)
    } else {
      alert("Você não excluiu o prato.")
      navigate(-1)
    }
  }

  async function handleUpdateMeal() {

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

    await api.put(`/meals/${params.id}`, formData)
      .then(() => {
        alert("Prato atualizado com sucesso!")
      })
      .catch(error => {
        if (error.message) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível atualizar o prato")
        }
      })
    
    }

  useEffect(() => {
    async function fetchEditMeal() {
      try {
        const response = await api.get(`/meals/${params.id}`)
        setMeal(response.data)
        const { title, category, description, price, ingredients, image } = response.data;
        setTitle(title)
        setCategory(category)
        setDescription(description)
        setPrice(price)
        setImage(image)
        setIngredients(ingredients.map(ingredient => ingredient.name))
      } catch (error) {
        alert("Não foi possível buscar as informações")
      }
    }
    fetchEditMeal();
  }, [])

  return (
    <Container>
      <Navbar/>
      <Header/> 
        { isAdmin === 1 ?
            <main>
                <ButtonBack
                  to="/"
                  id="buttonBack"
                  title="Voltar"
                />
                <h2>Editar prato</h2>
              <Form>
                <div className="form1">
                  <ButtonUpload 
                    type="button"
                    label="Imagem do prato" 
                    icon={FiUpload} 
                    title="Selecione imagem para alterá-la" 
                    onChange={e => setImage(e.target.files[0])} 
                  />
                  <InputLabel 
                    type="text"
                    label="Nome" 
                    placeholder="Ex.: Salada Ceasar"
                    value={title}
                    onChange={e => setTitle(e.target.value)}                  
                  />
                  <Select 
                    type="text"
                    label="Categoria" 
                    placeholder="Selecione uma categoria" 
                    value={category}
                    onChange={e => setCategory(e.target.value)}                  
                  />
                </div>

                <div className="form2">
                  <div className="dish">
                      <label htmlFor="noteItem">Ingredientes</label>
                        <div className="ingredients">                     
                            {
                              meal.ingredients && 
                                ingredients.map((ingredient, index) => (
                                    <NoteItem className="ingredientsInMeal"
                                      key={String(index)}
                                      value={ingredient}
                                      onClick={() => handleRemoveIngredient(ingredient)}
                                    />   
                                ))
                            }

                              <NoteItem className="newIngredients"
                                isNew
                                placeholder="ingrediente"  
                                value={newIngredient}
                                onChange={e => setNewIngredient(e.target.value)}
                                onClick={() => handleAddIngredient()}
                              />                                                
                        </div>
                  </div>
                    <InputLabel 
                      type="text"
                      id="price" 
                      label="Preço" 
                      placeholder="R$ 00,00"
                      value={price}              
                      onChange={e => setPrice(e.target.value)}
                    />
                </div>

                <div className="description">
                  <label htmlFor="textArea">Descrição</label>
                  <TextArea
                    rows="100"
                    placeholder="A salada Caesar é uma opção refrescante para o verão"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>

                <div className="buttons">
                  <Button title="Excluir prato" onClick={() => deleteMeal()}/>
                  <Button title="Salvar alterações" onClick={() => handleUpdateMeal()}/>
                </div>
              </Form>
            </main>     
        : <strong>Acesso Negado</strong>
      }   
      <Footer/>
    </Container>
  )
}

