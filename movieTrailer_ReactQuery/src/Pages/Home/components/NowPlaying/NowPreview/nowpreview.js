import useGetNowPlay from 'hooks/queries/nowplay/get-nowplay';

const NowPreview = () => {
	const { data } = useGetNowPlay();
	return (
		<>
			<div>PREVIEW</div>
		</>
	);
};

export default NowPreview;
