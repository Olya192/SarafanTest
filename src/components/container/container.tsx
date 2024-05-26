import { Cards, CardInfo } from "../cardsInfo/Cards";
import * as S from "./Container.Styles";
import { useEffect, useRef, useState } from "react";
import { getCards, getLikedCards } from "../../Api";
import { updateCards } from "../../slice";
import { useAppDispatch, useAppSelector } from "../../hooks";


export const Container = () => {
  const [searchValue, setSearchValue] = useState("");
  const [notResult, setNotResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [likeCard, setLikeCard] = useState(false);

  const page = useRef(0);

  const dispatch = useAppDispatch();
  const cards = useAppSelector((store) => store.cards);
  const likes = useAppSelector((store) => store.like.like);
  const delCard = useAppSelector((store) => store.like.delId);

  const cardsList = () => {
    setLoading(true);
    getCards(searchValue, page.current).then((res) => {
      if (res.results.length === 0) {
        setNotResult(true);
        dispatch(updateCards(res));
        setLoading(false);
      } else {
        console.log(res);
        const filterCard = res.results.filter(
          (item: CardInfo) => !delCard.find((el) => el === item.id)
        );
        console.log("filterCard", filterCard);
        console.log("delCard", delCard);
        setNotResult(false);
        dispatch(updateCards({ ...res, results: filterCard }));
        setLoading(false);
      }
    });
  };

  const choicePage = (p: number) => {
    console.log(page);
    setLoading(true);
    page.current += p;
    cardsList();
  };

  const likesCards = () => {
    if (!likeCard) {
      getLikedCards(likes).then((res: Array<any>) => {
        console.log("like", searchValue);
        console.log("res", res);
        const results = res.map((card) => ({
          id: card.id,
          title: card.title,
          image: card.image,
          img: card.imageType,
        }));
        dispatch(updateCards({ results: results }));
        page.current = 0;
        setLikeCard(true);
      });
    } else {
      setLikeCard(false);
      cardsList();
    }
  };

  return (
    <>
      <S.Main>
        <S.Title>Поиск рецептов</S.Title>
        <S.MainTop>
          <S.MainInput
            data-testid="input"
            type="search"
            placeholder="Введите название продукта"
            name="search"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <S.InputButton data-testid="button" onClick={() => cardsList()}>
            Найти
          </S.InputButton>
        </S.MainTop>
        <S.LikeButton onClick={likesCards}>
          Все понравившиеся рецепты
        </S.LikeButton>
        <p style={{ display: loading ? "block" : "none" }}>Поиск...</p>
        <p style={{ visibility: notResult ? "visible" : "hidden" }}>
          {"Нет результатов "}
        </p>
      </S.Main>

      <S.MainCards>
        <S.CenterBlock>
          {cards.results?.map((card: CardInfo) => (
            <Cards data-testid="users" key={card.id} card={card} />
          ))}
        </S.CenterBlock>
        <div>
          {cards && (
            <S.PagBlock>
              <S.PagButton
                onClick={() => choicePage(10)}
                style={{
                  visibility:
                    cards.results.length !== 0 ||
                    page.current < cards.totalResults
                      ? "visible"
                      : "hidden",
                }}
              >
                {" "}
                Вперед
              </S.PagButton>
              <S.PagButton
                onClick={() => choicePage(-10)}
                style={{ visibility: page.current > 8 ? "visible" : "hidden" }}
              >
                Назад
              </S.PagButton>
            </S.PagBlock>
          )}
        </div>
      </S.MainCards>
    </>
  );
};
