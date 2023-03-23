import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

function MovieCard({ title, poster_path, vote_average, overview, id }) {
	return (
		<S.Wrapper>
			<Link to={`/detail/${id}`}>
				<S.Container>
					<S.MoviePoster src={IMG_BASE_URL + poster_path} />
					<S.MovieInfo>
						<div>
							<S.MovieTitle>{title}</S.MovieTitle>
							<S.Rating>{vote_average}</S.Rating>
						</div>
						<S.MovieOverview>
							<S.OverviewTitle>내용:</S.OverviewTitle>
							<S.OverviewText>{overview}</S.OverviewText>
						</S.MovieOverview>
					</S.MovieInfo>
				</S.Container>
			</Link>
		</S.Wrapper>
	);
}

export default MovieCard;

const Wrapper = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: center;
`;

const Container = styled.div`
	width: 300px;
	height: 450px;
	margin: 10px;
	border-radius: 5px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	position: relative;
	@media (max-width: 768px) {
		width: 200px;
		height: 300px;
	}
`;

const MoviePoster = styled.img`
	width: 100%;
	height: 75%;
	object-fit: fill;
	@media (max-width: 768px) {
		height: 50%;
	}
`;

const MovieInfo = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 40%;
	background-color: #fff;
	@media (max-width: 768px) {
		height: 50%;
		padding: 5px;
	}
	& div {
		display: flex;
		justify-content: space-between;
	}
`;

const MovieTitle = styled.h3`
	font-size: 20px;
	font-weight: bolder;
	margin: 0;
	margin-bottom: 10px;
	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

const Rating = styled.span`
	background-color: #f44336;
	color: #fff;
	padding: 5px;
	border-radius: 5px;
	font-size: 16px;
	font-weight: bold;
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

const MovieOverview = styled.div`
	padding: 10px;
	@media (max-width: 768px) {
		padding: 5px;
	}
`;

const OverviewTitle = styled.h4`
	width: 100%;
	margin: 0;
	margin-bottom: 10px;
	@media (max-width: 768px) {
		margin-bottom: 5px;
	}
`;

const OverviewText = styled.span`
	margin: 0;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

const S = {
	Wrapper,
	Container,
	MoviePoster,
	MovieInfo,
	MovieTitle,
	Rating,
	MovieOverview,
	OverviewTitle,
	OverviewText,
};
