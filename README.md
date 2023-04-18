# React_Today's Study

일일 공부내용 기록

##

[23.03.07]
리액트 전역함수(reducer/context/redux)를 테스트 예제 풀이를 통해 공부.
userReducer는 비즈니스 로직(상태 업데이트 로직)을 컴포넌트에서 분리하여 외부 파일에 작성하고, 다른 파일 어디에서든 action을 실행하면 state를 관리할 수 있으므로 재사용성/가독성을 높이고 유지보수를 편리하게 하고 싶을 때 사용한다. [특정 state가 바깥에 있기 때문에, 로직을 변경하기 위해서 이 파일 저 파일 돌아다닐 필요가 없게 되어 편리하다]
useContext는 state를 전역으로 사용할 수 있게 만드는 것으로, state를 전역으로 써야하는 이유는 state를 props로 전달하는 depth가 깊어질수록 데이터 추적이 어려워져서 전역으로 관리하기 위함이다. [reducer는 비즈니스 로직을 전역화 한거라면, context는 state를 전역화 한 것!]
redux는 reducer와 context를 한번에 관리할 수 있게 해주는 라이브러리로, 어디서든 reducer쓰려고 만든 rootReducer를 context로 전달해서 props로 복잡하게 받지 않고 필요한 컴포넌트에서 간편하게 쓴다 [전역상태관리+비즈니스로직 을따로빼서 dispatch를 활용해서 상태관리]
##
[23.03.09]
무한 스크롤링 구현을 위한 Intersection Observer 공부.
Intersection Observer 사용이유? 타겟 요소가 화면에 노출되었는지 여부를 구독하기 위함이다.
→ 브라우저 뷰포트와 설정한 요소의 교차점을 관찰하며, 요소가 뷰포트에 포함되는지 포함되지 않는지, 사용자 화면에 보이는 요소인지 아닌지 구별하는 기능을 제공한다.
##
[23.03.11]
리액트 axios 공부 시작
로그인 시 프론트엔드가 해야 할 일(다음페이지 이동/보안/에러 핸들)
1. 로그인 정보 확인을 위한 로그인 유무를 파악
2. 로그인 유무를 가지고 접근 가능한 페이지와 불가한 페이지 분리 [로그인 접근권한]
[access_token 인증방식]
* 로그인한 사용자의 userIDX가 노출되면 안됨 (보안에 치명적)
* 프로트에서 로그인 시 userIDX와 무관한 고유 키 값을 백엔드에게 전달하면, 백엔드는 키 값을 해석해서 userIDX를 확인함 [session방법]
* session보다는 access_token을 주로 사용함 
* 사용자가 로그인을 하면 백엔드가 access_token을 줌. 프론트엔드에서 로그인 유무를 구별 해야 할 때마다 이 access_token을 전달하여 백엔드가 사용자의 고유 정보를 확인하게 함.
* jwt : 가장 잘 쓰이는 access_token 방식
* access_token도 노출될 위험이 있어 30분에 한번씩 재발급됨. (refresh_token : 1~2주 유지)
##
[23.03.12]
MSW (Mocking Service Worker) 개념 공부.
MSW: 백엔드가 없어도 프론트 내에서 http 요청을 통한 데이터 교환을 할수 있게 한다.
개발/테스트의 효율성을 높이고 코드의 안정성과 견고성을 높이기 위해 사용한다.
mocking api로 백엔드 통신하는 앱 구현해볼 예정 (todoList 형태)
##
[23.04.18]
MSW 공식문서 정독.
1. msw의 장점:
 * 서비스 로직을 직접 수정할 필요가 없다.
 * 네이티브 라이브러를 바꿔치기 하지 않아도 된다.
 * 직접 mocking server를 구현할 필요가 없다.
 * application level이 아닌, network level에서 요청을 가로채 응답을 보내기 때문에 모든 종류의 네트워크 라이브러리(axios, react-query등) 및 네이티브 fetch 메서드와 함께 사용할 수 있다.
2. service worker란?
 웹 응용 프로그램, 브라우저, 그리고 (사용 가능한 경우) 네트워크 사이의 프록시 서버 역할을 함.
 여러 역할이 있지만, '네트워크 요청을 가로채서 네트워크 사용 가능 여부에 따라 적절한 행동을 취하고 서버의 자산을 업데이트'.
 browser가 background에서 실행하는 script로, application의 ui 블록없이 연산을 처리 가능.
 (참고로, service worker는 브라우저 한경에서만 실행 가능)
3. msw 작동 방식
 * msw 라이브러리를 설치하면 브라우저에 service worker를 등록
 * 브라우저에서 이루어지는 실제 네트워크 요청들을 (ex. fetch 이벤트로 보낸 네트워크 요청 등) service worker가 가로챔
 * service worker는 가로챈 요청을 복사해 실제 서버가 아닌 [client side에 있는 msw 라이브러리]로 보낸 다음, 등록된 handler를 통해 mocked response(모의 응답)을 제공 받음
 * 마지막으로, 제공받은 mocked response를 브라우저에게 그대로 전달
이러한 과정을 통해, 실제 서버와 직접적인 연결없이도 보내는 요청에 대한 응답을 mocking 할 수 있게 됨
따라서, 백엔드 api가 준비되기 전에도 msw로 가상 api를 등록하고 프론트에서 테스트가 가능한 것!
