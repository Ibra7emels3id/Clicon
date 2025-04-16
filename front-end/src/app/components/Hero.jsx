import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className='max-w-7xl m-auto'>
            <div className="grid grid-cols-5 grid-rows-1  gap-6 p-3 md:p-8">
                <div className="flex bg-[#F2F4F5] relative col-span-5 xl:col-span-3 rounded-lg ">
                    <div className=" md:flex  items-center justify-between p-6 md:p-12">
                        <div className="flex flex-col gap-4 text-center sm:text-start ">
                            <p className='text-sky-500  text-[10px] font-Garamond'>{'THE BEST PLACE TO PLAY'}</p>
                            <h2 className='text-yellow font-semibold text-3xl font-Garamond'>{'Xbox Consoles'}</h2>
                            <p className='text-zinc-400 text-md xl:w-[300px]  font-normal'>{'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.'}</p>
                            <Link href={'/shop'} className='text-normal m-auto sm:m-0 w-[200px] border flex items-center justify-center text-white hover:text-[#FA8232] border-[#FA8232] h-12 hover:bg-transparent bg-[#FA8232] uppercase transition-all duration-300'>Shop Collection</Link>
                        </div>
                        <div className="Image block m-auto">
                            <Image
                                className='w-[350px] lg:w-[450px] m-auto mt-10 md:mt-0'
                                src={'/images/Image.png'}
                                alt="Background Image"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="offer absolute top-10 max-md:right-5 max-md:top-5 right-10 bg-sky-500 rounded-full max-md:h-[60px] max-md:w-[60px] h-[80px] w-[80px] flex items-center justify-center">
                            <span className="pl-1 font-normal text-md text-white block">29%</span>
                        </div>
                    </div>
                </div>
                <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 xl:col-span-2 col-span-5  row-span-1 gap-6">
                    <div className="flex items-center p-10 col-span-1 relative  justify-between row-span-3 bg-bgGreen rounded-lg bg-[#191C1F]" >
                        <div className="text flex  gap-2 ">
                            <div className="text flex flex-col gap-3">
                                <h2 className=' text-[12px] text-yellow-300 font-Garamond'>{'Summer Sales'}</h2>
                                <p className='w-[200px] text-white text-2xl ' >New Google<br /> Pixel 6 Pro</p>
                                <Link href={'/shop'} className='w-[150px] text-white text-center bg-[#FA8232] px-1 hover:text-black py-3'>Shop Collection</Link>
                            </div>
                            <div className="Image">
                                <Image
                                    className='w-[220px] h-[200px] absolute bottom-0 right-0 rounded-b-lg'
                                    src={'/images/image 5.png'}
                                    alt="Background Image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="offer absolute top-5 right-5 bg-yellow-400 rounded-lg h-[40px] w-[80px] flex items-center justify-center">
                                <span className="pl-1 font-normal text-[12px] block">29% SALE</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex bg-[#F2F4F5] items-center p-8 col-span-1 relative justify-between row-span-3 bg-bgRed rounded-lg" >
                        <div className="text flex justify-between items-center  gap-2 w-full ">
                            <div className="Image">
                                <Image
                                    className='w-[170px] h-[170px]  rounded-b-lg'
                                    src={'/images/image 4.png'}
                                    alt="Background Image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="text flex flex-col gap-3">
                                <p className='w-[200px] text-black text-2xl ' >Xiaomi <br /> FlipBuds Pro</p>
                                <small className=' uppercase text-sm text-sky-500 font-bold'>$100usd</small>
                                <Link href={'/shop'} className='w-[150px] text-white text-center bg-[#FA8232] px-1 hover:text-black py-3'>Shop Collection</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
