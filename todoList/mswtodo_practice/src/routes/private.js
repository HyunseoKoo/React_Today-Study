import { useAuth } from 'context/auth';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import TokenService from 'repository/TokenService';

function PrivateRoute() {
  const access_token = TokenService.getToken();
  const auth = useAuth();
  const navigate = useNavigate();
  const { pathName } = useLocation();
  /*
  react router dom
  navigate를 통해 전달된 state객체를 전달받을 수 있고
  현재 주소의 url을 가지고 올 수 있음
  {
    ...
    pathName: "/todo",
    state: {
        from: pathName
    }
  }
  */

  useEffect(() => {
    if (!auth.accessToken) {
      navigate('/', {
        state: {
          from: pathName,
        },
        /* navigate로 이동될 페이지에 데이터 전달
          params로 전달하는 방법도 있으나 그럴 필요가 없는 데이터 (사용자가 주소를 확인하지 않아도 되는 경우)

         상품번호와 같은 데이터는 필요 해당 데이터로 백엔드에 요청하고 결과값이 달라지니까
         사용자가 눈으로 확인할 수 있음 (이런 경우 param으로 관리.)*/
      });
    }
  }, [auth]);

  return access_token ? <Outlet /> : <Navigate to={'/'} />;
}
export default PrivateRoute;
