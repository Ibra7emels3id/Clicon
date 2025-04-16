import Image from 'next/image';
import React from 'react';

const SubscribeNews = () => {
    return (
        <div className="flex items-center text-center p-8 min-h-[380px] bg-gradient-to-t bg-sky-600 w-full font-[sans-serif]">
            <div className="max-w-4xl mx-auto flex flex-col gap-3=4">
                <h1 className="sm:text-3xl text-2xl font-bold text-white">
                    Subscribe to our newsletter
                </h1>
                <p className="my-4 text-sm text-gray-300 leading-relaxed max-w-[600px]">
                    Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum..
                </p>
                <div className="flex bg-white md:w-[600px] m-auto">
                    <input
                        type="email"
                        className="flex-1 px-4 py-4 border-none text-sm text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500"
                        placeholder="Enter your email address"
                    />
                    <button
                        className=" px-8 py-2 text-sm font-bold text-white  bg-[#FA8232] m-2 cursor-pointer rounded-md hover:bg-primary-600 focus:outline-none focus:ring-primary-500"
                    >
                        Subscribe
                    </button>
                </div>
                <div className="flex items-center justify-center gap-7">
                    <Image
                        src="/images/google-2015 1.png"
                        alt="Facebook"
                        width={80}
                        height={80}
                    />
                    <Image
                        src="/images/Frame.png"
                        alt="Facebook"
                        width={80}
                        height={80}
                    />
                    <Image
                        src="/images/philips 1.png"
                        alt="Facebook"
                        width={80}
                        height={80}
                    />
                    <Image
                        src="/images/toshiba-1 1.png"
                        alt="Facebook"
                        width={80}
                        height={80}
                    />
                    <Image
                        src="/images/samsung-4 1.png"
                        alt="Facebook"
                        width={80}
                        height={80}
                    />
                </div>
            </div>
        </div>

    );
}

export default SubscribeNews;
