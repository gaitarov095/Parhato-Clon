import { useState, useEffect } from 'react'

import { supabase } from '../supabaseClient'

import ScrollContainer from 'react-indiana-drag-scroll';
import { StoriesSkeleton } from '../Skeletons/StoriesSkeleton';

import type { Story } from '../types/Story';

export const Stories = () => {
	const [stories, setStories] = useState<Story[]>([]);
	const [loading, setLoading] = useState(false);

	const skeleton = [...Array(9)].map((_, i) => <StoriesSkeleton key={i} />)

	useEffect(() => {
		const fetchStories = async () => {
			setLoading(true);
			try {
				const { data } = await supabase
					.from<'Stories', Story>('Stories')
					.select('*')
					.order('id', { ascending: true });

				if (data && data.length > 0) {
					setStories(data);
				}
				setLoading(false);
			} catch (error) {
				console.log('Error fetching stories:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchStories();
	}, []);

	return (
		<div>
			<ul className='pt-8 cursor-grab'>
				<ScrollContainer className='flex space-x-4 overflow-x-auto scrollbar-none pb-2'>
					{loading
						? skeleton
						: stories.map(story => (
								<li
									key={story.id}
									className='flex-none w-40 h-48 bg-gray-100 rounded-2xl relative overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all duration-200 group'
								>
									<img
										src={story.image}
										alt={story.name}
										className='absolute inset-0 w-full h-full object-center group-hover:scale-105 transition-transform duration-300'
									/>
									<div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent' />
									<span className='absolute bottom-3 left-3 right-3 text-white text-sm font-bold leading-tight'>
										{story.name}
									</span>
								</li>
							))}
				</ScrollContainer>
			</ul>
		</div>
	);
};
