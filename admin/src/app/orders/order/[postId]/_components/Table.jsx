'use client';
import { EditOrderStatus } from '@/lib/features/Order/EditOrderStatusSlice';
import { FetchOrder } from '@/lib/features/Order/GetOrder';
import { FetchOrderDetails } from '@/lib/features/Order/OrderDetails';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { toast } from 'sonner';

const Table = ({ id }) => {
    const { order } = useAppSelector((state) => state.order)
    const dispatch = useAppDispatch();


    // Handle Change Status
    const HandleChangeOrder = async (e) => {
        try {
            const res = await dispatch(EditOrderStatus({ id, data: e.target.value }))
            if (res?.meta?.requestStatus === "fulfilled") {
                await dispatch(FetchOrderDetails(id))
                toast.success(res?.payload?.message);
            }
        } catch (error) {
            console.error(error.message)
        }
    }


    // Fetch Order 
    useEffect(() => {
        if (id) {
            dispatch(FetchOrderDetails(id))
        }
    }, [id]);



    return (
        <div className="flex-1 p-4 max-xl:ml-16 ml-64 overflow-auto">
            <div className="flex flex-col min-w-[1200px] py-2">
                <div className="flex w-full items-center justify-between ">
                    <h3 className='font-bold text-2xl '>Details Order.</h3>
                </div>
                <div className="flex flex-col w-full py-3">
                    <div className="flex border w-full border-gray-200 p-2 justify-between">
                        <div className="userData">
                            <p className='font-semibold text-lg'>Name: <span className='text-gray-400 text-md'>{order?.user_id?.name}</span></p>
                            <p className='font-semibold text-lg'>Email: <span className='text-gray-400 text-md'>{order?.user_id?.email}</span></p>
                            <p className='font-semibold text-lg'>Phone: <span className='text-gray-400 text-md'>{order?.user_id?.phone || '0100000000'}</span></p>
                        </div>
                        <div className="address">
                            <p className='font-semibold text-lg'>Address: <span className='text-gray-400 text-md'>{order?.address}</span></p>
                            <p className='font-semibold text-lg'>Country: <span className='text-gray-400 text-md'>{order?.country}</span></p>
                            <p className='font-semibold text-lg'>Postal Code: <span className='text-gray-400 text-md'>{order?.postal_code || '000000'}</span></p>
                        </div>
                        <div className="Order Id">
                            <p className='font-semibold text-lg'>Order Id: #<span className='text-gray-400 text-md font-bold'>{order?.orderNumber.slice(4, 14)}</span></p>
                            <p className='font-semibold text-lg'>Order Status: <span className='text-gray-200 text-sm font-bold bg-red-400 px-3 py-1 rounded-2xl'>{order?.status}</span></p>
                            <p className='font-semibold text-lg'>Payment Status: <span className='text-gray-200 text-sm font-bold bg-green-400 px-3 py-1 rounded-2xl'>{order?.paymentStatus}</span></p>
                        </div>
                        <div className="">
                            <p className='font-semibold text-lg'>Total:<span className='text-gray-400 text-md'>${order?.total_price}</span></p>
                            <p className='font-semibold text-lg'>Quantity:<span className='text-gray-400 text-md'>{order?.quantity}</span></p>
                            <p className='font-semibold text-lg'>Date:<span className='text-gray-400 text-md'>{order?.createdAt}</span></p>
                        </div>
                        <div className="Action">
                            <select onChange={(e) => HandleChangeOrder(e)} name="Action" id="Action" className='px-3 cursor-pointer py-2 border focus:outline-none border-gray-200 w-[150px]'>
                                <option value="Pending">Pending</option>
                                <option value="Packing">Packing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Out for delivery">Out for delivery</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        {order?.items?.map((product) => (
                            <div key={product._id} className="flex items-center justify-between border w-full border-gray-200 px-2">
                                <div className="image flex items-center gap-3 ">
                                    <Image
                                        src={product?.productId?.image_1}
                                        width={100}
                                        height={100}
                                        alt="image"
                                    />
                                    <h2>{product?.productId?.title.slice(0, 20)}</h2>
                                </div>
                                <div className="details">
                                    <p className='font-semibold text-lg'>Quantity:{product?.productId?.quantity}</p>
                                </div>
                                <div className="price">
                                    <p className='font-semibold text-lg'>Price:{product?.productId?.price}$</p>
                                </div>
                                <div className="btn">
                                    <button className='bg-red-400 hover:bg-red-500 w-[160px] block text-center py-2 rounded text-white cursor-pointer' type="button">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
