import { useEffect, useState } from "react";
import { getRecipe } from "../../Api";
import { useAppSelector } from "../../hooks";
import * as S from "./RecipeCard.Styles";
import back from "./1486348529-back-backwards-repeat-arrows-arrow_80455.svg";
import { useNavigate } from "react-router-dom";

type RecipeCardInfo = {
  name: string;
};

export const RecipeCard = () => {
  const recipes = useAppSelector((store) => store.recipe.recipe);
  const navigate = useNavigate();

  console.log("recipe", recipes.extendedIngredients);

  const actionBack = () => {navigate('/')};

  return (
    <S.Card>
      <S.ActionImg src={`${back}`} onClick={actionBack}/>
      <S.Main>
        <img alt="" src={`${recipes.image}`} />
        <S.MainIngrid>
          <h1>{recipes.title}</h1>
          <h2>Ингридиенты</h2>
          <S.IngridList>
            {recipes.extendedIngredients?.map(
              (card: RecipeCardInfo, index: number) => (
                <S.Ingridients key={index}> {card.name}</S.Ingridients>
              )
            )}
          </S.IngridList>
        </S.MainIngrid>
      </S.Main>
      <div>
        <h2>Приготовление</h2>
        <p>{recipes.instructions}</p>
      </div>
    </S.Card>
  );
};
