import React from 'react'
import web from "../../assets/imgs/layout.svg"
import reactjs from "../../assets/imgs/reactjs.svg"
import html from "../../assets/imgs/html.svg"
import css from "../../assets/imgs/css.svg"
import js from "../../assets/imgs/js.svg"
import tech from "../../assets/imgs/computing.svg"
import sql from "../../assets/imgs/sql.svg"
import * as S from "./styles"

export const Skills = () =>{
  return (
    <S.container id="skills">
        <S.txt>SKILLS</S.txt>
        <S.paragrafo>
          Abaixo estarão as liguagens e tecnologias que eu tenho conhecimento.
        </S.paragrafo>
            <S.div1>
              <img src={web} alt='image' height={200} width={200}/>
              Web Designer
            </S.div1>
            <S.div2>
              <img src={html} alt='image' height={150} width={150} style={{marginRight: "60px"}}/>
              HTML
            </S.div2>
            <S.div3>
              <img src={css} alt='image' height={200} width={170} style={{marginRight: "60px"}}/>
              CSS
            </S.div3>
            <S.div4>
              <img src={js} alt='image' height={150} width={150} style={{marginRight: "10px"}}/>
              JavaScript
            </S.div4>
            <S.div5>
              <img src={reactjs} alt='image' height={200} width={200} style={{marginRight: "10px"}}/>
              Reactjs
            </S.div5>
            <S.div6>
              <img src={sql} alt='image' height={200} width={200} style={{marginRight: "40px"}}/>
              SQL
            </S.div6>
            <S.div7>
              <img src={tech} alt='image' height={150} width={150}/>
              Infórmatica
            </S.div7>
    </S.container>
  )
}