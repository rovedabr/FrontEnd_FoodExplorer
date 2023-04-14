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

  const [ search, setSearch ] = useState("");
  const [ data , setData ] = useState("")
  const [ meals, setMeals ] = useState([]);
  const [ titles, setTitles ] = useState([])
  const [ ingredients, setIngredients ] = useState([]);

  function exit() {
    signOut()
    navigate("/")

  useEffect(() => {
    async function fetchSearchMealsAndIngredients() {
      const response = await api.get(`/meals?title=${search}&&/ingredients?name=${search}`);
      setMeals(response.data)
      console.log(response.data)
    }
    fetchSearchMealsAndIngredients([search]);
  },[]);

  console.log(search, setSearch)


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