import { ProductCard } from './ProductCard';

export const ProductsGrid = () => {
	return (
		<div className='container pt-8'>
			<section>
				<h2 className='text-text-title text-2xl font-bold mb-4'>
					Овощи, фрукты
				</h2>

				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					<ProductCard
						key={1}
						image="dfdf"
						name="sdsd"
						description="sdsddsd"
						price={200}
					/>
				</div>
			</section>
		</div>
	);
};
