import React from 'react';
import styled from 'styled-components';
// import Slider from 'react-slick';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

const MovieSlider = ({ dummy }) => {
	return (
		<S.Wrapper>
			<S.SwiperWrapper>
				<Swiper
					slidesPerView={1.1}
					centeredSlides={true}
					spaceBetween={30}
					grabCursor={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{dummy.map((src, index) => {
						return (
							<SwiperSlide>
								<img key={index} src={src} alt="" width={2400} height={500} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</S.SwiperWrapper>
		</S.Wrapper>
	);
};

export default MovieSlider;

const Wrapper = styled.div`
	margin: 10px 20px;
	& > div {
		overflow: hidden;
	}
`;

const SwiperWrapper = styled.div`
	width: 70%;
	margin: 0 auto;
	border: 1px solid black;
	padding: 5px;
`;

export const S = {
	Wrapper,
	SwiperWrapper,
};
