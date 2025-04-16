'use client';
import { FetchOrder } from '@/lib/features/Order/GetOrder';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import Table from './_components/Table';

const Page = () => {
    const { order } = useAppSelector((state) => state.order)
    const dispatch = useAppDispatch()
    const { data: section } = useSession()
    const sortedOrders = order?.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));



    console.log(sortedOrders);



    // Fetch User Data
    useEffect(() => {
        if (section?.user?.id) {
            dispatch(FetchOrder({ id: section?.user?.id }))
        }
    }, [section?.user?.id]);


    return (
        <div className='max-w-7xl mx-auto p-4 lg:px-7 mt-10'>
            <div className="flex flex-col">
                <div className="flex">
                    <div className="flex-1">
                        <h1 className='text-2xl font-semibold'>My Orders.</h1>
                    </div>
                </div>
                <Table order={sortedOrders} />
            </div>
        </div>
    );
}

export default Page;
