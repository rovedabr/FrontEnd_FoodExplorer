import { Container } from "./styles";
import flavors from "../../assets/Flavors.png"

export function Flavors() {
  return (
    <Container>
      <div className="backgroundFlavors">
        <div className="description">
          <h1>Sabores inigualáveis</h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
        </div>
      </div>
      
        <img 
          src={flavors} 
          alt="Imagem de macarrons com frutas vermelhas caindo no ar" 
        />
     </Container>
  )
}