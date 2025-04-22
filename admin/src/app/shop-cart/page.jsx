import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavBar from '../components/NavBar';
import Table from './_components/Table';


const Page = () => {
    return (
        <>
            <div className="flex items-center justify-between z-50 fixed w-full h-[70px] px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <Link href="/" className="flex items-center justify-center gap-2">
                    <Image
                        className="h-[50px] w-[50px]"
                        width={100}
                        height={100}
                        src="/images/Icon-footer.png"
                        alt="dummyLogoColored"
                    />
                    <h1 className=" text-4xl font-bold text-[#fa8233]">Clicon</h1>
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className="flex pt-[70px] ">
                <NavBar />
                <Table />
            </div>
        </>
    );
}

export default Page;
