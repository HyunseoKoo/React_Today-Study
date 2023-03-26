
import useVideo from 'hooks/queries/get-video';
import styled from 'styled-components';

function DetailInfo({
	id,
	title,
	popularity,
	release_date,
	runtime,
	vote_average,
	overview,
	genres,
	tagline,
	poster_path,
	video,
}) {

	const {data: videoInfo} = useVideo(id);
	videoInfo && console.log(videoInfo.data.results.length) //  일반? Array(3) , 아바타3? []
	videoInfo && console.log(videoInfo.data.results[0].key)
	// videoInfo && console.log(videoKey);
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

	// const VIDEO_BASE_URL = `https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`
	const integer = vote_average.toFixed(2);
	return (
		<S.DetailWrap>
			{/* {videoInfo && <S.Iframe width="100%" height="100%" src={VIDEO_BASE_URL} />} */}
			<S.Contents>
				<S.DetailTopWrap>
					<S.PostImg src={IMG_BASE_URL + poster_path} />
					<S.TitleInfoWrap>
						<S.TitleInfoWrapTop>
							<S.Title>{title}</S.Title>
							<S.TitleInfoUl>
								<S.TitleInfoLi>
									<S.InnerContent>Movie ratings : </S.InnerContent>
									<S.InnerContent2>⭐{integer}</S.InnerContent2>
								</S.TitleInfoLi>
								<S.TitleInfoLi>
									<S.InnerContent>
										The cumulative number of spectators :
									</S.InnerContent>
								<S.InnerContent2>{popularity} million</S.InnerContent2>
								</S.TitleInfoLi>
							</S.TitleInfoUl>
						</S.TitleInfoWrapTop>
						<S.TitleInfoWrapTop>
							<S.TitleInfoUl>
								<S.TitleInfoLi>
									<S.InnerContent>Genres : </S.InnerContent>
									<S.InnerContent2>{genres}</S.InnerContent2>
								</S.TitleInfoLi>
								<S.TitleInfoLi>
									<S.InnerContent>Release date : </S.InnerContent>
									<S.InnerContent2>{release_date}</S.InnerContent2>
								</S.TitleInfoLi>
								<S.TitleInfoLi>
									<S.InnerContent>Runtime :</S.InnerContent>
									<S.InnerContent2>{runtime} minutes</S.InnerContent2>
								</S.TitleInfoLi>
							</S.TitleInfoUl>
							<S.TitleInfoUl>
								<S.TitleInfoLi>
									<S.InnerContent>Introduce : </S.InnerContent>
								 <S.InnerContent2>{tagline}</S.InnerContent2>
								</S.TitleInfoLi>
							</S.TitleInfoUl>
						</S.TitleInfoWrapTop>
					</S.TitleInfoWrap>
				</S.DetailTopWrap>
				<S.DetailTopWrap>
		<S.Content>{overview}</S.Content>
				</S.DetailTopWrap>
			</S.Contents>
		</S.DetailWrap>
	);
}

export default DetailInfo;

const DetailWrap = styled.div`
	margin: 0;
	padding: 0;
	width: 100vw;
	background-color: black;
`;

const Iframe = styled.iframe`
	width: 100vw;
	height: 600px;
`;

const Contents = styled.div`
	width: 70vw;
	height: 100vh;
	color: #000;
	margin: 0 auto;
`;

const DetailTopWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 400px;
	width: 100%;
	border-bottom: 1px #d9d9d9 solid;
`;

const PostImg = styled.img`
	width: 250px;
`;

const TitleInfoWrap = styled.div`
	margin-left: 30px;
	width: 900px;
	height: 350px;
`;

const TitleInfoWrapTop = styled.div`
	width: 900px;
	height: 160px;
	line-height: 30px;
	padding-bottom: 200px;
`;

const Title = styled.div`
	padding: 20px 30px 70px;
	font-size: 50px;
	line-height: 50px;
	font-weight: bold;
	color: white;
`;

const Content = styled.div`
	padding: 20px 30px;
	font-size: 25px;
	line-height: 60px;
	color: white;
`;

const TitleInfoUl = styled.ul`
	width: 800px;
	height: 25px;
	padding: 0;
	margin-left: 30px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 50px;
`;

const TitleInfoLi = styled.li`
	list-style: none;
	display: flex;
	justify-content: space-between;
`;

const InnerContent = styled.div`
	font-size: 20px;
	color: white;
`;

const InnerContent2 = styled.div`
	margin-left: 10px;
	font-size: 20px;
	font-weight: bold;
	color: white;
`;

const S = {
	DetailWrap,
	Iframe,
	Contents,
	DetailTopWrap,
	PostImg,
	TitleInfoWrap,
	TitleInfoWrapTop,
	TitleInfoUl,
	TitleInfoLi,
	Title,
	Content,
	InnerContent,
	InnerContent2,
};
