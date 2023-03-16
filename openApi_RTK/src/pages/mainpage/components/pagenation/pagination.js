import { useState } from 'react';

function Pagenation() {
  const [page, setPage] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <>
      <div>페이지네이션</div>
    </>
  );
}

export default Pagenation;
