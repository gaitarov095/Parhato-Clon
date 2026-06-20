import { Truck, ShieldCheck, Leaf, Headphones } from 'lucide-react';

const benefits = [
	{
		icon: Truck,
		title: 'Быстрая доставка',
		text: 'Доставим в течение 2 часов',
	},
	{
		icon: Leaf,
		title: 'Свежие продукты',
		text: 'Только проверенные фермеры',
	},
	{
		icon: ShieldCheck,
		title: 'Гарантия качества',
		text: 'Возврат если не понравится',
	},
	{
		icon: Headphones,
		title: 'Поддержка 24/7',
		text: 'Всегда на связи для вас',
	},
];

export const Benefits = () => {
	return (
		<section className=''>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
				{benefits.map((item, index) => (
					<div
						key={index}
						className='group flex flex-col items-center text-center p-6 rounded-2xl bg-bg-card border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-300'
					>
						<div className='w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300'>
							<item.icon className='w-7 h-7 text-accent' />
						</div>
						<p className='text-text-title font-bold text-sm mb-1'>{item.title}</p>
						<p className='text-text-muted text-xs leading-relaxed'>{item.text}</p>
					</div>
				))}
			</div>
		</section>
	);
};
