import React from 'react';

import styled from 'styled-components';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

function MovieCard({ movie }) {
	return (
		<S.Wrapper>
			<S.Container>
				<S.MoviePoster src={IMG_BASE_URL + movie.poster_path} />
				<S.MovieInfo>
					<div>
						<S.MovieTitle>{movie.title}</S.MovieTitle>
						<S.Rating>⭐{movie.vote_average}</S.Rating>
					</div>
					<S.OverviewText>{movie.overview}</S.OverviewText>
				</S.MovieInfo>
			</S.Container>
		</S.Wrapper>
	);
}

export default MovieCard;

const Wrapper = styled.div`
	display: flex;
	flex: 1;
`;

const Container = styled.div`
	height: 450px;
	margin: 10px;
	border: 1px solid pink;
	border-radius: 5px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	position: relative;
	@media (max-width: 768px) {
		width: 120px;
	}
	> div {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		margin-bottom: 10px;
		@media (max-width: 768px) {
			margin-bottom: 3px;
		}
	}
	:hover {
		& > img {
			height: 0%;
		}
	}
`;

const MoviePoster = styled.img`
	width: 100%;
	height: 100%;
	object-fit: fill;
`;

const MovieInfo = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	background-color: black;
	color: white;
	& div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

const MovieTitle = styled.h3`
	font-size: 25px;
	font-weight: bolder;
	margin-bottom: 15px;
	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

const Rating = styled.span`
	background-color: #f44336;
	color: #fff;
	width: 60px;
	text-align: center;
	padding: 5px;
	border-radius: 5px;
	font-size: 15px;
	font-weight: bold;
	@media (max-width: 768px) {
		width: 30px;
		font-size: 10px;
	}
`;

const OverviewText = styled.span`
	font-size: 20px;
	font-weight: lighter;
	line-height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
	@media (max-width: 768px) {
		font-size: 10px;
		line-height: 15px;
		-webkit-line-clamp: 4;
	}
`;


const S = {
	Wrapper,
	Container,
	MoviePoster,
	MovieInfo,
	MovieTitle,
	Rating,
	OverviewText,
};
