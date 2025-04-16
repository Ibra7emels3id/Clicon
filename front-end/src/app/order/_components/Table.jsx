import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Table = ({ order }) => {
    const [show, setShow] = useState(null)
    const Router = useRouter();




    return (
        <div className="flex flex-col">
            {order?.map((item, index) => (
                <div key={index} className="box order  border border-[#FA8232] rounded p-3 mt-4">
                    <div className="flex items-center justify-between">
                        <div className='flex flex-col gap-1'>
                            <h4 className='font-bold'>Order ID:<span className='font-normal'> {item.orderNumber.slice(4, 14)}</span></h4>
                            <p className='font-bold'>Payment Method: <span className={`bg-green-400 px-3 py-1 rounded-full text-white font-normal`}>{item.paymentStatus}</span></p>
                            <p className='font-bold'>Order Status: <span className={`bg-red-400 px-3 py-1 rounded-full text-white font-normal`}>{item.status}</span></p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h4>Shipping Address:</h4>
                            <p>Address: <span>{item.address}</span></p>
                            <p>Phone: <span>{item.phone}</span></p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h4>Total Price: ${item.total_price}</h4>
                            <p>Quantity: <span>{item.quantity}</span></p>
                            <p>Order Date: <span>{item.createdAt.split('T')[0]} && {new Date(item.createdAt).toLocaleTimeString()}</span></p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button onClick={() => setShow(show === item._id ? null : item._id)} className={`${show === item._id ? 'bg-red-400 hover:bg-red-500 ' : 'bg-zinc-800 hover:bg-zinc-900 '} w-[160px] text-center py-2 rounded text-white cursor-pointer`} type="button">{show === item._id ? 'Hide' : 'Show Orders'}</button>
                            <button onClick={() => Router.push(`/order/track-order/details/${item.orderNumber.slice(4, 14)}`)} className={`bg-sky-500 w-[160px] text-center py-2 rounded text-white cursor-pointer`} type="button">Follow up the order</button>
                        </div>
                    </div>
                    <div className={`${show === item._id ? 'flex' : 'hidden'} flex-col`}>
                        <div className="title border-y border-gray-300 py-4 mt-5">
                            <h4 className='text-xl font-semibold'>Order Items</h4>
                        </div>
                        {item.items.map((product) => (
                            <div key={product._id} className="items order-t mt-4 pt-4">
                                <div className="flex flex-col gap-3 mt-4">
                                    <div className="flex items-center justify-between pb-2">
                                        <div className='flex items-center justify-between w-full'>
                                            <div className="image flex items-center justify-center">
                                                <Image
                                                    src={product?.productId?.image_1}
                                                    alt={product?.productId?.title}
                                                    width={100}
                                                    height={100}
                                                    className="rounded-lg"
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <h4>Customer Name:{product.productId.title.slice(0, 30)}...</h4>
                                                <p>Quantity: {product.quantity}</p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <h4>Price: ${product.productId.price}</h4>
                                                <p>Sub Total: ${product?.productId?.price * product?.quantity}</p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <button className='bg-red-600 hover:bg-red-700 w-[120px] text-center py-2 rounded text-white cursor-pointer' type="button">Delete Item</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Table;
