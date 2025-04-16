'use client'
import React, { useEffect, useState } from 'react';
import SearchData from './SearchData';

const BtnSearch = () => {
    const [isOpen, setIsOpen] = useState(false)


    // Hidden Scroll Body
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
            <button onClick={() => setIsOpen(!isOpen)} className="block px-4 py-2 text-sm font-bold text-gray-700 hover:text-gray-900">
                <svg viewBox="0 0 24 24" fill="none" className='w-6 h-6' xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                            d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                            stroke="#ffffff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />{" "}
                    </g>
                </svg>
            </button>
            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col h-screen z-50 fixed top-0 left-0 bg-[#00000098] w-full`}>
                <button onClick={() => setIsOpen(false)} className='my-5 flex items-center justify-end mr-7' type="button">
                    <svg className='w-12' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                                fill="#1C274C"
                                className='fill-[#FA8232]'
                            />{" "}
                        </g>
                    </svg>
                </button>
                <div className="flex h-12 w-full px-3">
                    <SearchData setIsOpen={setIsOpen} />
                </div>
            </div>
        </>
    );
}

export default BtnSearch;
