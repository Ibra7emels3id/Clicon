import React from 'react';
import CartData from './_components/CartData';

const Page = () => {
    return (
        <div className="max-w-7xl max-md:max-w-xl mx-auto px-4 lg:px-6 py-4">
            <h1 className="text-2xl font-bold text-slate-900">Your Cart.</h1>
            <CartData />
        </div>
    );
}

export default Page;
