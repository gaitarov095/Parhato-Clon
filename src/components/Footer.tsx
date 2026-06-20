import Logo from '../assets/Logo.png';

import { Phone, Mail, MapPin, Globe, MessageCircle, Send } from 'lucide-react';
import { useCategories } from '../hooks/useCategories';

const footerLinks = {
	company: [
		'О нас',
		'Блог',
		'Вакансии',
		'Партнёрам',
		'Контакты',
	],
};

export const Footer = () => {
	const { categories } = useCategories()
	return (
		<footer className='bg-primary text-white mt-16'>
			<div className='px-8 py-12'>
				<div className='grid grid-cols-4 gap-10'>
					<div className='flex flex-col gap-4'>
						<img
							src={Logo}
							alt='Parhato'
							width={150}
							className='brightness-0 invert'
						/>
						<p className='text-white/70 text-sm leading-relaxed'>
							Свежие продукты с доставкой на дом. Только качественные товары от
							проверенных поставщиков.
						</p>
						<div className='flex gap-3 mt-2'>
							<a
								href='#'
								className='w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300'
							>
								<Globe className='w-4 h-4' />
							</a>
							<a
								href='#'
								className='w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300'
							>
								<MessageCircle className='w-4 h-4' />
							</a>
							<a
								href='#'
								className='w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300'
							>
								<Send className='w-4 h-4' />
							</a>
						</div>
					</div>

					<div>
						<h3 className='font-bold text-sm mb-4'>Каталог</h3>
						<ul className='flex flex-col gap-2.5'>
							{categories.map(category => (
								<li key={category.id}>
									<a
										href='#'
										className='text-white/70 text-sm hover:text-accent transition-colors duration-200'
									>
										{category.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className='font-bold text-sm mb-4'>Компания</h3>
						<ul className='flex flex-col gap-2.5'>
							{footerLinks.company.map(link => (
								<li key={link}>
									<a
										href='#'
										className='text-white/70 text-sm hover:text-accent transition-colors duration-200'
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className='font-bold text-sm mb-4'>Контакты</h3>
						<div className='flex flex-col gap-3'>
							<a
								href='tel:+78001234567'
								className='flex items-center gap-3 text-white/70 text-sm hover:text-accent transition-colors duration-200'
							>
								<Phone className='w-4 h-4 shrink-0' />8 800 123-45-67
							</a>
							<a
								href='mailto:info@parhato.ru'
								className='flex items-center gap-3 text-white/70 text-sm hover:text-accent transition-colors duration-200'
							>
								<Mail className='w-4 h-4 shrink-0' />
								info@parhato.ru
							</a>
							<div className='flex items-start gap-3 text-white/70 text-sm'>
								<MapPin className='w-4 h-4 shrink-0 mt-0.5' />
								<span>Москва, ул. Примерная, д. 1</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='border-t border-white/10'>
				<div className='px-8 py-5 flex items-center justify-between'>
					<p className='text-white/50 text-xs'>
						&copy; 2024 Parhato. Все права защищены.
					</p>
					<div className='flex gap-6'>
						<a
							href='#'
							className='text-white/50 text-xs hover:text-white/80 transition-colors duration-200'
						>
							Политика конфиденциальности
						</a>
						<a
							href='#'
							className='text-white/50 text-xs hover:text-white/80 transition-colors duration-200'
						>
							Пользовательское соглашение
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
