export const ProductsGridSkeleton = () => {
	return (
		<div>
			<div className='flex items-center mb-8 gap-3'>
				{[...Array(6)].map((_, i) => (
					<div key={i} className='flex-none w-45 h-11 bg-gray-200 rounded-full animate-pulse' />
				))}
			</div>
			<div className='w-60 h-10 bg-gray-200 rounded-2xl animate-pulse mb-5' />
			<div className='flex items-center gap-7'>
				{[...Array(4)].map((_, i) => (
					<div
						key={i}
						className='w-72 h-95 bg-gray-200 rounded-2xl animate-pulse'
					></div>
				))}
			</div>
		</div>
	);
};
