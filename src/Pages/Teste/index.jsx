import { Container } from "./styles";
import { Card } from "../../Components/Card"
import { ButtonAddRemove } from "../../Components/ButtonAddRemove";
import { Button } from "../../Components/Button";
import { Carrousel } from "../../Components/ Carroussel";

import saladaRavanello from "../../assets/meals/saladaRavanello.png"
import { AiOutlineHeart } from "react-icons/ai"

import React from "react";
import { ReactDOM } from "react";

export function Teste() {
  return (
      <Container>
        <Carrousel>
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
        </Carrousel>



    




      </Container>
  )
}