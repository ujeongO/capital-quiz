// 퀴즈를 풀면 정답 > 점수 획득
// 오답 > 점수 획득X

// 상태: 사용자의 최종 점수(score),
// 액션: 정답인지 아닌지 판별, 정답 => 점수++;
//

// ii)
//  상태: 사용자가 응답한 정답 목록, [0, 2, 1]
//  액션: 정답 목록에 하나하나 추가

// 서브 리듀서 만들기
//  ->액션 타입(문자열)
const CHECK_CORRECT = "score/CHECK_CORRECT";
const NEXT_PAGE = "score/NEXT_PAGE";
const RESET = "score/RESET";

// 액션 생성 함수
export function check({ isCorrect }) {
  return {
    type: CHECK_CORRECT,
    payload: { isCorrect },
  };
}

export function next() {
  return {
    type: NEXT_PAGE,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

// 초기 상태(객체)
const initState = {
  score: 0,
  page: 0, // 0: 인트로 페이지, 1 ~ quizs.length: 퀴즈 페이지, n+1: 마지막 페이지(결과)
  // 퀴즈 목록
  quizs: [
    {
      q: "대한민국의 수도는?",
      img: "/city/korea.jpg",
      a: [
        {
          text: "서울",
          isCorrect: true,
        },
        {
          text: "인천",
          isCorrect: false,
        },
        {
          text: "부산",
          isCorrect: false,
        },
      ],
    },
    {
      q: "미국의 수도는?",
      img: "/city/us.jpg",
      a: [
        {
          text: "샌프란시스코",
          isCorrect: false,
        },
        {
          text: "워싱턴 D.C",
          isCorrect: true,
        },
        {
          text: "뉴욕",
          isCorrect: false,
        },
      ],
    },
    {
      q: "영국의 수도는?",
      img: "/city/london.jpg",
      a: [
        {
          text: "런던",
          isCorrect: true,
        },
        {
          text: "맨체스터",
          isCorrect: false,
        },
        {
          text: "노팅엄",
          isCorrect: false,
        },
      ],
    },
  ],
};

// 리듀서
export default function score(state = initState, action) {
  // console.log(action);
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        ...state,
        score:
          action.payload.isCorrect === true ? state.score + 10 : state.score,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        score: 0,
        page: 0,
      };
    default:
      return state;
  }
}
