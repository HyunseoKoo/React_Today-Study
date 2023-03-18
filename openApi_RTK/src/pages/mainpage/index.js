import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getIssues } from '../../reducer/issue';
import IssueList from './components/fetchIssues/issueList';
import Pagination from './components/pagenation/pagenation';
import Sort from './components/sort/sort';

const totalIssues = 200;
let pageArr = []; // 10개 단위의 페이지 배열을 요소로 가진 배열 ex)[[1,..,10], [11,..,20]]
let pageNum; // 페이지들을 요소로 같는 배열. ex)[1,...,20] or [1,..,4]

function MainPage() {
  const issueList = useSelector((state) => state.issue.issues); // issueList라는 게시물 목록 상태를 rtk로 관리하기 위함
  const [limit, setLimit] = useState(10); // 페이지 당 보여지는 게시글 목록
  const pages = Math.ceil(totalIssues / limit); // 필요한 페이지 수
  const [page, setPage] = useState(1); // (현재) 페이지 번호
  const offset = (page - 1) * limit; // page번째 페이지의 첫 게시물 위치
  const [currentIndex, setCurrentIndex] = useState(0); // 페이지배열 중 현재 위치한 번호
  const [filterOption, setFilterOption] = useState('created');

  // API를 비동기로 요청하고 응답받은 게시물 데이터를 issueList 상태에 저장
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIssues({ limit, page, filterOption }));
    // pageNum = new Array(pages).fill(null).map((item, indx) => (item = indx + 1));
    // for (let i = 0; i < pages; i += 10) {
    //   pageArr.push(pageNum.slice(i, i + 10));
    // }
    // setPageOffset(pageArr[currentIndex]);
  }, [limit, page, filterOption]);

  return (
    <S.Wrapper>
      <div>Git Issue.net</div>
      <Sort filterOption={filterOption} setFilterOption={setFilterOption} />
      <IssueList
        issueList={issueList}
        page={page}
        offset={offset}
        limit={limit}
        setLimit={setLimit}
      />
      <Pagination
        issueList={issueList}
        limit={limit}
        pages={pages}
        page={page}
        setPage={setPage}
        pageNum={pageNum}
        pageArr={pageArr}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        filterOption={filterOption}
      />
    </S.Wrapper>
  );
}

export default MainPage;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const S = {
  Wrapper,
};
