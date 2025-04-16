import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Account from './Account'
import Help from './Help';
import AllCategory from './AllCategory';
import ButtonCart from './ButtonCart';
import Wishlist from './wishlist';
import SearchData from './SearchData';
import BtnSearch from './BtnSearch';
import BtnNavList from './BtnNavList';

const Header = async () => {
    const session = await getServerSession(authOptions);

    // console.log(session);

    return (
        <>
            <header className="shadow-md bg-sky-600 font-[sans-serif] tracking-wide relative z-50">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className="flex items-center px-2 flex-wrap max-sm:justify-center py-1 gap-2 md:px-10 justify-between w-full max-w-7xl m-auto   min-h-[45px] ">
                            <div className="">
                                <h3 className='text-[12px] text-gray-400'>Welcome to Clicon online eCommerce store. </h3>
                            </div>
                            <div className="flex items-center space-x-2">
                                <p className='text-white text-[12px] font-normal'>follow us:</p>
                                <div className="icons flex items-center justify-center gap-2">
                                    <Link href="facebook.com">
                                        <svg
                                            className='w-5 h-5'
                                            fill="#fff"
                                            height="200px"
                                            width="200px"
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="-143 145 512 512"
                                            xmlSpace="preserve"
                                            stroke="#fff"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3 v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2 c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z" />{" "}
                                            </g>
                                        </svg>
                                    </Link>
                                    <Link href="facebook.com">
                                        <svg
                                            className='w-5 h-5'
                                            fill="#fff"
                                            height="200px"
                                            width="200px"
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="-143 145 512 512"
                                            xmlSpace="preserve"
                                            stroke="#fff"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2 c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7 c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9 C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5 c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6 c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z" />{" "}
                                            </g>
                                        </svg>

                                    </Link>
                                    <Link href="facebook.com">
                                        <svg
                                            className='w-5 h-5'
                                            fill="#fff"
                                            height="200px"
                                            width="200px"
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="-143 145 512 512"
                                            xmlSpace="preserve"
                                            stroke="#fff"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <g>
                                                    {" "}
                                                    <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z" />{" "}
                                                    <polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 " />{" "}
                                                    <path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z" />{" "}
                                                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8 c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157 c27.3,0,49.5,22.2,49.5,49.5V374.7z" />{" "}
                                                </g>{" "}
                                            </g>
                                        </svg>

                                    </Link>
                                    <Link href="facebook.com">
                                        <svg
                                            className='w-5 h-5'
                                            fill="#fff"
                                            height="200px"
                                            width="200px"
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="-143 145 512 512"
                                            xmlSpace="preserve"
                                            stroke="#fff"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <g>
                                                    {" "}
                                                    <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 " />{" "}
                                                    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8 c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1 V446.8z" />{" "}
                                                </g>{" "}
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='text-zinc-400' />
                    <div className="flex justify-between px-4 md:px-10 py-3 relative max-w-7xl m-auto w-full">
                        <Link href="/" className="flex items-center justify-center space-x-2">
                            <Image
                                src="/images/Icon.png"
                                alt="logo"
                                className="md:w-[45px] w-12"
                                height={20}
                                width={20}
                            />
                            <h1 className='text-2xl font-bold text-white '>Clicon</h1>
                        </Link>
                        <div className="flex max-lg:hidden">
                            <SearchData />
                        </div>
                        <div id="collapseMenu" className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
                            <div className="flex items-center justify-center">
                                <ButtonCart />
                                <Wishlist />
                                {
                                    session ? <Account /> : <Link href="/User-Account/sign-in" className="block px-4 py-2 text-sm font-bold  text-gray-700 hover:text-gray-900">
                                        <span className="relative">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer  hover:fill-yellow inline-block w-7">
                                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                <g id="SVGRepo_iconCarrier">
                                                    {" "}
                                                    <path
                                                        d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                                        stroke='#fff'
                                                        strokeWidth={1}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />{" "}
                                                </g>
                                            </svg>
                                        </span>
                                    </Link>
                                }
                            </div>
                        </div>
                        <div id="toggleOpen" className="flex justify-center items-center lg:hidden">
                            <div className="search flex items-center justify-center">
                                <BtnSearch />
                            </div>
                            {session?.user ? (
                                <>
                                    <ButtonCart />
                                    <Wishlist />
                                </>
                            ) : (
                                <Link href="/User-Account/sign-in" className="block px-4 py-2 text-sm font-bold  text-gray-700 hover:text-gray-900">
                                    <span className="relative">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer  hover:fill-yellow inline-block w-7">
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path
                                                    d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                                    stroke='#fff'
                                                    strokeWidth={1}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />{" "}
                                            </g>
                                        </svg>
                                    </span>
                                </Link>
                            )}
                            <div>
                                <BtnNavList />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className=" m-auto border-b border-gray-300">
                <div className="flex items-center justify-between px-2 md:px-5 max-w-7xl m-auto w-full py-3">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4">
                            <div className="list px-2 py-1 rounded-md" >
                                <AllCategory />
                            </div>
                            <Help />
                            <div className="hidden gap-2 lg:gap-4 md:flex">
                                <Link href={'/shop'} className='flex items-center gap-1 text-gray-700 text-sm'>
                                    <svg viewBox="0 0 24 24" className='w-5 h-5' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                                stroke="#000000"
                                                className='stroke-gray-700'
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />{" "}
                                        </g>
                                    </svg>
                                    <p>Shop</p>
                                </Link>
                                <Link href={'/order/track-order'} className='flex items-center gap-1 text-gray-700 text-sm'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-5 stroke-gray-700'>
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                                stroke="#000000"
                                                className='stroke-gray-700'
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />{" "}
                                            <path
                                                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                                stroke="#000000"
                                                strokeWidth={2}
                                                className='stroke-gray-700'
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />{" "}
                                        </g>
                                    </svg>
                                    <p>Track Order</p>
                                </Link>
                                <Link href={'/customer-support'} className='flex items-center gap-1  text-sm text-gray-700'>
                                    <svg
                                        viewBox="0 0 512 512"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        className='w-5 fill-gray-700'
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <title>support</title>{" "}
                                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                {" "}
                                                <g
                                                    id="support"
                                                    className=' fill-gray-700'
                                                    transform="translate(42.666667, 42.666667)"
                                                >
                                                    {" "}
                                                    <path d="M379.734355,174.506667 C373.121022,106.666667 333.014355,-2.13162821e-14 209.067688,-2.13162821e-14 C85.1210217,-2.13162821e-14 45.014355,106.666667 38.4010217,174.506667 C15.2012632,183.311569 -0.101643453,205.585799 0.000508304259,230.4 L0.000508304259,260.266667 C0.000508304259,293.256475 26.7445463,320 59.734355,320 C92.7241638,320 119.467688,293.256475 119.467688,260.266667 L119.467688,230.4 C119.360431,206.121456 104.619564,184.304973 82.134355,175.146667 C86.4010217,135.893333 107.307688,42.6666667 209.067688,42.6666667 C310.827688,42.6666667 331.521022,135.893333 335.787688,175.146667 C313.347976,184.324806 298.68156,206.155851 298.667688,230.4 L298.667688,260.266667 C298.760356,283.199651 311.928618,304.070103 332.587688,314.026667 C323.627688,330.88 300.801022,353.706667 244.694355,360.533333 C233.478863,343.50282 211.780225,336.789048 192.906491,344.509658 C174.032757,352.230268 163.260418,372.226826 167.196286,392.235189 C171.132153,412.243552 188.675885,426.666667 209.067688,426.666667 C225.181549,426.577424 239.870491,417.417465 247.041022,402.986667 C338.561022,392.533333 367.787688,345.386667 376.961022,317.653333 C401.778455,309.61433 418.468885,286.351502 418.134355,260.266667 L418.134355,230.4 C418.23702,205.585799 402.934114,183.311569 379.734355,174.506667 Z M76.8010217,260.266667 C76.8010217,269.692326 69.1600148,277.333333 59.734355,277.333333 C50.3086953,277.333333 42.6676884,269.692326 42.6676884,260.266667 L42.6676884,230.4 C42.6676884,224.302667 45.9205765,218.668499 51.2010216,215.619833 C56.4814667,212.571166 62.9872434,212.571166 68.2676885,215.619833 C73.5481336,218.668499 76.8010217,224.302667 76.8010217,230.4 L76.8010217,260.266667 Z M341.334355,230.4 C341.334355,220.97434 348.975362,213.333333 358.401022,213.333333 C367.826681,213.333333 375.467688,220.97434 375.467688,230.4 L375.467688,260.266667 C375.467688,269.692326 367.826681,277.333333 358.401022,277.333333 C348.975362,277.333333 341.334355,269.692326 341.334355,260.266667 L341.334355,230.4 Z">
                                                        {" "}
                                                    </path>{" "}
                                                </g>{" "}
                                            </g>{" "}
                                        </g>
                                    </svg>
                                    <p>Support</p>
                                </Link>
                                <Link href={'/about'} className='flex items-center gap-1  text-sm text-gray-700'>
                                    <svg viewBox="0 0 24 24" className='w-5' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <circle cx={12} cy={12} r={10} stroke="#000" className='stroke-gray-700' strokeWidth="1.5" />{" "}
                                            <path d="M12 17V11" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />{" "}
                                            <circle cx={1} cy={1} r={1} transform="matrix(1 0 0 -1 11 9)" fill="#000" />{" "}
                                        </g>
                                    </svg>
                                    <p>About Us</p>
                                </Link>
                                <Link href={'/blog'} className='flex items-center gap-1  text-sm text-gray-700'>
                                    <svg fill="#000000" className='w-6 fill-gray-700' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            <title />
                                            <path d="M42,57H22A15,15,0,0,1,7,42V22A15,15,0,0,1,22,7H35A15,15,0,0,1,50,22v.5A2.5,2.5,0,0,0,52.5,25,4.5,4.5,0,0,1,57,29.5V42A15,15,0,0,1,42,57ZM22,9A13,13,0,0,0,9,22V42A13,13,0,0,0,22,55H42A13,13,0,0,0,55,42V29.5A2.5,2.5,0,0,0,52.5,27,4.5,4.5,0,0,1,48,22.5V22A13,13,0,0,0,35,9Z" />
                                            <path d="M35.5,27h-11a4.5,4.5,0,0,1,0-9h11a4.5,4.5,0,0,1,0,9Zm-11-7a2.5,2.5,0,0,0,0,5h11a2.5,2.5,0,0,0,0-5Z" />
                                            <path d="M41.5,45h-17a4.5,4.5,0,0,1,0-9h17a4.5,4.5,0,0,1,0,9Zm-17-7a2.5,2.5,0,0,0,0,5h17a2.5,2.5,0,0,0,0-5Z" />
                                        </g>
                                    </svg>
                                    <p>Blog</p>
                                </Link>
                                <Link href={'/FAQs'} className='flex items-center gap-1 text-sm text-gray-700'>
                                    <svg viewBox="0 0 24 24" className='w-5' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <circle cx={12} cy={12} r={10} stroke="#000" className='stroke-gray-700' strokeWidth="1.5" />{" "}
                                            <path d="M12 17V11" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />{" "}
                                            <circle cx={1} cy={1} r={1} transform="matrix(1 0 0 -1 11 9)" fill="#000" />{" "}
                                        </g>
                                    </svg>
                                    <p>Need Help</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="tell">
                        <Link href="tel:+1-123-456-7890" className='flex items-center gap-1 text-gray-700'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-7'>
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M15 4V5C15 6.88562 15 7.82843 15.5858 8.41421C16.1716 9 17.1144 9 19 9H20.5M20.5 9L18 7M20.5 9L18 11"
                                        className='stroke-gray-700'
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                    <path
                                        d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                                        className='fill-gray-700'
                                    />{" "}
                                </g>
                            </svg>
                            <p className='flex max-lg:hidden'>+1-123-456-7890</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
