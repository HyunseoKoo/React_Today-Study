import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getIssues } from '../../../../reducer/issue';
import Issue from './components/issue';

function IssueList() {
  const issueList = useSelector((state) => state.issue.issues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIssues());
  }, []);

  return (
    <S.Wrapper>
      {issueList &&
        issueList.map((issue) => {
          return (
            <Link to={`/issue/${issue.id}`}>
              <Issue issues={issue} />
            </Link>
          );
        })}
    </S.Wrapper>
  );
}

export default IssueList;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  /* height: 100%; */
  overflow: auto;
  margin: 0 auto;
`;

const S = {
  Wrapper,
};
