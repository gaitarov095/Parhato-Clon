import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { ProductCard } from './ProductCard';
import type { Product } from '../types/Product';
import type { Category } from '../types/Categories';

interface ProductCardProps {
	currentCategory: Category;
}

export const ProductsSections = ({ currentCategory }: ProductCardProps) => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const { data } = await supabase
					.from('Products')
					.select('*')
					.eq('category', currentCategory.category);

				if (data) {
					setProducts(data);
				}
			} catch (error) {
				console.log('Error fetching products:', error);
			}
		};
		fetchProducts();
	}, [currentCategory.category]);

	if (products.length === 0) {
		return null;
	}

	return (
		<section className='mb-10'>
			<h2 className='text-text-title text-2xl font-bold mb-4 flex items-center gap-2'>
				<span>{currentCategory.emoji}</span>
				<span>{currentCategory.name}</span>
			</h2>

			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};
