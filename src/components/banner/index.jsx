import React from 'react'
import { useState, useEffect } from "react";
import imgprogrammer from "../../assets/imgs/programmer.json"
import { NavBar } from "../navbar"
import Lottie from 'react-lottie'
import * as S from "./styles"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: imgprogrammer,
  }
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <>
      <NavBar/>
      <S.container>
        <S.divtxt>
          <S.txtp>Bem-Vindo ao meu Portifólio</S.txtp>
          <S.txtapres>{`Olá, sou Lucas, e sou`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></S.txtapres>
          <S.p>Este é o meu portifólio onde eu vou falar um pouco sobre mim e minha habilidades profissionais.</S.p>
        </S.divtxt>
        <S.divimg>
          <Lottie options={defaultOptions} height={250} width={500}/>
        </S.divimg>
      </S.container>
    </>
  )
}