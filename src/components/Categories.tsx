import { CategoriesSkeleton } from '../Skeletons/Categories';
import { useCategories } from '../hooks/useCategories';

export const Categories =  () => {
	const { categories, loading, activeCategory, setActiveCategory } = useCategories();

	const skeleton = [...Array(7)].map((_, i) => <CategoriesSkeleton key={i} />)

	const handleCategoryClick = (categoryId: string) => {
		setActiveCategory(categoryId);
	}
	return (
		<div className='pt-8 flex gap-3 overflow-x-auto scrollbar-none pb-2 select-none'>
			{loading
				? skeleton
				: categories.map(category => (
						<button
							onClick={() => handleCategoryClick(category.id)}
							key={category.id}
							className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${activeCategory === category.id ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}`}
						>
							<span>{category.emoji}</span>
							<span>{category.name}</span>
						</button>
					))}
		</div>
	);
};
