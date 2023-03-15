import { Container, ContentCard } from "./styles"
import { Navbar } from "../../Components/NavBar"
import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Flavors } from "../../Components/Flavors"
import { Section } from "../../Components/Section"
import { Card } from "../../Components/Card"
import favoriteIcon from "../../assets/Icons/Heart.svg"
import { Button } from "../../Components/Button"
import { ButtonAddRemove } from "../../Components/ButtonAddRemove"

import saladaRavanello from "../../assets/meals/salada_ravanello.png"
import spaguettiGambe from "../../assets/meals/Spaguetti_Gambe.png"
import torradasParma from "../../assets/meals/Torradas_de_Parma.png"
import saladaMolla from "../../assets/meals/salada_Molla.png"

export function Home() {
  return (
    <Container>
       <Navbar/>
       <Header/>
{/*--------------------------------------------------------*/}  
      <Flavors/>
{/*--Refeições --------------------------------------------*/} 
    <Section
      title="Refeições"
      id="meals"
    >
      <div className="cards">
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

          <ContentCard>
              <input type="image" src={favoriteIcon}/>
            <Card>
              <img src={spaguettiGambe} alt="Imagem do prato de comida" />
              <h2>Spaguetti Gambe &gt;</h2>
              <p>Massa fresca com camarões e pesto.</p>
              <span>R$ 79,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </ContentCard>

          <ContentCard>
              <input type="image" src={favoriteIcon}/>
            <Card>
              <img src={torradasParma} alt="Imagem do prato de comida" />
              <h2>Torradas de Parma &gt;</h2>
              <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
              <span>R$ 25,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </ContentCard>

          <ContentCard>
              <input type="image" src={favoriteIcon}/>
            <Card>
              <img src={saladaMolla} alt="Imagem do prato de comida" />
              <h2>Salada Molla &gt;</h2>
              <p>Massa fresca com camarões e pesto. </p>
              <span>R$ 79,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </ContentCard>
      </div>
    </Section>
{/*--------------------------------------------------------*/}
      <Footer/> 
    </Container>
  )
}
