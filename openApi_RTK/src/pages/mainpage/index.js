import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IssueList from './components/fetchIssues/issueList';

function MainPage() {
  // 필요한 변수 (1.한 페이지에 나올 이슈카드 수 2.페이지 수 3.현재 인덱스 4.)
  const [perPage, setPerPage] = useState(10);
  const [offset, setOffset] = useState(1);
  const [currentIndex, setCurrentIndex] = useState();

  // const [perPage, setPerPage] = useState(10);
  // const [offset, setOffset] = useState(1);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [pageOffset, setPageOffset] = useState();

  const issues = useSelector((state) => state.issue.issues);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getIssues({ perPage, offset }));
  //   const totalPageNum
  //   pageNum
  //   pageNum
  //   for (let i = 0; i < totalPageNum; i += 10) {
  //     pageArr.push();
  //   }
  //   setPageOffset(pageArr[currentIndex]);
  // }, [perPage, offset, currentIndex]);

  return (
    <>
      <div>Git Issue.net</div>
      <div>
        <IssueList />
      </div>
    </>
  );
}

export default MainPage;
