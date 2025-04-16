import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Discount = () => {
    return (
        <div className=" p-3 md:p-10">
            <div className="bg-gradient-to-r  rounded-xl bg-[#FFE7D6] p-2 font-[sans-serif]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 p-4">
                    <div className="w-full flex flex-col gap-5 text-center lg:text-left">
                        <span className='bg-sky-500 max-lg:m-auto px-3 py-1 w-[150px] flex items-center justify-center text-[12px] text-white'>SAVE UP TO $200.00</span>
                        <h2 className="text-gray-800 text-4xl font-extrabold">
                            Macbook Pro
                        </h2>
                        <p className="text-md  text-gray-500">
                            Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
                        </p>
                        <Link href={'/'} className='bg-[#FA8232] max-lg:m-auto w-[150px] flex items-center justify-center py-2 text-lg text-white'>Shop now</Link>
                    </div>
                    <div className="w-full max-lg:max-w-lg">
                        <Image
                            src={'/images/laptopA.png'}
                            alt="Laptop A"
                            width={300}
                            height={300}
                            className="object-cover w-[500px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discount;
