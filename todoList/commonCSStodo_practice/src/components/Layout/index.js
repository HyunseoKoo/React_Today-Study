import { Outlet } from "react-router-dom";
import BasicFooter from "./Footer/Footer";
import BasicHeader from "./Header/Header";


function Layout() {
    return (
        <>
            <BasicHeader />
            <Outlet />  
            <BasicFooter />
        </>
    );
}

export default Layout;

/*
Outlet ? 자식요소가 있는 라우트 뒤에 현재 주소 path에 맞는 element를 보여주고 컴포넌트로 가져오는 역할을 하는 함수
*/