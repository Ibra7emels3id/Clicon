'use client'
import { FetchProducts } from '@/lib/features/Product/GetProductsSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import React, { useEffect } from 'react';

const FilterCategory = () => {
    const { products, loading } = useAppSelector((state) => state.products)
    const dispatch = useAppDispatch();



    // Handle Sort Products
    const sortedProducts = products?.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

    // Handle Fetch Products
    useEffect(() => {
        dispatch(FetchProducts())
    }, [])

    return (
        <div className='max-w-7xl m-auto px-3'>
            <div className="flex flex-col w-full">
                <div className="title">
                    <h2 className="text-2xl font-bold">FLASH SALE TODAY</h2>
                </div>
                <div className="grid xl:grid-cols-4 mt-4 gap-2">
                    {sortedProducts?.slice(0, 8).map((product) => (
                        <div className="box flex items-center gap-3 w-full border border-gray-200 p-2">
                            <div className="flex justify-center  items-center w-[140px]">
                                <Image
                                    src={product?.image_1}
                                    loading='lazy'
                                    alt="Product"
                                    width={100}
                                    height={70}
                                    className='w-[100px] h-[100px] object-contain'
                                />
                            </div>
                            <div className="flex-grow flex flex-col gap-2 w-full">
                                <h3 className="text-[13px]  font-bold w-full text-gray-700">{product?.title.slice(0 , 45)}...</h3>
                                <p className="text-sky-600 text-md font-bold">${product?.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterCategory;
