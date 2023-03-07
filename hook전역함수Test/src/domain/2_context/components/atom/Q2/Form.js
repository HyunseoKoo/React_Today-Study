import ContextQ2Form2 from './Form2';

const ContextQ2Form = ({ onAddUser, onStatusAdd }) => {
  // const name = e.target.name.name.value;
  // const nickname = e.target.name.nickname.value;
  return (
    <form onSubmit={onAddUser}>
      <h1>Q2Form</h1>
      <input name="name" placeholder="name" />
      <input name="nickname" placeholder="nick-name" />
      <button>추가</button>
      <ContextQ2Form2 onStatusAdd={onStatusAdd} />
    </form>
  );
};
export default ContextQ2Form;
