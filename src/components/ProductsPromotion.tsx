import React from 'react'
import ScrollContainer from "react-indiana-drag-scroll";
import { ProductCard } from './ProductCard';

export const ProductsPromotion = () => {
	return <div className='container pt-8'>
        <section className='w-full h-auto'>
            <h2 className='text-text-title text-2xl font-bold mb-5'>Товары со скидкой</h2>
            <ScrollContainer className='flex space-x-4 overflow-x-auto scrollbar-none pb-2'>
                <ProductCard image={''} name={'Бананы'} description={'Прямо из африки'} price={200} />
            </ScrollContainer>
        </section>
    </div>;
};
