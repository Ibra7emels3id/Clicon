'use client';
import { FetchProducts } from '@/lib/features/Product/GetProductsSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const SearchData = ({setIsOpen}) => {
    const { products, loading } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch()
    const [search, setSearch] = React.useState('')
    const Router = useRouter()



    let filteredProducts = [];

    // Search Products by Name And Category
    if (search) {
        filteredProducts = products?.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase()) || product.category.name.toLowerCase().includes(search.toLowerCase())
        })
    } else {
        filteredProducts = products?.slice(0, 5)
    }



    // Fetch Products
    useEffect(() => {
        dispatch(FetchProducts())
    }, []);

    return (
        <div className="z-50 relative bg-gray-100 flex px-4 py-3 w-[500px] rounded">
            <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                autoComplete="off"
                name="search"
                placeholder="Search..."
                className="outline-none bg-transparent w-full text-sm"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="20px"
                className="cursor-pointer fill-gray-400 ml-6 rotate-90 inline-block"
            >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
            {
                search?.length > 0 && (
                    <div className=" absolute top-12 left-0 w-full bg-white shadow-lg rounded-b-lg p-2 z-50">
                        <div className="flex flex-col gap-2">
                            {
                                filteredProducts.length > 0 ?  filteredProducts?.map((it) => (
                                    <div onClick={()=>{
                                        Router.push(`/shop/view-details/${it._id}`)
                                        setIsOpen(false)
                                        setSearch('')
                                    }} key={it.id} className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                                        <Image
                                            src={it.image_1}
                                            alt="image"
                                            width={50}
                                            height={50}
                                            loading='lazy'
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div className="flex flex-col">
                                            <h1 className="text-sm font-semibold">{it.title.slice(0, 40)}</h1>
                                            <p className="text-xs text-gray-500">{it.category.name}</p>
                                        </div>
                                    </div>
                                )) : 
                                <p className='text-center w-full m-auto py-2'>Data Not Found</p>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

    export default React.memo(SearchData);
