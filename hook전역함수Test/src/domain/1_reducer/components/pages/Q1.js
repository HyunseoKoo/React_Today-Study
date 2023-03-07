import React, { useReducer, useState } from 'react';
import NavigateButton from '../../../../components/NavigateButton';
import { addMenuReducer } from '../../../../store/1_reducer';
import Q1Form from '../atom/Form';
import ReducerQ1List from '../atom/List';

// 3. initialState 정의해주기
const initialState = [
  { id: 1, name: '피자 도우', price: 1000 },
  { id: 2, name: '토마토 소스', price: 500 },
  { id: 3, name: '치즈', price: 1000 },
  { id: 4, name: '피망', price: 500 },
  { id: 5, name: '양파', price: 500 },
];

const ReducerQ1Page = () => {
  /* 
      문제 1)
      로직 분리하기
    
      재료 추가 로직 분리하기

      1) 재료 추가 로직 작성하기
      2) 재료 삭제 로직 작성하기

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요
    */

  // 2번 initialState를 선언해줬기 때문에 삭제해도 됨.
  // const [ingredients, setIngredients] = useState([
  //   { id: 1, name: '피자 도우', price: 1000 },
  //   { id: 2, name: '토마토 소스', price: 500 },
  //   { id: 3, name: '치즈', price: 1000 },
  //   { id: 4, name: '피망', price: 500 },
  //   { id: 5, name: '양파', price: 500 },
  // ]);

  // 2. useReducer 함수 만들기
  const [menu, dispatch] = useReducer(addMenuReducer, initialState);

  // 4. [추가] 이벤트 작성하기 (Form 태그, onsubmit 고려)

  const onAddMenuForm = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_MENU',
      payload: {
        name: e.target.name.value,
        price: e.target.price.value,
      },
    });
  };

  const onDeleteMenuBtn = (id) => {
    // const nodes = [...e.target.parentElement.parentElement.parentElement.children]; // (5) [tr, tr, tr, tr, tr]
    // const index = nodes.indexOf(e.target.parentElement.parentElement);
    // console.log(index);
    dispatch({
      type: 'DELETE_MENU',
      payload: {
        id,
      },
    });
  };

  return (
    <>
      <h2>문제 1</h2>
      <table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        {/* <ReducerQ1List ingredients={ingredients} /> */}
        {/* 2번 menu값 props로 전달해주기 */}
        <ReducerQ1List menu={menu} onDeleteMenuBtn={onDeleteMenuBtn} />
      </table>
      <Q1Form onSubmit={onAddMenuForm} />
      {/* <Q1Form onSubmit={'onSubmit'} /> */}
      <NavigateButton isFistPage to={'/2_context/q1'} />
    </>
  );
};
export default ReducerQ1Page;
