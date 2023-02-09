import styled from "styled-components";

export const component = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
    gap: 10px;
    padding: 0 15px;
`;

export const content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 475px;
  top: 60%;
  right: 50%;
  align-items: center;
`;

export const butsair = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: black;
  font-weight: 600;
  font-size: 16px;
`;

export const phuket = styled.div`
  align-items: center;
  justify-content: center;
  color: black;
  padding: 25px;
  width: 50%;
  margin-bottom: 30px;
`;

export const paragrafo = styled.p`
  text-align: center;
  font-weight: 700px;
  font-size: 20px;
  color: black;
`;

export const txt = styled.h1`
  font-size: 5rem;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default styled.div`
  .text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
