import { useCategories } from '../hooks/useCategories';
import { ProductsGridSkeleton } from '../Skeletons/ProductsGridSkeleton';
import { ProductsSections } from './ProductsSections';
import { Categories } from './Categories'; // Импортируем сюда!

export const ProductsGrid = () => {
    // Вызываем хук ОДИН РАЗ на самом верху
    const { categories, loading, activeCategory, setActiveCategory } = useCategories();

    const skeleton = <ProductsGridSkeleton />;

    return (
        <div className='container pt-8'>
            {loading ? (
                skeleton
            ) : (
                <>
                    <Categories 
                        categories={categories} 
                        activeCategory={activeCategory} 
                        setActiveCategory={setActiveCategory} 
                    />

                    {categories.map(category => (
                        <ProductsSections currentCategory={category} key={category.id} />
                    ))}
                </>
            )}
        </div>
    );
};