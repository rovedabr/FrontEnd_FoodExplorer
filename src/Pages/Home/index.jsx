import { Container, Content } from "./styles"
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
      <Content>
{/*--------------------------------------------------------*/}  
      <Flavors/>
{/*--------------------------------------------------------*/}           
        <Section
          title="Refeições"
        >
          <div className="cards">
            <Card className="card"> 
                <input
                  type="image"  
                  src={favoriteIcon} 
                /> 
                <img src={saladaRavanello} alt="" />
                <h2>Salada Ravanello</h2>
                <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
                <strong>R$ 49,97</strong>
              <ButtonAddRemove/>  
              <Button
                type="button"
                >
                Incluir
              </Button>
            </Card>

            <Card className="card"> 
                <input
                  type="image"  
                  src={favoriteIcon} 
                /> 
                <img src={saladaRavanello} alt="" />
                <h2>Salada Ravanello</h2>
                <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
                <strong>R$ 49,97</strong>
              <ButtonAddRemove/>  
              <Button
                type="button"
                >
                Incluir
              </Button>
            </Card>

            <Card className="card"> 
                <input
                  type="image"  
                  src={favoriteIcon} 
                /> 
                <img src={saladaRavanello} alt="" />
                <h2>Salada Ravanello</h2>
                <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
                <strong>R$ 49,97</strong>
              <ButtonAddRemove/>  
              <Button
                type="button"
                >
                Incluir
              </Button>
            </Card>

          </div>

        </Section>
{/*--------------------------------------------------------*/}         
        <Section
          title="Pratos principais"
        >
          <div className="cards">
          <Card className="card"> 
                <input
                  type="image"  
                  src={favoriteIcon} 
                /> 
                <img src={saladaRavanello} alt="" />
                <h2>Salada Ravanello</h2>
                <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
                <strong>R$ 49,97</strong>
              <ButtonAddRemove/>  
              <Button
                type="button"
                >
                Incluir
              </Button>
            </Card>


            <Card className="card"> 
                <input
                  type="image"  
                  src={favoriteIcon} 
                /> 
                <img src={saladaRavanello} alt="" />
                <h2>Salada Ravanello</h2>
                <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
                <strong>R$ 49,97</strong>
              <ButtonAddRemove/>  
              <Button
                type="button"
                >
                Incluir
              </Button>
            </Card>
            <Card className="card"> 
                <input
                  type="image"  
                  src={favoriteIcon} 
                /> 
                <img src={saladaRavanello} alt="" />
                <h2>Salada Ravanello</h2>
                <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
                <strong>R$ 49,97</strong>
              <ButtonAddRemove/>  
              <Button
                type="button"
                >
                Incluir
              </Button>
            </Card>

          </div>

        </Section>

{/*--------------------------------------------------------*/}    
        <Section
          title="Bebidas"
        >
          <div className="cards">
            <Card className="card"> 
                <input 
                  type="image"  
                  src={favoriteIcon} 
                /> 
                <img src={saladaRavanello} alt="" />
                <h2>Salada Ravanello</h2>
                <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
                <strong>R$ 49,97</strong>
              <ButtonAddRemove/>  
              <Button
                type="button"
                >
                Incluir
              </Button>
            </Card>

            <Card className="card"> 
                <input 
                  type="image"  
                  src={favoriteIcon} 
                /> 
                <img src={saladaRavanello} alt="" />
                <h2>Salada Ravanello</h2>
                <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
                <strong>R$ 49,97</strong>
              <ButtonAddRemove/>  
              <Button
                type="button"
                >
                Incluir
              </Button>
            </Card>
            <Card className="card"> 
                <input 
                  type="image"  
                  src={favoriteIcon} 
                /> 
                <img src={saladaRavanello} alt="" />
                <h2>Salada Ravanello</h2>
                <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
                <strong>R$ 49,97</strong>
              <ButtonAddRemove/>  
              <Button
                type="button"
                >
                Incluir
              </Button>
            </Card>

          </div>

        </Section>
      
      </Content>
      <Footer/> 
    </Container>
  )
}



/* import { Container, Form } from "./styles";
import { Card } from "../../Components/Card"
import saladaRavanello from "../../assets/meals/salada_ravanello.png"
import favoriteIcon from "../../assets/Icons/Heart.svg"
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button"
import { Header } from "../../Components/Header"
import { Flavors } from "../../Components/Flavors";
import { Navbar } from "../../Components/NavBar"

export function Home() {
  return(
    <Container>
      <Navbar/>
      <Flavors/>

        <Section> 
          <h2>Refeições</h2>
         <Form>
            <Card> 
              <input 
                type="image"  
                src={favoriteIcon} 
              /> 
              <img src={saladaRavanello} alt="" />
              <h2>Salada Ravanello</h2>
              <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
              <strong>R$ 49,97</strong>
            <Button
              type="button"
              >
              Incluir
            </Button>
           </Card>
           <Card> 
              <input 
                type="image"  
                src={favoriteIcon} 
              /> 
  
              <img src={saladaRavanello} alt="" />
              <h2>Salada Ravanello</h2>
              <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</span>
              <strong>R$ 49,97</strong>
            <Button
              type="button"
              >
              Incluir
            </Button>
           </Card>
          </Form>
         </Section>

    </Container>
  )
} */