export const BenefitsSkeleton = () => {
	return (
		<>
			{[...Array(4)].map((i) => (
				<div
					key={i}
					className='w-auto h-35 bg-gray-200 rounded-2xl'
				></div>
			))}
		</>
	);
};
