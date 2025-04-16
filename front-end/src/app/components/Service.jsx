import Image from 'next/image';
import React from 'react';

const Service = () => {
    return (
        <div className='max-w-7xl px-5 m-auto mb-10'>
            <div className="flex flex-wrap  gap-y-5 border border-gray-300 items-center justify-between p-5 w-full">
                <div className="box flex items-center justify-start gap-2 w-[250px] ">
                    <Image
                        className="h-10 w-10 rounded-full object-cover"
                        src="/images/Package.png"
                        alt="Placeholder"
                        width={100}
                        height={100}
                    />
                    <div className="text">
                        <h3 className="text-md font-semibold">Fasted Delivery</h3>
                        <p className="text-gray-500 text-sm">Delivery in 24/H</p>
                    </div>
                </div>
                <div className="box flex items-center justify-start gap-2 w-[250px]  ">
                    <Image
                        className="h-10 w-10 rounded-full object-cover"
                        src="/images/Trophy.png"
                        alt="Placeholder"
                        width={100}
                        height={100}
                    />
                    <div className="text">
                        <h3 className="text-md font-semibold">24 Hours Return</h3>
                        <p className="text-gray-500 text-sm">100% money-back guarantee</p>
                    </div>
                </div>
                <div className="box flex items-center justify-start gap-2 w-[250px]  ">
                    <Image
                        className="h-10 w-10 rounded-full object-cover"
                        src="/images/CreditCard.png"
                        alt="Placeholder"
                        width={100}
                        height={100}
                    />
                    <div className="text">
                        <h3 className="text-md font-semibold">Secure Payment</h3>
                        <p className="text-gray-500 text-sm">Your money is safe</p>
                    </div>
                </div>
                <div className="box flex items-center justify-start gap-2 w-[250px]  ">
                    <Image
                        className="h-10 w-10 rounded-full object-cover"
                        src="/images/Headphones.png"
                        alt="Placeholder"
                        width={100}
                        height={100}
                    />
                    <div className="text">
                        <h3 className="text-md font-semibold">Support 24/7</h3>
                        <p className="text-gray-500 text-sm">Live contact/message</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
