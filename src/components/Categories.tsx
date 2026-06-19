import type { Category } from '../types/Categories';
import { useCategories } from '../hooks/useCategories';

interface CategoriesProps {
	categories: Category[];
	activeCategory: string;
	setActiveCategory: (value: string) => void
}

export const Categories = ({ categories }: CategoriesProps) => {
	const { activeCategory, setActiveCategory } = useCategories()

	const handleCategoryClick = (categoryId: string) => {
		setActiveCategory(categoryId)
	}

	return (
		<div className='pb-8 flex gap-3 overflow-x-auto scrollbar-none select-none'>
			{categories.map(category => (
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
