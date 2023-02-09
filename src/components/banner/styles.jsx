import styled from 'styled-components'
import background from "../../assets/imgs/banner.jpg"

export const container = styled.div`
  height: 450px;
  max-width: 100%;
  display: flex;
  align-items: center;
  background-image: url(${background});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const divtxt = styled.div`
  display: column;
  text-align: center;
  margin-top: 250px;
  height: 100%;
  max-width: 60%;
`;

export const txtp = styled.h1`
 margin-bottom: 5px;
 color: whitesmoke;
 margin: 10px;
`;

export const txtapres = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  color: whitesmoke;
  margin: 10px;
`;

export const p = styled.p`
  font-size: 20px;
  color: whitesmoke;
  margin: 10px;
`;

export const divimg = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 40%;
`;
