import { Outlet } from 'react-router-dom';
import BasicFooter from './Footer/footer';
import BasicHeader from './Header/header';
import ScrollUpBtn from './ScrollUp/scrollup';

const LayOut = () => {
	return (
		<>
			<BasicHeader />
			<Outlet />
			<ScrollUpBtn />
			<BasicFooter />
		</>
	);
};

export default LayOut;
