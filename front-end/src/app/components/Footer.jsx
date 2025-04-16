import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="font-sans tracking-wide bg-[#191C1F] px-8 py-12 mt-15">
                <div className="flex flex-col max-w-7xl m-auto text-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
                        <div>
                            <Link href="/" className="flex uppercase items-center justify-start space-x-2">
                                <Image
                                    src="/images/Icon-footer.png"
                                    alt="logo"
                                    className="md:w-[40px] w-12"
                                    height={20}
                                    width={20}
                                />
                                <h1 className='text-3xl font-bold text-white '>Clicon</h1>
                            </Link>
                            <div className="flex flex-col mt-3 gap-2 p-2">
                                <div className="flex flex-col">
                                    <p className='text-gray-500 text-[12px]'>Customer Supports:</p>
                                    <small className='text-gray-100 text-lg'>(629) 555-0129</small>
                                </div>
                                <div className="flex flex-col">
                                    <p className='text-[14px] text-gray-500'>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                </div>
                                <div className="flex flex-col">
                                    <a href={'mailto:info@kinbo.com'} className='text-md text-gray-200'>info@kinbo.com</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-gray-100 uppercase text-xl relative max-sm:cursor-pointer">
                                Top Category
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    className="sm:hidden absolute right-0 top-1 fill-[#000]"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                        data-name={16}
                                        data-original="#000000"
                                    />
                                </svg>
                            </h4>
                            <ul className="mt-6 space-y-5">
                                <li>
                                    <Link
                                        href="/"
                                        className=" text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        Computer & Laptop
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        SmartPhone
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        Headphone
                                    </Link>
                                </li>
                                <li>
                                    <p
                                        className=" text-light font-semibold text-lg"
                                    >
                                        --Accessories
                                    </p>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        Camera & Photo
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        TV & Homes
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-light text-yellow-500 font-semibold text-[12px]"
                                    >
                                        Browse All Product
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white uppercase text-xl relative max-sm:cursor-pointer">
                                Quick links
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                        data-name={16}
                                        data-original="#000000"
                                    />
                                </svg>
                            </h4>
                            <ul className="space-y-5 mt-6 max-sm:hidden">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        Shop Product
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        Shoping Cart
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        Wishlist
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        Compare
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        Track Order
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        Customer Help
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 text-light font-semibold text-[12px]"
                                    >
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <>
                                <h4 className="text-white uppercase text-xl relative max-sm:cursor-pointer">
                                    Download APP
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16px"
                                        height="16px"
                                        className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                            data-name={16}
                                            data-original="#000000"
                                        />
                                    </svg>
                                </h4>
                                <ul className="mt-6 space-y-5">
                                    <li>
                                        <Link
                                            href="javascript:void(0)"
                                            className="hover:text-black text-light font-semibold text-md"
                                        >
                                            <Image
                                                src={'/images/MobileGoogle.png'}
                                                alt="Google Play Store"
                                                width={180}
                                                height={70}
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="javascript:void(0)"
                                            className="hover:text-black text-light font-semibold text-md"
                                        >
                                            <Image
                                                src={'/images/MobileApp.png'}
                                                alt="Google Play Store"
                                                width={180}
                                                height={70}
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </>

                        </div>
                        <div>
                            <h4 className="text-white uppercase text-xl relative  max-sm:cursor-pointer">
                                Popular Tag
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                        data-name={16}
                                        data-original="#000000"
                                    />
                                </svg>
                            </h4>
                            <ul className="space-y-5 mt-6 max-sm:hidden">
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="hover:text-black text-light font-semibold text-md"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="hover:text-black text-light font-semibold text-md"
                                    >
                                        Partners
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="hover:text-black text-light font-semibold text-md"
                                    >
                                        Sitemap
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="hover:text-black text-light font-semibold text-md"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="hover:text-black text-light font-semibold text-md"
                                    >
                                        News
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-10 border-gray-400" />
                    <div className="flex flex-wrap max-md:flex-col gap-4">
                        <ul className="md:flex md:space-x-6 max-md:space-y-2">
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="hover:text-black text-light text-md"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="hover:text-black text-light text-md"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="hover:text-black text-light text-md"
                                >
                                    Security
                                </a>
                            </li>
                        </ul>
                        <p className="text-gray-700 font-semibold text-sm md:ml-auto">
                            © FoodMart. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;