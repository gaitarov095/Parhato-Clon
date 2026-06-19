import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { ProductsGrid } from './components/ProductsGrid';

export const App = () => {
	
	return (
		<div>
			<Header />
			<main className='px-8'>
				<Stories />
				<ProductsGrid />
			</main>
		</div>
	);
};
