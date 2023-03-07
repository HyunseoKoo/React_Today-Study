# React_Today's Study
일일 공부내용 기록
##
[23.03.07]
#
리액트 전역함수(reducer/context/redux)를 테스트 예제 풀이를 통해 공부.
userReducer는 비즈니스 로직(상태 업데이트 로직)을 컴포넌트에서 분리하여 외부 파일에 작성하고, 다른 파일 어디에서든 action을 실행하면 state를 관리할 수 있으므로 재사용성/가독성을 높이고 유지보수를 편리하게 하고 싶을 때 사용한다. [특정 state가 바깥에 있기 때문에, 로직을 변경하기 위해서 이 파일 저 파일 돌아다닐 필요가 없게 되어 편리하다]
useContext는 state를 전역으로 사용할 수 있게 만드는 것으로, state를 전역으로 써야하는 이유는 state를 props로 전달하는 depth가 깊어질수록 데이터 추적이 어려워져서 전역으로 관리하기 위함이다. [reducer는 비즈니스 로직을 전역화 한거라면, context는 state를 전역화 한 것!
redux는 reducer와 context를 한번에 관리할 수 있게 해주는 라이브러리로, 어디서든 reducer쓰려고 만든 rootReducer를 context로 전달해서 props로 복잡하게 받지 않고 필요한 컴포넌트에서 간편하게 쓴다 [전역상태관리+비즈니스로직 을따로빼서 dispatch를 활용해서 상태관리]
