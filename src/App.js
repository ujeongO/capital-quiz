import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PinkButton } from "./components/PinkButton";
import { Quiz } from "./components/Quiz";
import { next } from "./store/modules/score";
import styled from "styled-components";
import { reset } from "./store/modules/score";

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  padding: 30px 0;
  margin: auto;
  text-align: center;
`;

const MainImg = styled.img`
  width: inherit;
`;

const Header = styled.h1`
  margin-bottom: 30px 0;
`;

const SubHeader = styled.h2`
  font-size: 1.2em;
  color: #8a8e90;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Score = styled.div`
  font-size: 4em;
  color: #ff8100;
`;

function App() {
  const score = useSelector((state) => state.score.score);
  const page = useSelector((state) => state.score.page);
  const quizs = useSelector((state) => state.score.quizs);
  const dispatch = useDispatch();

  return (
    <>
      {/* 인트로 페이지 */}
      {page === 0 && (
        <Main>
          <MainImg src="/city/main.jpg" alt="뉴욕 시티" />
          <Header>나라별 수도 퀴즈</Header>
          <SubHeader>진정한 수도 고인물도 100점을 맞기 어렵습니다!</SubHeader>
          <PinkButton
            text="테스트 시작!"
            clickEvent={() => {
              dispatch(next());
            }}
          />
        </Main>
      )}
      {/* 퀴즈 컴포넌트 */}
      {page > 0 && page <= quizs.length && (
        <Main>
          <Quiz />
        </Main>
      )}
      {/* 결과 페이지 */}
      {page > quizs.length && (
        <Main>
          <Header>당신의 수도 퀴즈 점수는?</Header>
          <Score>{score}점</Score>
          <SubHeader></SubHeader>
          <PinkButton
            text="다시 테스트하기"
            clickEvent={() => {
              dispatch(reset());
            }}
          />
        </Main>
      )}
    </>
  );
}

export default App;
