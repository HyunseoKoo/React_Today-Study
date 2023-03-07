import { useDispatch, useSelector } from 'react-redux';
import NavigateButton from '../../../../components/NavigateButton';
import PostForm from '../atom/Post/Form';
import AllPosts from '../atom/Posts';

const ReduxQ1Page = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const onAddPostForm = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_POST',
      payload: {
        title: e.target.title.value,
        content: e.target.content.value,
      },
    });
  };
  console.log(posts);

  return (
    <div>
      <PostForm onSubmit={onAddPostForm} />
      <AllPosts />
      <NavigateButton isLastPage />
    </div>
  );
};
export default ReduxQ1Page;

// 1. useContext 사용하여 전역에 value로 mockData를 전달한다.
// 2. useReducer로 여러 비즈니스 로직 외부파일에 따로 빼어 작성한다.
// 3. 이것을 redux로 구현
// 4. AllPosts 컴포넌트에서 (components > atom 폴더의 Posts.js파일) 추가하기 구현?
//

/* 
        문제 3

        1) 이전에 주어졌던 토이프로젝트에 데이터입니다.
           이제는 우리는 여태까지의 문제풀이를 통해 state와 조금 익숙해지는 시간을 가졌습니다.
           그렇다면 이제 조금 더 복잡한 데이터를 다뤄보도록 하겠습니다.

        2) src/__mock__/mockPosts.js에 있는 데이터를 이용하여
           아래의 AllPosts 컴포넌트를 구현해주세요.
           구현 기능에는 게시글 추가, 게시글 삭제, 게시글 수정이 있습니다.

        3) 마찬가지로 각 게시글의 수정, 삭제 버튼를 통해
           게시글을 수정 및 삭제할 수 있습니다

        4) 단 이 상태의 변화는 모두 redux를 통해 관리합니다.

            redux 관련 설정은 admin/src/store.js에 구현해주시면 됩니다.
            단, 개발자모드, 릴리즈모드에 따라서 redux devtools와 logger를 사용할 수 있도록 해주세요.

            관련 비즈니스 로직은
            src/store/4_redux.js에 구현해주세요.
  */
