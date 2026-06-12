import ScrollContainer from 'react-indiana-drag-scroll';

export const Stories = () => {
	return (
		<div>
			<div className='container pt-8'>
				<ScrollContainer className='flex space-x-4 overflow-x-auto scrollbar-none pb-2'>
					<div className='flex-none w-40 h-48 bg-gray-100 rounded-2xl relative overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all duration-200 group'>
						<img
							src='/path-to-image.jpg'
							alt='Акция'
							className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
						/>
						<div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent' />
						<span className='absolute bottom-3 left-3 right-3 text-white text-sm font-bold leading-tight'>
							Скидка 15% на первый заказ
						</span>
					</div>
				</ScrollContainer>
			</div>
		</div>
	);
};
