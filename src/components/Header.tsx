import Logo from '../assets/logo.png'

import { Heart, Search, ShoppingCart } from 'lucide-react';

export const Header = () => {
	return (
		<header className='w-full h-12 flex items-center justify-between px-6 p-10'>
			<div>
				<div>
					<img src={Logo} alt='Logo' width={165} />
				</div>
			</div>
			<div>
				<div className='flex items-center justify-between relative w-full max-w-xl'>
					<input
						type='text'
						placeholder='Найти в Parhato...'
						className='w-150 bg-white text-neutral-title placeholder-neutral-muted pl-5 pr-12 py-3 rounded-xl text-sm font-medium border border-gray-100 shadow-xs outline-hidden focus:border-primary focus:shadow-md transition-all duration-200'
					/>
					<button className='absolute right-4 text-accent hover:text-accent-hover transition-colors cursor-pointer'>
						<Search />
					</button>
				</div>
			</div>
			<div className='flex items-center gap-8 pr-2.5'>
				<div className='flex gap-5'>
					<div>
						<button className='flex items-center justify-center cursor-pointer'>
							<Heart className='text-accent transition duration-300 hover:text-accent-hover' />
						</button>
					</div>
					<div>
						<button className='flex items-center justify-center cursor-pointer'>
							<ShoppingCart className='text-accent transition duration-300 hover:text-accent-hover' />
						</button>
					</div>
				</div>
				<div className='flex items-center gap-4'>
					<div>
						<button className='bg-primary text-white transition duration-300 hover:bg-primary-hover px-4 py-2 rounded-xl   cursor-pointer'>
							Login
						</button>
					</div>
					<div>
						<button className='bg-accent text-white transition duration-300 hover:bg-accent-hover px-4 py-2 rounded-xl   cursor-pointer'>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};