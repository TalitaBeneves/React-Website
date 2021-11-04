import styled from "styled-components";

export const AgentesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  @media screen and (max-width: 768px){
    height: 1100px;
  }

  @media screen and (max-width: 480px){
    height: 1300px;
  }
`;

export const AgentesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin-right: 340px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const AgentesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 800px;
  padding: 30px
  box-shadow: 0 9px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 2em #4e4e4e;
    cursor: pointer;
  }
`; 

export const AgentesIcon = styled.img`
  height: 500px;
  width: 350px;
  border-radius: 10px;
`;

export const AgentesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const AgentesH2 = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const AgentesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;