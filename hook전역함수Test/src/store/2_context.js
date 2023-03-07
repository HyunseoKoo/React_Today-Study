// 1. createContext 함수로 전역 저장소 만들기
import { createContext, useContext, useState } from 'react';
const initialState = false;
export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalState, setIsModalState] = useState(initialState);
  return (
    <ModalContext.Provider value={{ isModalState, setIsModalState }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
