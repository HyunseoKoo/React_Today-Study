import useDetailInfo from 'hooks/queries/get-detail-Info';

import { useParams } from 'react-router-dom';
import DetailInfo from './components/detailInfo';

function DetailPage() {
	const { id } = useParams();
	const { data: detail } = useDetailInfo(id);

	// const { data: video } = useVideo(id);
	// video && console.log(video.data.results[0].key);

	return (
		<>
			{detail && (
				<DetailInfo
					id={id}
					title={detail.data.title}
					popularity={detail.data.popularity}
					release_date={detail.data.release_date}
					runtime={detail.data.runtime}
					vote_average={detail.data.vote_average}
					overview={detail.data.overview}
					genres={detail.data.genres[0].name}
					tagline={detail.data.tagline}
					poster_path={detail.data.poster_path}
					video={detail.data.video}
				/>
			)}
		</>
	);
}

export default DetailPage;
