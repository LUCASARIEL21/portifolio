import React from 'react'
import { useState} from "react"
import logoR from "../../assets/imgs/foto de perfil.png"
import * as S from './styles'
import { Info } from './Info'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [modalinfo, setModalinfo] = useState(false)

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return(
    <S.container>
        <S.logo>
          <img src={logoR} alt="image" height={70} />
        </S.logo>
        <S.lista>
          <ul>
            <a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} style={{color: "white"}}>Habilidades</a>
            <a href="#projetos" className={activeLink === 'projetos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projetos')} style={{margin: "10px", color: "white"}}>Projetos</a>
            <a href="#contato" className={activeLink === 'contato' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contato')} style={{color: "white"}}>Contato</a>
            <a href="#" 
            onClick={()=> {setModalinfo(true)}}
            style={{margin: "10px", color: "white"}}>Sobre</a>
            {modalinfo && (
            <Info modal={modalinfo} closeModal={setModalinfo} 
            disable={true} />)}
          </ul>
        </S.lista>
    </S.container>
  )
}