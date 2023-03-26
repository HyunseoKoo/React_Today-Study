import React from 'react';
import styled from 'styled-components';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

const MovieSlider = ({ data }) => {
	const top4 = data && data.data.results.splice(0, 4);

	return (
		<S.Wrapper>
			<S.SwiperWrapper>
				<Swiper
					className="mySwiper"
					autoplay={{ delay: 1000, disableOnInteraction: false }}
					slidesPerView={1.0}
					spaceBetween={0}
					loop={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
				>
					{top4 &&
						top4.map((src, index) => {
							return (
								<S.StyledSwiper key={src.id}>
									<SwiperSlide>
										<SlideContent>
											<Title>{src.title}</Title>
											<Overview>{src.overview}</Overview>
										</SlideContent>
										<SlideImage
											key={src.id}
											src={`${IMG_BASE_URL}/${src.backdrop_path}`}
											alt={src.title}
										/>
									</SwiperSlide>
								</S.StyledSwiper>
							);
						})}
				</Swiper>
			</S.SwiperWrapper>
		</S.Wrapper>
	);
};

export default MovieSlider;

const Wrapper = styled.div`
	width: 100%;
	background-color: black;
	padding-top: 50px;
	margin-bottom: 100px;
	& > div {
		overflow: hidden;
	}
`;

const SwiperWrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	padding: 0px 20px;
`;

const StyledSwiper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const SlideContent = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	display: flex;
	flex-direction: column;
	padding: 180px 80px;
	color: white;
	@media (max-width: 768px) {
		padding: 100px 20px;
	}
`;

const Title = styled.div`
	width: 100%;
	font-size: 3rem;
	font-weight: bolder;
	margin-bottom: 2.5rem;
	background-color: none;
	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

const Overview = styled.p`
	width: 50%;
	font-size: 1.5rem;
	font-weight: lighter;
	line-height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
	@media (max-width: 768px) {
		font-size: 0.8rem;
		line-height: 20px;
	}
`;

const SlideImage = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;

export const S = {
	Wrapper,
	SwiperWrapper,
	StyledSwiper,
};
