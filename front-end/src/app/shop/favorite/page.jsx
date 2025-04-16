import React from 'react';
import Table from './_components/Table';

const Page = () => {
    return (
        <div className='max-w-7xl px-2 lg:px-7 my-3 m-auto'>
            <div className="flex flex-col w-full mt-4">
                <div className="title">
                    <h2 className="text-3xl font-bold text-gray-900 capitalize">favorite.</h2>
                </div>
                <div className="w-full mt-5 flex flex-col gap-4">
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Page;
