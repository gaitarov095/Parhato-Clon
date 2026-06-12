export const Categories = () => {
	return (
		<div className='container pt-8 flex gap-3'>
			<button className='flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer'>
				<span>🥗</span>
				<span>Овощи, фрукты</span>
			</button>

			<button className='flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-neutral-title px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-pointer'>
				<span>🥛</span>
				<span>Молочные изделия</span>
			</button>
		</div>
	);
};
