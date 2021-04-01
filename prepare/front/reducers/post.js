export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://www.daangn.com/images/meta/home/daangn.png',
        },
        {
          src:
            'https://user-images.githubusercontent.com/1305982/50403650-44804500-07db-11e9-98aa-cfee9a9aec69.png',
        },
        {
          src:
            'https://platum.kr/wp-content/uploads/2020/09/daangn_mau1000.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

// action type(action 이름)을 상수로 빼주면 switch문에서 재활용 가능
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPostRequestAction = (data) => {
  return {
    type: ADD_POST_REQUEST,
    data,
  };
};

export const addCommentRequestAction = (data) => {
  return {
    type: ADD_COMMENT_REQUEST,
    data,
  };
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        // 앞에 추가해야 제일 위에 추가됨
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
