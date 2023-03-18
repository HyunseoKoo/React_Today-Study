function Sort({ filterOption, setFilterOption }) {
  console.log(typeof filterOption);
  return (
    <>
      <label>
        게시물 조회 조건:&nbsp;
        <select
          type="string"
          value={filterOption}
          onChange={({ target: { value } }) => setFilterOption(String(value))}
        >
          <option value="created">생성순</option>
          <option value="updated">업데이트순</option>
          <option value="comments">댓글순</option>
        </select>
      </label>
    </>
  );
}

export default Sort;
