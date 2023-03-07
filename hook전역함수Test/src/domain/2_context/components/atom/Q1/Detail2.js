import { useContext } from 'react';
import { ModalContext } from '../../../../../store/2_context';

const ContextQ1Detail2 = ({ onChangeModalState, text }) => {
  const { isModalOpen } = useContext(ModalContext);
  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={onChangeModalState}>{text}</button>
    </>
  );
};
export default ContextQ1Detail2;
