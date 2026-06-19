import { useCategories } from '../hooks/useCategories';
import { ProductCard } from './ProductCard';

import { ProductsGridSkeleton } from '../Skeletons/ProductsGridSkeleton';

export const ProductsGrid = () => {
	const { categories, loading } = useCategories();

	const skeleton = <ProductsGridSkeleton />

	return (
		<div className='container pt-8'>
			{loading
				? skeleton
				: categories.map(category => {
						return (
							<section key={category.id}>
								<h2 className='text-text-title text-2xl font-bold mb-4'>
									{category.emoji} {category.name}
								</h2>
								<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10'>
									<ProductCard
										key={1}
										image='dfdf'
										name='sdsd'
										description='sdsddsd'
										price={200}
									/>
								</div>
							</section>
						);
					})}
		</div>
	);
};
