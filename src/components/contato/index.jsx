import React from 'react'
import linkedin from "../../assets/imgs/linkedin.svg"
import github from "../../assets/imgs/github.svg"
import insta from "../../assets/imgs/insta.svg"
import contact from "../../assets/imgs/contact-animate.json"
import Lottie from 'react-lottie'
import * as S from "./styles"

export const Contato = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contact,
  }
  return (
    <S.container id="contato">
      <div>
      <Lottie options={defaultOptions} height={200} width={200}/>
      </div>
      <S.social>
        <S.txt>
          Entre em contato através das redes socias abaixo e também
          conheça meus repositórios no github:
        </S.txt>
        <S.divicons>
          <a href="https://www.linkedin.com/in/lucas-ariel-0ab3721ba/">
            <img src={linkedin} alt="Icon" height={30} width={30}/>
          </a>
          <a href="https://github.com/LUCASARIEL21">
            <img src={github} alt="Icon" height={30} width={30}/>
          </a>
          <a href="https://www.instagram.com/lucas_arielfran/?hl=el">
            <img src={insta} alt="Icon" height={30} width={30}/>
          </a>
        </S.divicons>
      </S.social>
    </S.container>
  )
}