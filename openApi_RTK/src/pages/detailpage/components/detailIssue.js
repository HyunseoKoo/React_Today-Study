import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import { getIssues } from '../../../reducer/issue';

function DetailIssue() {
  const issueList = useSelector((state) => state.issue.issues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (issueList.length !== 0) return;
    dispatch(getIssues());
  }, []);

  const { key } = useParams();

  const issue = issueList.find((item) => {
    return item.id == key;
  });

  return (
    <>
      <S.Wrapper>
        <div>{issue.id}</div>
      </S.Wrapper>
    </>
  );
}

export default DetailIssue;

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
`;

const S = {
  Wrapper,
};
