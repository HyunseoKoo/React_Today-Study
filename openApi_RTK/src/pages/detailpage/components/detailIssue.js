import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import { getIssues } from '../../../reducer/issue';

function DetailIssue(issues) {
  const { key } = useParams();
  const issueList = useSelector((state) => state.issue.issues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIssues());
  }, []);

  const issue = issueList.find((item) => item.id === key);
  console.log(issue);

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
  cursor: pointer;
`;

const S = {
  Wrapper,
};
