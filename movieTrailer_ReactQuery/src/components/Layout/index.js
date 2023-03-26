import { Outlet } from 'react-router-dom';
import BasicFooter from './Footer/footer';
import BasicHeader from './Header/header';

const LayOut = () => {
	return (
		<>
			<BasicHeader />
			<Outlet />
			<BasicFooter />
		</>
	);
};

export default LayOut;
