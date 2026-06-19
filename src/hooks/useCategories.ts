import { useEffect, useState } from 'react'

import { supabase } from '../supabaseClient'

import type { Category } from '../types/Categories';

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(false);
	const [activeCategory, setActiveCategory] = useState<string>(
		'36064bb2-0622-4544-937a-3eaeca899ef2',
	);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				setLoading(true);
				const { data } = await supabase
					.from('Categories')
					.select('*, Products(category)')
					.order('id', { ascending: true });

				if (data && data.length > 0) {
					const activeCategories = data.filter(
						category => category.Products && category.Products.length > 0,
					);

					if (activeCategories.length > 0) {
						setCategories(activeCategories);

						setActiveCategory(activeCategories[0].id ?? '');
					}
				}
			} catch (error) {
				console.log('Error:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchCategories();
	}, []);


	return { categories, loading, activeCategory, setActiveCategory };
}