import { useEffect, useState, useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { supabase } from '../supabaseClient';

import { Star } from 'lucide-react';

import type { ReviewsT } from '../types/Reviews';

export const Reviews = () => {
	const [reviews, setReviews] = useState<ReviewsT[]>([])
	const scrollRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const { data } = await supabase.from('Reviews').select('*').order('id', { ascending: true })

				if (data && data.length > 0) {
					setReviews(data)
				}
			} catch (error) {
				console.log('Error', error)
			}
		}

		fetchReviews()
	}, [])

	const blocks: ReviewsT[][] = []
	for (let i = 0; i < reviews.length; i += 6) {
		blocks.push(reviews.slice(i, i + 6))
	}

	return (
		<section className='py-12 relative'>
			<h2 className='text-text-title text-2xl font-bold mb-8'>
				Отзывы покупателей
			</h2>
			<div ref={scrollRef} className='overflow-hidden'>
				<ScrollContainer className='flex space-x-4 overflow-x-auto scrollbar-none cursor-grab'>
					{blocks.map((block, blockIndex) => (
						<div key={blockIndex} className='grid grid-cols-2 gap-4 shrink-0 w-full'>
							{block.map((review, index) => (
								<div
									key={index}
									className='flex items-start gap-4 p-5 rounded-xl bg-bg-card border border-gray-100'
								>
									<div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0'>
										{review.initial}
									</div>
									<div className='flex-1'>
										<div className='flex items-center justify-between mb-1'>
											<p className='text-text-title font-semibold text-sm'>
												{review.name}
											</p>
											<div className='flex items-center gap-0.5'>
												{Array.from({ length: review.rating }).map((_, i) => (
													<Star
														key={i}
														className='w-3.5 h-3.5 fill-accent text-accent'
													/>
												))}
											</div>
										</div>
										<p className='text-text-muted text-sm'>{review.text}</p>
									</div>
								</div>
							))}
						</div>
					))}
				</ScrollContainer>
			</div>
		</section>
	);
};
