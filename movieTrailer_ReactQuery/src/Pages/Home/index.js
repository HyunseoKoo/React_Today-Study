import MainTrailer from './components/MainTrailer/maintrailer';
import NowPlaying from './components/NowPlaying/nowplaying';
import TopRated from './components/TopRated/toprated';
import UpComing from './components/UpComing/upcoming';

const HomePage = () => {
	return (
		<>
			<MainTrailer />
			<NowPlaying />
			<TopRated />
			<UpComing />
		</>
	);
};

export default HomePage;
