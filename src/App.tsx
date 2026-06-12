import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { Categories } from './components/Categories';

export const App = () => {
	return (
		<div>
			<Header />
			<main className='px-8'>
				<Stories />
				<Categories />
			</main>
		</div>
	);
};
