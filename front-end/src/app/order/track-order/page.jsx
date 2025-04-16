'use client'
import FormLocation from '@/app/components/FormLocation';
import { FetchOrderId } from '@/lib/features/Order/SearchOrder';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
    const [formData, setFormData] = useState({});
    const { orderId } = useAppSelector((state) => state.orderId)
    const dispatch = useAppDispatch()
    const Router = useRouter()

    // Handle Search Order
    const HandleSearchOrder = async (e) => {
        e.preventDefault()
        try {
            await dispatch(FetchOrderId({ formData }))
        } catch (error) {
            console.error(error.message)
        }
    };


    return (
        <>
            <FormLocation />
            <div className='max-w-7xl m-auto px-3 mt-6 lg:px-5'>
                <div className="title w-full md:w-8/12">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Track Order
                    </h2>
                    <p className='mt-3 text-gray-600 text-sm'>To track your order please enter your order ID in the input field below and press the “Track Order” button. this was given to you on your receipt and in the confirmation email you should have received.</p>
                </div>
                <form className="search-order w-full md:w-9/12 mt-5">
                    <div className="flex gap-3 w-full">
                        <div className="order w-full">
                            <label className="text-gray-700 text-sm">Order ID:</label>
                            <input onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })} type="text" placeholder="Order ID" className="w-full px-3 mt-2 py-2 border border-gray-200 focus:outline-none focus:border-sky-500" />
                        </div>
                        <div className="email w-full">
                            <label className="text-gray-700 text-sm">Billing Email:</label>
                            <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" name='email' id='email' placeholder="Email Address" className="w-full mt-2 px-3 py-2 border border-gray-200  focus:outline-none focus:border-sky-500" />
                        </div>
                    </div>
                    <button onClick={HandleSearchOrder} type='submit' className="w-[200px] mt-5 bg-[#FA8232] cursor-pointer text-white px-4 py-2">Track Order</button>
                </form>
            </div>
            {orderId?.order && (
                <div key={orderId?.order?._id} className="w-full flex items-center justify-between md:w-9/12 m-auto mt-5 border border-gray-200 shadow-sm p-5">
                    <h2 className='text-lg font-bold'>Order ID: {orderId?.order?.orderNumber?.slice( 4 , 14)}</h2>
                    <p className='text-sm  text-gray-600'>Order Status: <span className='bg-green-500 px-2 py-1 rounded text-white'>{orderId?.order?.paymentStatus}</span></p>
                    <p className='text-sm text-gray-600'>Total Price: ${orderId?.order?.total_price}</p>
                    <p className='text-sm text-gray-600'>Quantity: {orderId?.order?.quantity}</p>
                    <button onClick={()=> Router.push(`/order/track-order/details/${orderId?.order?.orderNumber?.slice( 4 , 14)}`)} className='bg-zinc-800 px-3 py-2 text-white rounded cursor-pointer'>Show Details</button>
                </div>
            )}
        </>
    );
}

export default Page;
