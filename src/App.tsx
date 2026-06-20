import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { ProductsGrid } from './components/ProductsGrid';
import { Benefits } from './components/Benefits';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

export const App = () => {
	
	return (
		<div>
			<Header />
			<main className='px-8'>
				<Stories />
				<ProductsGrid />
				<Benefits />
				<Reviews />
			</main>
			<Footer />
		</div>
	);
};
