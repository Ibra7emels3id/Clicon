import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LatestNews = () => {
    return (
        <div className='bg-[#F2F4F5] mt-5'>
            <div className="px-2 max-w-7xl md:px-2 m-auto py-12">
                <div className="title flex justify-center items-center">
                    <h2 className='text-3xl font-bold '>Latest News</h2>
                </div>
                <div className=" font-[sans-serif] mt-7">
                    <div className=" mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                            <div className="bg-white cursor-pointer rounded p-5  overflow-hidden shadow-xl relative top-0 hover:-top-2 transition-all duration-300">
                                <Image
                                    loading='lazy'
                                    src={'/images/unsplash_iZVrfElG1t0.png'}
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
                                            Kristin
                                        </p>
                                        <p className='flex items-center gap-2 text-gray-500'>
                                            <Image
                                                src={'/images/UserCircle.png'}
                                                alt="User Avatar"
                                                width={20}
                                                height={20}
                                            />
                                            28 Nov, 2015
                                        </p>
                                        <p className='flex items-center gap-2 text-gray-500'>
                                            <Image
                                                src={'/images/UserCircle.png'}
                                                alt="User Avatar"
                                                width={20}
                                                height={20}
                                            />
                                            738
                                        </p>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis
                                        vitae ligula.
                                    </p>
                                    <Link href="/blog-post" className="flex items-center justify-center mt-4 px-4 py-2 text-sm font-bold text-[#FA8232] hover:bg-[#FA8232] hover:text-white border border-[#FA8232] w-full bg-white transition-all duration-300">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-xl p-5 relative top-0 hover:-top-2 transition-all duration-300">
                                <Image
                                    loading='lazy'
                                    src={'/images/unsplash_FO7JIlwjOtU.png'}
                                    alt="Blog Post 2"
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
                                            Kristin
                                        </p>
                                        <p className='flex items-center gap-2 text-gray-500'>
                                            <Image
                                                src={'/images/UserCircle.png'}
                                                alt="User Avatar"
                                                width={20}
                                                height={20}
                                            />
                                            28 Nov, 2015
                                        </p>
                                        <p className='flex items-center gap-2 text-gray-500'>
                                            <Image
                                                src={'/images/UserCircle.png'}
                                                alt="User Avatar"
                                                width={20}
                                                height={20}
                                            />
                                            738
                                        </p>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis
                                        vitae ligula.
                                    </p>
                                    <Link href="/blog-post" className="flex items-center justify-center mt-4 px-4 py-2 text-sm font-bold text-[#FA8232] hover:bg-[#FA8232] hover:text-white border border-[#FA8232] w-full bg-white transition-all duration-300">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-xl p-5 relative top-0 hover:-top-2 transition-all duration-300">
                                <Image
                                    loading='lazy'
                                    src={'/images/unsplash_iZVrfElG1t0.png'}
                                    width={100}
                                    height={100}
                                    alt="Blog Post 3"
                                    className="w-full rounded-lg h-60 object-cover"
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
                                            Kristin
                                        </p>
                                        <p className='flex items-center gap-2 text-gray-500'>
                                            <Image
                                                src={'/images/UserCircle.png'}
                                                alt="User Avatar"
                                                width={20}
                                                height={20}
                                            />
                                            28 Nov, 2015
                                        </p>
                                        <p className='flex items-center gap-2 text-gray-500'>
                                            <Image
                                                src={'/images/UserCircle.png'}
                                                alt="User Avatar"
                                                width={20}
                                                height={20}
                                            />
                                            738
                                        </p>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                        accumsan, nunc et tempus blandit, metus mi consectetur felis turpis
                                        vitae ligula.
                                    </p>
                                    <Link href="/blog-post" className="flex items-center justify-center mt-4 px-4 py-2 text-sm font-bold text-[#FA8232] hover:bg-[#FA8232] hover:text-white border border-[#FA8232] w-full bg-white transition-all duration-300">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestNews;
