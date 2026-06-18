import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
	image: string;
	name: string;
	description: string;
	price?: number;
}

export const ProductCard = ({ image, name, description, price }: ProductCardProps) => {
	return (
		<div className='w-72 h-100 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 relative overflow-hidden border border-gray-100'>
			<div className='absolute right-3 top-2 z-10'>
				<button className='cursor-pointer bg-white/80 backdrop-blur-sm rounded-full p-1.5 transition duration-300 hover:scale-110 hover:bg-white'>
					<Heart className='w-4 h-4 text-accent' />
				</button>
			</div>
			<div className='w-full h-[55%] bg-accent/10 overflow-hidden'>
				<img src={image} alt={name} className='w-full h-full object-cover' />
			</div>
			<div className='px-4 py-3 flex flex-col gap-1.5'>
				<h2 className='text-text-title font-bold text-xl'>{name}</h2>
				<p className='text-text-muted text-[14px] leading-tight'>
					{description}
				</p>
				<div className='flex items-center justify-between mt-auto pt-3'>
					<span className='text-primary font-black text-xl'>
						{price}₽
						<span className='text-text-muted font-normal text-xs'>/ кг</span>
					</span>
				</div>
				<button className='bg-accent text-white h-11 flex items-center justify-center gap-2 p-3 mt-2 rounded-xl cursor-pointer transition duration-300 hover:bg-accent-hover hover:scale-105 active:scale-100'>
					<ShoppingCart className='w-5 h-5' />
					<span className=''>В корзину</span>
				</button>
			</div>
		</div>
	);
};
