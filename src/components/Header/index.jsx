import { Container, Content } from "./styles";
import { Input } from "../Input";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth"
import { useCart } from "../../hooks/cart";
import { useState, useEffect } from "react";

import receiptIcon from "../../assets/Icons/Receipt.svg"
import { HiMagnifyingGlass } from "react-icons/hi2"
import logout from "../../assets/Icons/Logout.svg"
import  brand from "../../assets/brand.png"


export function Header() {
  const { signOut } = useAuth();
  const { cart, orders } = useCart();
  const [ search, setSearch ] = useState("");
  const [ ingredients, setIngredients ] = useState([]);

  const [tagsSelected, setTagsSelected] = useState([]);

  //*=============================================================
//   function handleTagSelected(ingredient){
//     if(ingredient === "all"){
//         return setTagsSelected([]);
//     }

//     const alreadySelected = tagsSelected.includes(ingredient);
    
//     if(alreadySelected){
//         const filteredTags = tagsSelected.filter(tag => tag !== ingredient);
//         setTagsSelected(filteredTags)
//     }else{
//         setTagsSelected(prevState => [...prevState, ingredient]);
//     }
// }



  useEffect(() => {
    async function fetchIngredients() {
      const response = await api.get(`meals?title=${search}`) ///meals?title=${search}&
      setIngredients(response.data)
      console.log(response.data)
    }
    fetchIngredients()

  },[search])


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
          <span>{cart.length}</span>
        </button>

      <button className="logout" onClick={exit}>
        <img src={logout} alt="Botão de sair"/>
      </button>       

      </Content>
    </Container>
  )
};