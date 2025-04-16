'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const BtnNavList = () => {
    const [isOpen, setIsOpen] = useState(false);


    // Handle Hidden Scroll 
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => document.body.style.overflow = 'auto'
    }, [isOpen]);



    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className='pl-4 cursor-pointer' type='button'>
                <svg
                    className="w-8 h-8"
                    fill="#eee"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className={`fixed top-0 right-0 w-1/2 h-screen bg-white text-white transition-transform duration-300 ease-in-out transform shadow ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
                <div className="flex relative flex-col items-center justify- h-full space-y-4">
                    <Link href={'/'} className="text-3xl flex items-center justify-center gap-2 font-bold w-full text-center py-10 cursor-pointer ">
                        <Image
                            src="/images/Icon-1.png"
                            alt="logo"
                            className="w-14"
                            height={20}
                            width={20}
                        />
                        <h1 className='text-3xl font-bold text-sky-600 '>Clicon</h1>
                    </Link>
                    <ul className='flex flex-col items-center h-full w-full space-y-4 p-1'>
                        <li className="text-lg font-bold hover:bg-zinc-100 text-zinc-800 w-full text-center py-3 cursor-pointer ">
                            <Link onClick={() => setIsOpen(false)} href={'/'} className='w-full'>Home</Link>
                        </li>
                        <li className="text-lg font-bold hover:bg-zinc-100 text-zinc-800 w-full text-center py-3 cursor-pointer ">
                            <Link onClick={() => setIsOpen(false)} href={'/shop'} className='w-full'>Shop</Link>
                        </li>
                        <li className="text-lg font-bold hover:bg-zinc-100 text-zinc-800 w-full text-center py-3 cursor-pointer ">
                            <Link onClick={() => setIsOpen(false)} href={'/about'} className='w-full'>About</Link>
                        </li>
                        <li className="text-lg font-bold hover:bg-zinc-100 text-zinc-800 w-full text-center py-3 cursor-pointer ">
                            <Link onClick={() => setIsOpen(false)} href={'/services'} className='w-full'>Services</Link>
                        </li>
                        <li className="text-lg font-bold hover:bg-zinc-100 text-zinc-800 w-full text-center py-3 cursor-pointer ">
                            <Link onClick={() => setIsOpen(false)} href={'/contact'} className='w-full'>Contact</Link>
                        </li>
                        <li className="text-lg font-bold hover:bg-zinc-100 text-zinc-800 w-full text-center py-3 cursor-pointer ">
                            <Link onClick={() => setIsOpen(false)} href={'/blog'} className='w-full'>Blog</Link>
                        </li>
                        <li className="text-lg font-bold hover:bg-zinc-100 text-zinc-800 w-full text-center py-3 cursor-pointer ">
                            <Link onClick={() => setIsOpen(false)} href={'/FAQs'} className='w-full'>FAQ</Link>
                        </li>
                    </ul>
                    <button className="flex absolute top-10 -left-6 p-1 border-2 border-white cursor-pointer bg-sky-600 rounded-full" onClick={() => setIsOpen(false)}>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            transform="rotate(0)matrix(1, 0, 0, -1, 0, 0)"
                            className='w-8'
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                                    stroke="#ffffff"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />{" "}
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default BtnNavList;
