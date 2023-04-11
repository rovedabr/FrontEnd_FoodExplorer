import { Container, Form } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { FiUpload} from "react-icons/fi";

import { ButtonUpload } from "../../components/ButtonUpload";
import { AdminHeader } from "../../components/AdminHeader";
import { AdminNavbar } from "../../components/AdminNavbar";
import { ButtonBack } from "../../components/ButtonBack";
import { InputLabel } from "../../components/InputLabel";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { Footer } from "../../components/Footer";


export function EditMeal() {
  const [ image, setImage ] = useState(""); //!verificar os estados de início
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState();
  const [ ingredient, setIngredient ] = useState();
  const [ price, setPrice ] = useState();
  const [ description, setDescription ] = useState();




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
              <ButtonUpload 
                type="button"
                label="Imagem do prato" 
                icon={FiUpload} 
                title="Selecione imagem para alterá-la" 
                onChange={e => setImage(e.target.value)}
              />
              <InputLabel 
                type="text"
                label="Nome" 
                placeholder="Ex.: Salada Ceasar"
              
              />
              <Select 
                type="text"
                label="Categoria" 
                placeholder="Selecione uma categoria" 
              
              />"text"
            </div>

            <div className="form2">
              <div className="dish">
                  <label htmlFor="noteItem">Ingredientes</label>
                <div className="ingredients">
                    <NoteItem 
                      type="text"
                      isNew  
                      value="alface"                    
                    />

                    <NoteItem value="rabanete"></NoteItem> 
                    <NoteItem value="batata"></NoteItem>                      
                </div>
              </div>
              <InputLabel 
                type="text"
                id="price" 
                label="Preço" 
                placeholder="R$ 00,00"              
              />
            </div>

            <div className="description">
              <label htmlFor="textArea">Descrição</label>
              <TextArea
                rows="100"
                placeholder="A salada Caesar é uma opção refrescante para o verão"
              ></TextArea>
            </div>

            <div className="buttons">
              <Button title="Excluir prato"/>
              <Button title="Salvar alterações"/>
            </div>

          </Form>
        </main>     
        <Footer/>
    </Container>
  )
}