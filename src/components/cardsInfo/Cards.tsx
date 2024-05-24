import * as S from "./Cards.Styles";
import dislike from "./3643770-favorite-heart-like-likes-love-loved_113432.svg";
import like from "./heart_like_love_twitter_icon_127132.svg";
import delImg from "./biggarbagebin_121980.svg";
import { updateCards, likeCards, recipeCards, delCards } from "../../slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";
import { getRecipe } from "../../Api";
import { useNavigate } from "react-router-dom";

export type CardInfo = {
  img: string;
  title: string;
  image: string;
  id: number;
};

type CardProps = {
  card: CardInfo;
  key: number;
};

export const Cards = ({ card, key }: CardProps) => {
  const [favor, setfavor] = useState(false);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const cards = useAppSelector((store) => store.cards);
  const likes = useAppSelector((store) => store.like.like);

  useEffect(() => {
    for (let i = 0; i < likes.length; i++) {
      if (card.id === likes[i]) {
        setfavor(true);
        return;
      } else {
        setfavor(false);
      }
    }
  }, [likes]);

  const recipeCardGo = () => {
    getRecipe(card.id).then((response) => {
      dispatch(recipeCards(response));
      navigate("/about");
    });
  };

  const delCard = (e: React.MouseEvent<HTMLImageElement>): void => {
    e.stopPropagation();
    let redactCards = [...cards.results];
    for (let i = 0; i < redactCards.length; i++) {
      console.log("1");
      if (card.id === redactCards[i].id) {
        console.log("redactCards", redactCards);
        redactCards.splice(i, 1);
        console.log("redactCards2", redactCards);
        dispatch(updateCards({ results: redactCards }));
        dispatch(delCards({ delId: card.id }));
        return;
      }
    }
  };

  const favorCard = (a: boolean, e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    let favorite = [...likes];
    if (!a) {
      console.log("dislike");
      for (let i = 0; i < favorite.length; i++) {
        if (card.id === favorite[i]) {
          console.log("favoritet1", favorite);
          favorite.splice(i, 1);
          console.log("favoritet2", favorite);
          dispatch(likeCards({ like: favorite }));
          return;
        }
      }
    } else {
      console.log("like");
      favorite.push(card.id);
      console.log("favoritet", favorite);
      dispatch(likeCards({ like: favorite }));
    }
  };

  return (
    <S.CardInform onClick={recipeCardGo}>
      <S.CardImg src={card.image} />
      <p>{card.title}</p>
      <S.ActionBlock>
        <S.ActionImg
          src={`${like}`}
          style={{ display: favor ? "block" : "none" }}
          onClick={(e) => favorCard(false, e)}
        />
        <S.ActionImg
          src={`${dislike}`}
          style={{ display: !favor ? "block" : "none" }}
          onClick={(e) => favorCard(true, e)}
        />
        <S.ActionImg src={`${delImg}`} onClick={delCard} />
      </S.ActionBlock>
    </S.CardInform>
  );
};
