import { styled } from "styled-components";


export const Card = styled.div`
margin-top: 20px;
  padding-left: calc(50% - 500px);
  padding-right: calc(50% - 500px);
  display: flex;
    flex-direction: column;
  `;



export const Main = styled.div`
margin-top: 40px;
margin-bottom: 40px;
    display: flex;
    justify-content: center;

`;

export const MainIngrid = styled.div`
    display: flex;
    flex-direction: column;
margin-top:40px;
gap: 10px;
`;

export const IngridList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px;
`;

export const ActionImg = styled.img`
  width: 50px;
  height: 50px;
`;


export const Ingridients = styled.p`
 border: 1px solid #000;
  border-radius: 5px;
padding:5px
`;


