import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='flex items-center justify-center h-[450px] max-md:px-3'>
            <div className="flex flex-col gap-4 items-center justify-center">
                <Image
                    src={'/images/success.png'}
                    alt="Success"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
                <h1 className="text-4xl font-bold">Success!</h1>
                <p className="mt-2 text-sm text-gray-600 w-1/2 m-auto text-center">Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</p>
                <div className="btn mt-4 flex items-center justify-center gap-4 w-full">
                    <Link href="/" className="hover:text-white w-full text-center text-[#FA8232] px-5 py-3 bg-white border border-[#FA8232] hover:bg-[#FA8232]">Back to Home</Link>
                    <Link href="/order" className="text-white w-full text-center hover:text-[#FA8232] px-5 py-3 bg-[#FA8232] border border-[#FA8232] hover:bg-white">Go to Order</Link>
                </div>
            </div>
        </div>
    );
}

export default Page;
