export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://www.daangn.com/images/meta/home/daangn.png",
        },
        {
          src:
            "https://lh3.googleusercontent.com/proxy/gzU3L7TM9yXgYHr6MsSWxR3l-l1_R4UTK-bEh7yc1nrfLAUT0pajJyUF5UaqWx0dxTVUKVnwN_JZ8XEkXARl8vFPPXsoUYy3AtfRFO-zBVl5r6pYehydc2l6x9ytAovZtb_GYc3tGUOi4dgwfB1MZACeMJ394zPg0o7onCXrxHF4WnKaKyhYw0kKTNeX89ZYsuc9veMKXMd05LKUijFhPkKetCFEfssrHlAWINRVVWvLb5L1V0RdFrJa8hWvaEYFggQspE-rSpXB4sPxQIFlM9I7Fe-E8_wLT5XAL9IJa2rLT_RWtC_Zn-O52MukEPfTefTR4v8NT4bMgmr9",
        },
        {
          src:
            "https://platum.kr/wp-content/uploads/2020/09/daangn_mau1000.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와 개정판이 나왔군요~",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "얼른 사고싶어요~",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

// action type(action 이름)을 상수로 빼주면 switch문에서 재활용 가능
const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        // 앞에 추가해야 제일 위에 추가됨
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
