import * as TodoApi from './todo/todo.api' // 해당 경로에 있는 데이터를 TodoApi 라는 이름으로 객체 형태로 다 가져오겠다!


export const handler = [...Object.values(TodoApi)]