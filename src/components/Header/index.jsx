import { Container, Content } from "./styles";
import { Input } from "../Input";
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth"
import { useState, useEffect } from "react";

import receiptIcon from "../../assets/Icons/Receipt.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import logout from "../../assets/Icons/Logout.svg"
import  brand from "../../assets/brand.png"


export function Header() {
  const { signOut } = useAuth();

  //*=============================================================

  const [ search, setSearch ] = useState("");
  const [ meals, setMeals ] = useState([])
  const [ data , setData ] = useState("")
  const [ ingredients, setIngredients ] = useState([]);

  useEffect(() => {
    async function fetchSearchMealsAndIngredients() {
      const response = await api.get(`/meals?title${search}&&/ingredients?name${search}`); //!&/ingredients?name=${search}  meals?title=${search}&&/
      setMeals(response.data)
      console.log(response.data)
    }
    fetchSearchMealsAndIngredients();
  },[search]);

  // console.log(search, setSearch)

  //*===============================================================


  function exit() {
    signOut()
    navigate("/")
  }
 
  return(
    <Container>
      <Content>
        <div className="brand">
          <img src={brand} alt="Logo da empresa Food Explorer" />
        </div>
        
          <Input            
            type="text"
            icon={HiMagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
            onChange={e => setSearch(e.target.value)}
          />

        <button className="order">
          <img src={receiptIcon} alt="" /> 
          <h3>Pedidos</h3>
          <span>(0)</span>
        </button>

      <button className="logout" onClick={exit}>
        <img src={logout} alt="Botão de sair"/>
      </button>       

      </Content>
    </Container>
  )
};