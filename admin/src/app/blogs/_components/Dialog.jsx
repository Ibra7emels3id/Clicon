import { DeleteBlog } from '@/lib/features/Blog/DeleteBlog';
import { FetchBlogs } from '@/lib/features/Blog/GetBlogs';
import { DeleteProduct } from '@/lib/features/Product/DeleteProductSlice';
import { FetchProducts } from '@/lib/features/Product/GetProductsSlice';
import { useAppDispatch } from '@/lib/hooks';
import React, { useCallback, useEffect } from 'react';
import { toast } from 'sonner';

const Dialog = ({ productName, productId, isOpen, setIsOpen, handleDelete }) => {
    const dispatch = useAppDispatch();

    // Handle Delete Product
    const handleConfirm = useCallback(async () => {
        try {
            const res = await dispatch(DeleteBlog(productId));
            if (res?.meta?.requestStatus === "fulfilled") {
                toast.success(res?.payload?.message);
                dispatch(FetchBlogs())
                setIsOpen(false)
            }
        } catch (error) {
            console.error(error);
        }
    }, [dispatch, productId]);


    // Handle Hidden Scroll Body
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => document.body.style.overflow = 'auto'
    }, [isOpen]);


    return (
        <div className={isOpen ? "flex h-screen items-center justify-center w-full fixed top-0 left-0 z-50 bg-[#00000089]" : "`flex h-screen items-center justify-center w-full fixed top-0 left-0 z-50 bg-[#00000089] hidden"}>
            <div class="flex flex-col items-center bg-white shadow-md rounded-xl py-6 px-5 md:w-[460px] w-[370px] border border-gray-300">
                <div class="flex items-center justify-center p-4 bg-red-100 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.875 5.75h1.917m0 0h15.333m-15.333 0v13.417a1.917 1.917 0 0 0 1.916 1.916h9.584a1.917 1.917 0 0 0 1.916-1.916V5.75m-10.541 0V3.833a1.917 1.917 0 0 1 1.916-1.916h3.834a1.917 1.917 0 0 1 1.916 1.916V5.75m-5.75 4.792v5.75m3.834-5.75v5.75" stroke="#DC2626" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <h2 class="text-gray-900 font-semibold mt-4 text-xl">Are you sure?</h2>
                <p class="text-sm text-gray-600 mt-2 text-center">
                    {productName.split(' ').slice(0, 10).join(' ')}.
                </p>
                <div class="flex items-center justify-center gap-4 mt-5 w-full">
                    <button onClick={() => setIsOpen(false)} type="button" class="w-full cursor-pointer md:w-36 h-10 rounded-md border border-gray-300 bg-white text-gray-600 font-medium text-sm hover:bg-gray-100 active:scale-95 transition">
                        Cancel
                    </button>
                    <button onClick={handleConfirm} type="button" class="w-full cursor-pointer md:w-36 h-10 rounded-md text-white bg-red-600 font-medium text-sm hover:bg-red-700 active:scale-95 transition">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Dialog);
