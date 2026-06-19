import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { Categories } from './components/Categories';
import { ProductsGrid } from './components/ProductsGrid';
// import { ProductsPromotion } from './components/ProductsPromotion';

export const App = () => {
	
	return (
		<div>
			<Header />
			<main className='px-8'>
				<Stories />
					<Categories />
					<ProductsGrid />
			</main>
		</div>
	);
};
