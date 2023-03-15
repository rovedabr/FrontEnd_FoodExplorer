import { Container, ContentCard } from "./styles"
import { Navbar } from "../../Components/NavBar"
import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Flavors } from "../../Components/Flavors"
import { Section } from "../../Components/Section"
import { Card } from "../../Components/Card"
import favoriteIcon from "../../assets/Icons/Heart.svg"
import saladaRavanello from "../../assets/meals/salada_ravanello.png"
import { Button } from "../../Components/Button"
import { ButtonAddRemove } from "../../Components/ButtonAddRemove"

export function Home() {
  return (
    <Container>
       <Navbar/>
       <Header/>
{/*--------------------------------------------------------*/}  
      <Flavors/>
{/*--------------------------------------------------------*/} 
    <Section
      title="Refeições"
    >
      <ContentCard>
              <input type="image" src={favoriteIcon}/>
            <Card>
              <img src={saladaRavanello} alt="Imagem do prato de comida" />
              <h2>Salada Ravanello &gt;</h2>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
              <span>R$ 49,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
          </Card>
        </ContentCard>

    </Section>
{/*--------------------------------------------------------*/}
      <Footer/> 
    </Container>
  )
}
