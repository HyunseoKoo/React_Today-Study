import { Outlet } from 'react-router-dom';
import BasicFooter from './Footer/footer';
import BasicHeader from './Header/header';

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
