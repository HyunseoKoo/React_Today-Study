import { createContext, useReducer } from 'react';

const initialList = [{ id: 1, name: '홍길동', nickname: '히히' }];

export const userContext = createContext();
export const dispatchContext = createContext();

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: Math.random() * 1000,
          name: action.payload.name,
          nickname: action.payload.nickname,
        },
      ];

    case 'STATUS_ADD':
      const newState = state.map((item) => {
        return { ...item, isEdit: true };
      });
      return newState;

    case 'RESET_LIST':
      return initialList;

    case 'SUBMIT_LIST':
      const isEditTrueList = state.filter((item) => item.isEdit == true);
      console.log('4번 submit', isEditTrueList);
      return isEditTrueList;

    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  // 이게 UserProvider 함수 밖이 아닌, 여기 존재하는 이유? App.js파일에서 하위 모든 컴포넌트에 value인 dispatch 전달할때 dispatch가 선언이 되어 있어야하니까..?!
  const [state, dispatch] = useReducer(userReducer, initialList);

  return (
    <userContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>{children}</dispatchContext.Provider>
    </userContext.Provider>
  );
};

export default UserProvider;
