import React from 'react'
import youtube from '../../assets/imgs/youtube.svg'
import github from '../../assets/imgs/github.svg'
import * as S from "./styles"

export const Creditos = () => {
  return (
    <S.container>
      <br/>
      <S.tittle>Créditos</S.tittle>
      <S.p>Este portifólio inspirado no canal abaixo:</S.p>
        <S.creditos>
          <a href="https://www.youtube.com/channel/UCObrjoZZJSjznfCO5Vx9qUQ"><img src={youtube} alt="Icon" height={30} width={30}/></a>
          <a href="https://github.com/judygab"><img src={github} alt="Icon" height={30} width={30}/></a>
        </S.creditos>
      <S.txt>Copyright 2022. All Rights Reserved</S.txt>
      <br/>
    </S.container>
  )
}