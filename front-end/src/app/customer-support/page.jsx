'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Page = () => {
    const [openIndex, setOpenIndex] = useState(null);


    // Handle Data
    const data = [
        {
            id: 1,
            title: 'How do I place an order?',
            content: 'Browse products, add them to your cart, and proceed to checkout to complete your order.'
        },
        {
            id: 2,
            title: 'What payment methods do you accept?',
            content: 'We accept credit/debit cards (Visa, MasterCard), cash on delivery, and digital wallets.'
        },
        {
            id: 3,
            title: 'Can I track my order?',
            content: 'Yes, you’ll receive a tracking link via email or SMS once your order is shipped.'
        },
        {
            id: 4,
            title: 'How long does delivery take?',
            content: 'Delivery usually takes 2–5 business days, depending on your location.'
        },
        {
            id: 5,
            title: 'Can I return a product?',
            content: 'Yes, returns are accepted within 14 days if the item is unused and in original condition.'
        },
        {
            id: 6,
            title: 'Are there any shipping fees?',
            content: 'Yes, shipping fees vary by location and are shown during checkout.'
        },
        {
            id: 7,
            title: 'What if I receive a damaged item?',
            content: 'Please contact us immediately. We’ll arrange a replacement or a refund as needed.'
        },
        {
            id: 8,
            title: 'Can I edit my order after placing it?',
            content: 'Yes, you can modify your order within 1 hour by contacting our support team.'
        },
        {
            id: 9,
            title: ' Are the products authentic?',
            content: 'Yes, all our products are 100% original and guaranteed.'
        },
        {
            id: 10,
            title: 'Can I send an order as a gift?',
            content: 'Yes, you can enter a different shipping address and choose gift wrapping at checkout.'
        },
    ];




    return (
        <>
            <div className='max-w-7xl m-auto lg:px-7 px-3 '>
                <div className="flex flex-col w-full">
                    <div className="head flex items-center justify-center md:justify-between max-md:flex-wrap mt-8 pb-7 border-b border-gray-200">
                        <div className="text space-y-4 flex flex-col max-md:items-center justify-center max-md:w-full ">
                            <span className='bg-yellow-300 font-bold rounded px-3 py-1 text-[12px] w-[120px] flex items-center justify-center'>HELP CENTER</span>
                            <h2 className='text-2xl md:text-4xl font-bold'>How we can help you!</h2>
                            <form className=' relative border border-gray-200 h-12 w-[100%] md:w-[500px]' >
                                <svg viewBox="0 0 24 24" className='w-5 absolute top-[10%] h-[80%] left-2 text-sm' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                                            stroke="#FA8232"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />{" "}
                                    </g>
                                </svg>
                                <input className='h-full outline-none focus:outline px-2 absolute left-6 w-[90%]' type="search" name="ket_World" id="ket_World" placeholder='Enter your question or keyword' />
                                <button className='bg-[#FA8232] absolute right-2 top-[10%] h-[80%] px-3 rounded text-white'>Search</button>
                            </form>
                        </div>
                        <div className="image">
                            <Image
                                src={'/images/Rectangle 16.png'}
                                width={450}
                                height={450}
                                alt='image Support'
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-10">
                        <div className="title text-center">
                            <h3 className='font-bold text-3xl'>What can we assist you with today?</h3>
                        </div>
                        <div className="items grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 mt-10">
                            <div className="flex items-center gap-3 border border-[#FA8232] p-2">
                                <div className="icon">
                                    <Image
                                        src={'/images/Truck.png'}
                                        width={30}
                                        height={30}
                                        alt='icon-truck'
                                    />
                                </div>
                                <div className="text">
                                    <h4>Track Order</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 border border-[#FA8232] p-2">
                                <div className="icon">
                                    <Image
                                        src={'/images/LockOpen.png'}
                                        width={30}
                                        height={30}
                                        alt='icon-truck'
                                    />
                                </div>
                                <div className="text">
                                    <h4>Reset Password</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 border border-[#FA8232] p-2">
                                <div className="icon">
                                    <Image
                                        src={'/images/CalendarBlank.png'}
                                        width={30}
                                        height={30}
                                        alt='icon-truck'
                                    />
                                </div>
                                <div className="text">
                                    <h4>Payment Option</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 border border-[#FA8232] p-2">
                                <div className="icon">
                                    <Image
                                        src={'/images/User.png'}
                                        width={30}
                                        height={30}
                                        alt='icon-truck'
                                    />
                                </div>
                                <div className="text">
                                    <h4>User & Account</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 border border-[#FA8232] p-2">
                                <div className="icon">
                                    <Image
                                        src={'/images/Stack.png'}
                                        width={30}
                                        height={30}
                                        alt='icon-truck'
                                    />
                                </div>
                                <div className="text">
                                    <h4>Wishlist & Compare</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 border border-[#FA8232] p-2">
                                <div className="icon">
                                    <Image
                                        src={'/images/Notepad.png'}
                                        width={30}
                                        height={30}
                                        alt='icon-truck'
                                    />
                                </div>
                                <div className="text">
                                    <h4>Shipping & Billing</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 border border-[#FA8232] p-2">
                                <div className="icon">
                                    <Image
                                        src={'/images/CreditCard-1.png'}
                                        width={30}
                                        height={30}
                                        alt='icon-truck'
                                    />
                                </div>
                                <div className="text">
                                    <h4>Shoping Cart & Wallet</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 border border-[#FA8232] p-2">
                                <div className="icon">
                                    <Image
                                        src={'/images/Storefront.png'}
                                        width={30}
                                        height={30}
                                        alt='icon-truck'
                                    />
                                </div>
                                <div className="text">
                                    <h4>Sell on Clicon</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-14">
                        <div className="title text-center">
                            <h3 className='font-bold text-3xl'>Popular Topics</h3>
                        </div>
                        <div className="accordion grid grid-cols-1 lg:grid-cols-2 gap-4  mt-10">
                            <div className='space-y-2'>
                                {data.slice(0, 5).map(({ title, content, id }) => (
                                    <div key={id}>
                                        <button
                                            type='button'
                                            className="accordion-button w-full flex justify-between items-center cursor-pointer py-2 px-4 bg-gray-100"
                                            onClick={() => setOpenIndex(openIndex === id ? null : id)}
                                        >
                                            <span>{title}</span>
                                            <svg
                                                className={`transition-transform duration-300 ${openIndex === id ? 'rotate-180' : ''}`}
                                                width="16"
                                                height="16"
                                            >
                                                <path d="M1 5l7 7 7-7" stroke="black" fill="none" />
                                            </svg>
                                        </button>
                                        <div
                                            className={`accordion-content overflow-hidden transition-all duration-300`}
                                            style={{
                                                maxHeight: openIndex === id ? '1000px' : '0px',
                                            }}
                                        >
                                            <div className="p-4 text-gray-600">{content}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='space-y-2'>
                                {data.slice(5, 10).map(({ title, content, id }) => (
                                    <div key={id}>
                                        <button
                                            type='button'
                                            className="accordion-button w-full flex justify-between items-center cursor-pointer py-2 px-4 bg-gray-100"
                                            onClick={() => setOpenIndex(openIndex === id ? null : id)}
                                        >
                                            <span>{title}</span>
                                            <svg
                                                className={`transition-transform duration-300 ${openIndex === id ? 'rotate-180' : ''}`}
                                                width="16"
                                                height="16"
                                            >
                                                <path d="M1 5l7 7 7-7" stroke="black" fill="none" />
                                            </svg>
                                        </button>
                                        <div
                                            className={`accordion-content overflow-hidden transition-all duration-300`}
                                            style={{
                                                maxHeight: openIndex === id ? '1000px' : '0px',
                                            }}
                                        >
                                            <div className="p-4 text-gray-600">{content}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#eee] py-5 mt-10">
                <div className="title text-center">
                    <p className='bg-sky-600 px-3 py-2 w-[100px] m-auto text-white text-[10px] '>CONTACT US</p>
                    <h3 className='font-bold text-3xl mt-5'>Don’t find your answer.
                    <br/>Contact with us</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl m-auto md:px-7 px-3 gap-5 mt-10">
                    <div className="box flex  bg-white p-5 gap-5 rounded shadow">
                        <div className="icon bg-[#EAF6FE] w-[110px] h-[90px] rounded flex items-center justify-center">
                            <Image
                                src={'/images/PhoneCall.png'}
                                width={40}
                                height={40}
                                alt='icon-contact'
                            />
                        </div>
                        <div className="text space-y-3">
                            <span className='font-bold'>Call us now</span>
                            <p className='font-normal text-gray-500 text-[14px] w-[70%] block mt-2'>we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p>
                            <small className='block text-lg font-medium'>+1-202-555-0126</small>
                            <button type="button" className='bg-sky-600 hover:bg-sky-700 text-white w-[120px] cursor-pointer py-2'>Call now</button>
                        </div>
                    </div>
                    <div className="box flex  bg-white p-5 gap-5 rounded shadow">
                        <div className="icon bg-[#EAF7E9] w-[110px] h-[90px] rounded flex items-center justify-center">
                            <Image
                                src={'/images/ChatCircleDots-1.png'}
                                width={40}
                                height={40}
                                alt='icon-contact'
                            />
                        </div>
                        <div className="text space-y-3">
                            <span className='font-bold'>Call us now</span>
                            <p className='font-normal text-gray-500 text-[14px] w-[70%] block mt-2'>we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p>
                            <small className='block text-lg font-medium'>+1-202-555-0126</small>
                            <button type="button" className='bg-[#2DB224] hover:bg-[#2DB228] text-white w-[120px] cursor-pointer py-2'>Call now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
