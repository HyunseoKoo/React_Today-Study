import styled from 'styled-components';

function Issue() {
  return (
    <>
      <S.Wrapper>
        <div></div>
      </S.Wrapper>
    </>
  );
}

export default Issue;

const Wrapper = styled.div`
  border: 1px solid red;
  width: 650px;
  height: 350px;
  margin: 30px;
  padding: 2rem;
  font-size: 1.5rem;
  overflow: hidden;
  box-shadow: 0 2px 3px 2px gray;
  border-radius: 10px;
  cursor: pointer;
`;

const S = {
  Wrapper,
};
