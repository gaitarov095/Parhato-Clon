import { useState, useEffect} from 'react';

import { supabase } from '../supabaseClient'

import { CategoriesSkeleton } from '../Skeletons/Categories';
import type { Category } from '../types/Categories';

export const Categories = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(false);
	const [activeCategory, setActiveCategory] = useState('');

	const skeleton = [...Array(7)].map((_, i) => <CategoriesSkeleton key={i} />)

	useEffect(() => {
		const fetchCategories = async () => {
			setLoading(true);
			try {
				const { data } = await supabase.from('Categories').select('*').order('id', { ascending: true });
				setLoading(false);
				
				if (data && data.length > 0) {
					setCategories(data);
					setActiveCategory(data?.[0].id || '');
				}
			} catch (error) {
				console.log('Error:', error)
			} finally  {
				setLoading(false);
			}
		}

		fetchCategories();
	}, [])

	const handleCategoryClick = (categoryId: string) => {
		setActiveCategory(categoryId);
	}
	return (
		<div className='pt-8 flex gap-3'>
			{loading ? skeleton : categories.map(category => (
				<button onClick={() => handleCategoryClick(category.id)} key={category.id} className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${activeCategory === category.id ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}`}>
					<span>{category.emoji}</span>
					<span>{category.name}</span>
				</button>
			))}
		</div>
	);
};
