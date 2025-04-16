'use client'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const FormLocation = () => {
    const pathName = usePathname()



    return (
        <div className='bg-[#F2F4F5] py-3'>
            <div className=" max-w-7xl px-3 lg:px-5 m-auto">
                <p className='flex items-center gap-2 '>
                    <svg viewBox="0 0 24 24" fill="none" className='w-5' xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                                stroke="#000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />{" "}
                            <path d="M15 18H9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />{" "}
                        </g>
                    </svg>
                    Home
                    {pathName.split('/')?.map((segment, index , arr) => (
                        <span key={index} className="flex items-center gap-1">
                            <p className={index === arr.length - 1 ? 'text-sky-600' : 'text-gray-700'}>{segment}</p>
                            {index !== pathName.split('/')?.length - 1 && (
                                <Image
                                    src={'/images/CaretRight.png'}
                                    alt='icons-image'
                                    width={12}
                                    height={12}
                                />
                            )}
                        </span>
                    ))}

                </p>
            </div>
        </div>
    );
}

export default FormLocation;
