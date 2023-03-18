import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getIssues } from '../../../../reducer/issue';

function Pagination({
  issueList,
  limit,
  pages,
  page,
  setPage,
  pageNum,
  pageArr,
  currentIndex,
  setCurrentIndex,
  pageOffset,
  filterOption,
}) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getIssues({ filterOption }));
  //   // pageNum = new Array(pages).fill(null).map((item, indx) => (item = indx + 1));
  //   // for (let i = 0; i < pages; i += 10) {
  //   //   pageArr.push(pageNum.slice(i, i + 10));
  //   // }
  //   // setPageOffset(pageArr[currentIndex]);
  // }, [filterOption]);
  return (
    <S.Nav>
      {
        <>
          <S.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </S.Button>
          {Array(pages)
            .fill(null)
            .map((item, indx) => (
              <S.Button
                key={indx + 1}
                onClick={() => setPage(indx + 1)}
                aria-current={page === indx + 1 ? 'page' : null}
              >
                {indx + 1}
              </S.Button>
            ))}
          <S.Button onClick={() => setPage(page + 1)} disabled={page === pages}>
            &gt;
          </S.Button>
        </>
      }
    </S.Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;

const S = {
  Nav,
  Button,
};
