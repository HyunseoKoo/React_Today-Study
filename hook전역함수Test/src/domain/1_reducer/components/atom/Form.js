import { useReducer } from 'react';
import { addMenuReducer } from '../../../../store/1_reducer';

const Q1Form = ({ onSubmit }) => {
  // 여기다가 onSubmit 이벤트를 주게되면 dispatch를 선언하기 위해 const [menu, dispatch] = useReducer(addMenuReducer, initialState); 를 선언해야함. 그러면 initialState를 또 선언해야하기 때문에 안됨??
  // const onAddMenuForm = (e) => {
  //   dispatch({
  //     type: 'INGREDIENT',
  //     name: e.target[0].value,
  //     price: e.target[1].value,
  //   });
  // };

  return (
    <form onSubmit={onSubmit}>
      {/* <form onSubmit={onAddMenuForm}> */}
      <label>
        <input type="text" name="name" placeholder="재료" />
      </label>
      <label>
        <input type="number" name="price" placeholder="가격" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;
