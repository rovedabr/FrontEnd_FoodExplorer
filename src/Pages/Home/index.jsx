import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import { AiOutlineHeart } from "react-icons/ai"

import { Container } from "./styles"
import { Navbar } from "../../Components/NavBar"
import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Flavors } from "../../Components/Flavors"
import { Section } from "../../Components/Section"
import { Card } from "../../Components/Card"

import { Button } from "../../Components/Button"
import { ButtonAddRemove } from "../../Components/ButtonAddRemove"

import saladaRavanello from "../../assets/meals/saladaRavanello.png"
import spaguettiGambe from "../../assets/meals/spaguettiGambe.png"
import torradasParma from "../../assets/meals/TorradasParma.png"
import saladaMolla from "../../assets/meals/saladaMolla.png"

import prugnaPie from "../../assets/meals/prugnaPie.png"
import peachyPastrie from "../../assets/meals/peachyPastrie.png"
import macarrons from "../../assets/meals/macarrons.png"
import boloDamasco from "../../assets/meals/boloDamasco.png"

import expresso from "../../assets/meals/cafeExpresso.png"
import sucoMaracuja from "../../assets/meals/SucoMaracuja.png"
import teAutunno from "../../assets/meals/teAutunno.png"
import pomoBourboun from "../../assets/meals/pomoBourbon.png"

export function Home() {

  const admin = true

//  var swiper = new Swiper(".carroussel", {
//     slidesPerView: 5,
//     spaceBetween: 10,
//     loop: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

  return (
    <Container>
    <Navbar/>
    <Header/>
{/*--------------------------------------------------------*/}  
      <Flavors/>
{/*--Refeições --------------------------------------------*/} 
    <Section
      title="Refeições"
    >
      <div className="cards">
          {/* <Carrousel>
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
          </Carrousel>

          <Carrousel>
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
          </Carrousel>

          <Carrousel>
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
          </Carrousel>

          <Carrousel>
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
          </Carrousel>

          <Carrousel>
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
          </Carrousel> */}


     
        <Swiper
          breakpoints = {{
            480:  {
              width: 480,
              slidesPerView: 1.8,
              spaceBetween:1
            },
            768: {
              width: 768,
              slidesPerView: 2.5,
              spaceBetween:2
            },
            1280: {
              width: 1280,
              slidesPerView: 4.5,
              spaceBetween:2
            }
          }}
          // spaceBetween={0}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="Swiper"
        >
          <SwiperSlide>
   
            <Card
              icon={AiOutlineHeart}
            >
              <img src={saladaRavanello} alt="Imagem do prato de comida" />
              <h2>Salada Ravanello &gt;</h2>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
              <span>R$ 49,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
 
          </SwiperSlide>

{/*           <SwiperSlide>
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
          </SwiperSlide> */}

{/*           <SwiperSlide>
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
          </SwiperSlide> */}

{/*           <SwiperSlide>
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
          </SwiperSlide> */}

{/*           <SwiperSlide>
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
          </SwiperSlide> */}


        </Swiper>






      </div>
    </Section>
{/*--------------------------------------------------------*/}
{/*--Sobremesas--------------------------------------------*/} 
<Section
      title="Sobremesas"
    >
      <div className="cards">
{/*         <ContentCard>
              <input type="image" src={favoriteIcon}/>
            <Card>
              <img src={prugnaPie} alt="Imagem do prato de sobremesa" />
              <h2>Prugna Pie &gt;</h2>
              <p>Torta de ameixa com massa amanteigada, polvilho em açúcar.</p>
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
              <img src={peachyPastrie} alt="Imagem do prato de sobremesa" />
              <h2>Peachy pastrie &gt;</h2>
              <p>Delicioso folheado de pêssego com folhas de hortelã.</p>
              <span>R$ 32,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </ContentCard> */}

{/*           <ContentCard>
              <input type="image" src={favoriteIcon}/>
            <Card>
              <img src={macarrons} alt="Imagem do prato de sobremesa" />
              <h2>Macarons &gt;</h2>
              <p>Farinha de amêndoas, manteiga, claras e açúcar.</p>
              <span>R$ 79,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </ContentCard>
 */}
{/*           <ContentCard>
              <input type="image" src={favoriteIcon}/>
            <Card>
              <img src={boloDamasco} alt="Imagem do prato de sobremesa" />
              <h2>Bolo de Damasco &gt;</h2>
              <p>Damascos frescos em uma massa sem glúten. </p>
              <span>R$ 19,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </ContentCard> */}
      </div>
    </Section>
{/*--------------------------------------------------------*/}

{/*--Bebidas-----------------------------------------------*/} 
<Section
      title="Bebidas"
    >
      <div className="cards">
{/*         <ContentCard>
              <input type="image" src={favoriteIcon}/>
            <Card>
              <img src={expresso} alt="Imagem da bebida" />
              <h2>Expresso &gt;</h2>
              <p>Café cremoso feito na temperatura e pressões perfeitas.</p>
              <span>R$ 15,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </ContentCard> */}

{/*           <ContentCard>
              <input type="image" src={favoriteIcon}/>
            <Card>
              <img src={sucoMaracuja} alt="Imagem da bebida" />
              <h2>Suco de maracujá &gt;</h2>
              <p>Suco de maracujá gelado, cremoso, docinho..</p>
              <span>R$ 13,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </ContentCard> */}
{/* 
          <ContentCard>
              <input type="image" src={favoriteIcon}/>
            <Card>
              <img src={teAutunno} alt="Imagem da bebida" />
              <h2>Tè d'autunno  &gt;</h2>
              <p>Chá de anis, canela e limão. Sinta o outono italiano.</p>
              <span>R$ 19,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </ContentCard>
 */}
{/*           <ContentCard>
              <input type="image" src={favoriteIcon}/>
            <Card>
              <img src={pomoBourboun} alt="Imagem da bebida" />
              <h2>Pomo bourbon &gt;</h2>
              <p>Maçã, whisky, canela. On the rocks. </p>
              <span>R$ 79,97</span>
              <div className="buttons">
                <ButtonAddRemove/>
                <Button>incluir</Button>
              </div>
            </Card>
          </ContentCard> */}
      </div>
    </Section>
{/*--------------------------------------------------------*/}
      <Footer/> 
    </Container>
  )
}
