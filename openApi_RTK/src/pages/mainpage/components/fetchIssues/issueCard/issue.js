import styled from 'styled-components';

function Issue({ issues }) {
  const { number, comments, title, created_at, body } = issues;
  return (
    <>
      <S.Wrapper>
        <div>
          <div>{number}</div>
          <div>{title}</div>
          <div>{comments}</div>
        </div>
        <div>{body}</div>
        <div>{created_at}</div>
      </S.Wrapper>
    </>
  );
}

export default Issue;

const Wrapper = styled.div`
  border: 1px solid gray;
  width: 650px;
  height: 350px;
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
