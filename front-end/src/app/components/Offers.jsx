import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Offers = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-5 px-5 py-28 max-w-7xl m-auto">
            <div className="flex justify-between items-center bg-[#F2F4F5] p-7 gap-3 h-[300px] rounded" style={{ backgroundImage: `url('')`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
                <div className="text flex flex-col gap-3">
                    <p className='text-[10px] text-white w-[110px] flex items-center justify-center bg-sky-500 px-2 py-1 '>INTRODUCING</p>
                    <h3 className='text-yellow font-Garamond text-3xl font-semibold  w-[300px]'>New Apple HomePod Mini</h3>
                    <p className='text-gray-500 text-[12px] font-normal w-[250px]'>Jam-packed with innovation, HomePod mini delivers unexpectedly..</p>
                    <Link href={'/shop'} className=' uppercase bg-[#FA8232] hover:bg-[#363636] w-[200px] transition-all duration-300 text-white flex items-center justify-center h-12'>Shop Now</Link>
                </div>
                <div className="images">
                    <Image
                        src={'/images/cor.png'}
                        alt="Image"
                        width={250}
                        height={250}
                    />
                </div>
            </div>
            <div className="flex items-center justify-between overflow-hidden bg-[#191C1F] p-7 gap-3 h-[300px] rounded" style={{ backgroundImage: `url('')`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
                <div className="text flex flex-col gap-3">
                    <p className='text-[10px] text-white w-[110px] flex items-center justify-center bg-yellow-500 px-2 py-1 '>INTRODUCING</p>
                    <h3 className='text-white font-Garamond text-3xl font-semibold w-[250px] lg:w-[300px]'>Xiaomi Mi 11 Ultra 12GB+256GB</h3>
                    <p className='text-gray-500 text-[12px] font-normal w-[250px]'>Data provided by internal laboratories. Industry measurment...</p>
                    <Link href={'/shop'} className=' uppercase bg-[#FA8232] hover:bg-[#363636] w-[200px] transition-all duration-300 text-white flex items-center justify-center h-12'>Shop Now</Link>
                </div>
                <div className="flex w-[250px] h-full">
                    <Image
                        src={'/images/hor.png'}
                        alt="Image"
                        className='-mb-16 w-full'
                        width={350}
                        height={250}
                        objectFit='cover'
                    />
                </div>
            </div>
        </div>
    );
}

export default Offers;
