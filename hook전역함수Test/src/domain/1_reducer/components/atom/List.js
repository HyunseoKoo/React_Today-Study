// 변화되는 state인 menu 변수로 변경되는 menu배열로 map 돌리기
const ReducerQ1List = ({ menu, onDeleteMenuBtn }) => {
  return (
    <tbody>
      {menu.map((ingredient) => (
        <tr>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={() => onDeleteMenuBtn(ingredient.id)}>{ingredient.id}</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
