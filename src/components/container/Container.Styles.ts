import { styled } from "styled-components";

export const Main = styled.div`
margin-top:20px;
  padding-left: calc(50% - 300px);
  padding-right: calc(50% - 300px);
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
margin-bottom:10px
`;

export const MainTop = styled.div`
padding:0;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 34px;
`;

export const MainInput = styled.input`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
`;

export const InputButton = styled.button`
  margin-left: 10px;
  min-width: 158px;
  height: 50px;
  background-color: #29ab87;
  border: 1px solid #29ab87;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  &:hover {
    background-color: #008B8B;
    color: #000;
  }
`;


export const CenterBlock = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

`;


export const MainCards = styled.div`
  padding-left: calc(50% - 500px);
  padding-right: calc(50% - 500px);

`;


export const MainNotFound = styled.p`

`;

export const PagBlock = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
`;

export const PagButton = styled.button`
  width: 80px;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 6px;
  font-size: 12px;
  line-height: 24px;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const LikeButton = styled.button`
  margin-left: 10px;
  min-width: 158px;
  height: 50px;
  background-color: #29ab87;
  border: 1px solid #29ab87;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  &:hover {
    background-color: #008B8B;
    color: #000;
  }
`;
