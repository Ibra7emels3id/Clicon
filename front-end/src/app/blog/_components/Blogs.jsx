'use client'
import Loader from '@/app/Loader';
import { FetchBlogs } from '@/lib/features/Blog/GetBlogs';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Blogs = () => {
    const { loading, blogs } = useAppSelector((state) => state?.blogs);
    const dispatch = useAppDispatch()




    // Fetch Products
    useEffect(() => {
        dispatch(FetchBlogs())
    }, [])


    // Set Loading 
    if (loading) return <Loader />



    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5  gap-4 max-lg:max-w-3xl max-md:max-w-md mx-auto">
            {blogs?.map((blog) => (
                <div className="bg-white cursor-pointer rounded p-5  overflow-hidden border border-gray-200 hover:shadow  relative top-0 hover:-top-2 transition-all duration-300">
                    <Image
                        loading='lazy'
                        src={blog?.image}
                        alt="Blog Post 1"
                        width={100}
                        height={100}
                        className="w-full h-60 object-cover rounded-lg"
                    />
                    <div className="py-6">
                        <div className="flex mb-2 items-center justify-between">
                            <p className='flex items-center gap-2 text-gray-500'>
                                <Image
                                    src={'/images/UserCircle.png'}
                                    alt="User Avatar"
                                    width={20}
                                    height={20}
                                />
                                {blog?.name.split(' ')[0]}
                            </p>
                            <p className='flex items-center gap-2 text-gray-500'>
                                <Image
                                    src={'/images/UserCircle.png'}
                                    alt="User Avatar"
                                    width={20}
                                    height={20}
                                />
                                {blog?.date}
                            </p>
                            <p className='flex items-center gap-2 text-gray-500'>
                                <Image
                                    src={'/images/UserCircle.png'}
                                    alt="User Avatar"
                                    width={20}
                                    height={20}
                                />
                                {blog?.comment?.length}
                            </p>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">
                            {blog?.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {blog?.description.slice(0 , 200)}...
                        </p>
                        <Link href={`/blog/blog-details/${blog?._id}`} className="flex items-center justify-center mt-4 px-4 py-2 text-sm font-bold text-[#FA8232] hover:bg-[#FA8232] hover:text-white border border-[#FA8232] w-full bg-white transition-all duration-300">
                            Read More
                        </Link>     
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Blogs;
