import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import venc from "../../assets/imgs/projeto derivado da OLX.png"
import relogio from "../../assets/imgs/projeto relogio.png"
import calculadora from "../../assets/imgs/projeto calculadora.png"
import viagens from "../../assets/imgs/projeto webpage travel.png"
import SysLog from "../../assets/imgs/projeto sistema login.png"
import * as S from "./styles"
import CarouselItem from 'react-bootstrap/esm/CarouselItem'

export const Projetos = () => {
  return (
    <S.container id="projetos">
      <br/>
      <S.divtxt>
        <S.tittle>Projetos</S.tittle>
        <S.p>
          Aqui estão todos os Projetos que eu fiz usando ReactJS, e todos podem ser conferidos no meu github.
        </S.p>
      </S.divtxt>
      <S.divpro>
        <Carousel fade>
          <Carousel.Item interval={2500}>
            <img 
            src={venc} 
            alt="Image one"
            height={300} 
            width={500} />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src={relogio}
            alt="Image two"
            height={300}
            width={500} />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src={calculadora} 
            alt="Image tree"
            height={300} 
            width={500} />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src={SysLog} 
            alt="Image four"
            height={300} 
            width={500} />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src={viagens} 
            alt="Image five"
            height={300} 
            width={500} />
          </Carousel.Item>               
        </Carousel>
      </S.divpro>
      <br/>
    </S.container>
  )
}