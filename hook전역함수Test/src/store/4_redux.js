import { MockPosts } from '../__mock__/mockPosts';
import shortId from 'shortid';
import { faker } from '@faker-js/faker';

const initialPosts = MockPosts(10);

const postsReducer = (state = initialPosts, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        {
          id: shortId.generate(),
          title: action.payload.title, // from dispatch
          content: action.payload.content, // from dispatch
          User: {
            id: shortId.generate(),
            nickName: faker.name.firstName(),
            profileImg: faker.image.image(),
          },
          Comments: [],
          createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
          myPost: true, // from dispatch
        },
        ...state,
      ];

    case 'EDIT_POST': // reducer로 관리하기 오히려 더 어렵다고 생각

    case 'DELETE_POST':
      const filterPost = state.filter((item) => {
        return item.id !== action.payload.id;
      });
      return filterPost;

    // 코멘트 추가
    case 'ADD_COMMENT':
      const newPost = [...state];
      const selectedPost = newPost.find((item) => item.id === action.payload.id);
      const commentsOfselectedPost = selectedPost.Comments;
      commentsOfselectedPost.unshift({
        id: shortId.generate(),
        content: action.payload.content, // from dispatch
        User: {
          id: shortId.generate(),
          nickName: action.payload.name, // from dispatch
          profileImg: faker.image.image(),
        },

        myComment: true,
        createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
      });
      return newPost;

    case 'DELETE_COMMENT':
      console.log('test');
      // console.log(action.payload.commentId); // o
      // console.log(action.payload.id); // undefined
      const newPost2 = [...state]; // o
      const selectedPost2 = newPost2.find((item) => item.id === action.payload.id); // o
      // console.log(selectedPost2); // o
      selectedPost2.Comments = selectedPost2.Comments.filter(
        (item) => item.id !== action.payload.commentId
      );
      // [...]
      return newPost2;

    default:
      return state;
  }
};
export default postsReducer;
