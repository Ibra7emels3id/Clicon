'use client'
import Link from 'next/link';
import React from 'react';

const Help = () => {
    const [show, setShow] = React.useState(false);
    return (
        <div className="relative hidden max-md:flex">
            <p onClick={() => {
                setShow(!show)
            }} className='px-3 cursor-pointer bg-zinc-200 py-1 rounded-md flex items-center justify-center gap-2'>All Help
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(90)"
                    className='w-5'
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                            d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                            fill="#0F0F0F"
                        />{" "}
                    </g>
                </svg>
            </p>
            <ul className={`${show ? 'flex opacity-[10]' : 'hidden'} bg-gray-200 opacity-0 transition-all duration-300 absolute top-10 left-0 w-[200px] z-50 p-1  flex-col gap-2 rounded`}>
                <li className='hover:bg-white p-2 rounded'>
                    <Link onClick={() => setShow(false)} href={'/order/track-order'} className='flex items-center gap-1 text-gray-700 text-sm'>
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
                </li>
                <li className='hover:bg-white p-2 rounded'>
                    <Link onClick={() => setShow(false)} href={'/order/track-order'} className='flex items-center gap-1 text-gray-700 text-sm'>
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
                </li>
                <li className='hover:bg-white p-2 rounded' >
                    <Link onClick={() => setShow(false)} href={'/customer-support'} className='flex items-center gap-1  text-sm text-gray-700'>
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
                        <p>Customer Support</p>
                    </Link>
                </li>
                <li className='hover:bg-white p-2 rounded' >
                    <Link onClick={() => setShow(false)} href={'/about'} className='flex items-center gap-1  text-sm text-gray-700'>
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
                </li>
                <li className='hover:bg-white p-2 rounded' >
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
                </li>
                <li className='hover:bg-white p-2 rounded'>
                    <Link onClick={() => setShow(false)} href={'/FAQs'} className='flex items-center gap-1 text-sm text-gray-700'>
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
                </li>
            </ul>
        </div>
    );
}

export default Help;
