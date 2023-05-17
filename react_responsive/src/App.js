import {useMediaQuery} from 'react-responsive'

function App() {
  const isDesktopOrMobile = useMediaQuery({query: '(max-width: 768px'});

  return (
    <div className="App">

      {isDesktopOrMobile !== true ?
        <div style={{border: "1px solid #dbdbdb", width: "1000px"}}>
          <h1>웹 화면</h1>
          <h2>줄어들기 전 입니다.</h2>
        </div> 
        :
        <div style={{border: "1px solid #d9d9d9", width: "500px"}}>
          <h1>모바일 화면</h1>
          <h2>줄어든 후 입니다.</h2>
        </div>  
      }

    </div>
  );
}

export default App;
