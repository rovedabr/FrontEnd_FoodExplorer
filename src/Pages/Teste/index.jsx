import { Container, ContentCard } from "./styles";
import { Card } from "../../Components/Card"
import { ButtonAddRemove } from "../../Components/ButtonAddRemove";
import { Button } from "../../Components/Button";
import favoriteIcon from "../../assets/Icons/Heart.svg"
import saladaRavanello from "../../assets/meals/salada_ravanello.png"

import React from "react";
import { ReactDOM } from "react";


import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination} from "swiper";
import 'swiper/css/navigation'


export function Teste() {
  return (
      <Container>
        <Swiper  
          className="swiper-cards" 
          pagination={true} 
          centeredSlides={true}
          spaceBetween={5}
          slidesPerView={4}
          navigation={true}
          onNavigationShow={true}
         
          
        >
        
        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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

        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
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
        </SwiperSlide>

      </Swiper>
      </Container>
  )
}