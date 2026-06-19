import { useEffect, useState } from 'react'

import { supabase } from '../supabaseClient'

import type { Category } from '../types/Categories';

export const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(false);
	const [activeCategory, setActiveCategory] = useState('');

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				setLoading(true);
				const { data } = await supabase
					.from('Categories')
					.select('*')
					.order('id', { ascending: true });

				if (data && data.length > 0) {
					setCategories(data);
					setActiveCategory(data[0].id ?? '');
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