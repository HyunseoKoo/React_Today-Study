import React, { useContext } from 'react';
import { ModalContext } from '../../../../../store/2_context';
import ContextQ1Detail2 from './Detail2';

const ContextQ1Detail = () => {
  const state = useContext(ModalContext);
  const { isModalState, setIsModalState } = state;
  let text = isModalState ? '숨기기' : '보이기'; // 이전에 state로 관리했었는데, 불필요한 state 사용한 경우로 기존 state 활용해서 text만 변경!
  // console.log(state); // {isModalOpen: false, setIsModalOpen: ƒ}

  const onChangeModalState = () => {
    setIsModalState(!isModalState); // setIsModalState((prev)=>!prev)
  };
  return (
    <>
      <h2>ContextQ1Detail</h2>
      <button onClick={onChangeModalState}>{text}</button>
      <ContextQ1Detail2 onChangeModalState={onChangeModalState} text={text} />
    </>
  );
};
export default ContextQ1Detail;
