'use client'
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
        <div className='max-w-7xl mx-auto lg:px-7 px-3 py-8'>
            <div className="flex">
                <div className="w-full flex justify-between flex-wrap items-start">
                    <div className="md:p-6 p-1 w-auto lg:w-1/2">
                        <h2 className="md:text-3xl text-2xl font-semibold mb-4">What is this website about?</h2>
                        <div className='space-y-2'>
                            {data?.slice(0, 10)?.map(({ title, content, id }) => (
                                <div key={id}>
                                    <button
                                        type='button'
                                        className={`accordion-button w-full flex justify-between items-center cursor-pointer py-2 px-4 ${openIndex === id ? 'bg-[#FA8232] text-white' : 'bg-gray-100'}`}
                                        onClick={() => setOpenIndex(openIndex === id ? null : id)}
                                    >
                                        <span>{title}</span>
                                        <svg
                                            className={`transition-transform duration-300 ${openIndex === id ? 'rotate-180 text-white fill-white' : ''}`}
                                            width="16"
                                            height="16"
                                        >
                                            <path d="M1 5l7 7 7-7" stroke="black" className={`${openIndex === id ? 'stroke-white' : 'black'}`} fill="none" />
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
                    <div className="bg-yellow-100 shadow-md rounded-lg p-6 mt-4 w-auto lg:w-[500px]">
                        <h2 className="md:text-xl text-md font-semibold text-gray-700 mb-4 ">Don’t find your answer, Ask for support.</h2>
                        <p className='text-md text-gray-500 '>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis primis in faucibu raesent eget sem purus..</p>
                        <div className="form">
                            <input type="email" placeholder="Enter your Email" name='email' className="border border-gray-300 bg-white focus:outline-none rounded-lg p-2 w-full mt-4" />
                            <input type="subject" placeholder="Subject" name='subject' className="border border-gray-300 bg-white focus:outline-none rounded-lg p-2 w-full mt-4" />
                            <textarea placeholder="Your Message" name='message' className="border border-gray-300 bg-white focus:outline-none rounded-lg p-2 w-full mt-4" rows="4"></textarea>
                            <button className="bg-[#FA8232] w-full text-white rounded px-4 py-2 mt-4">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;


