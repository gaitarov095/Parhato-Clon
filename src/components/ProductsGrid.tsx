import { useCategories } from '../hooks/useCategories';

import { ProductsGridSkeleton } from '../Skeletons/ProductsGridSkeleton';
import { ProductsSections } from './ProductsSections';

export const ProductsGrid = () => {
	const { categories, loading } = useCategories();

	const skeleton = <ProductsGridSkeleton />;

	return (
		<div className='container pt-8'>
			{loading ? skeleton : categories.map(category => {
				return <ProductsSections currentCategory={category} />;
			})}
		</div>
	);
};
