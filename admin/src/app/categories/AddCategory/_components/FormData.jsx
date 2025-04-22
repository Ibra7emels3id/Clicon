'use client'
import { AddCategory } from '@/lib/features/Category/AddCategorySlice';
import { useAppDispatch } from '@/lib/hooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

const FormData = () => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [min, setMin] = useState([]);
    const dispatch = useAppDispatch();
    const Router = useRouter();

    // Handle Submit Data To server
    const HandleSubmitData = async (e) => {
        e.preventDefault();
        if (!formData.category && !formData.image) return toast.info('Enter your category Data');
        try {
            setLoading(true);
            const res = await dispatch(AddCategory({ formData })).unwrap();
            toast.success(res.message);
            Router.push("/categories");
            setFormData({
                category: "",
                image: "",
                min_category: []
            });
        } catch (error) {
            console.error('Error adding product:', error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };


    // Icons Cancel
    const IconCancel = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )


    return (
        <div className="flex-1 p-4 max-xl:ml-16 ml-64 overflow-auto">
            <div className="flex flex-col">
                <div className="flex w-full items-center justify-between min-w-[700px]">
                    <h3 className='font-bold text-2xl '>Categories.</h3>
                </div>
                <div className="flex flex-col py-5">
                    <form method="post" className='space-y-4'>
                        <div className="image">
                            <label htmlFor={`image`}>
                                <input onChange={(e) => {
                                    setFormData({ ...formData, image: e.target.files[0] })
                                }} accept="image/*" type="file" id={`image`} hidden />
                                <img className="max-w-24 cursor-pointer" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png" alt="uploadArea" width={100} height={100} />
                            </label>
                        </div>
                        <div className="image">
                            {formData?.image && (
                                <Image src={URL.createObjectURL(formData?.image)} alt="image" width={100} height={100} />
                            )}
                        </div>
                        <div className="title">
                            <input onChange={(e) => {
                                setFormData({ ...formData, category: e.target.value })
                            }} type="text" placeholder="Category Name" className='h-10 focus:outline-none w-full border border-gray-200 p-2' />
                        </div>
                        <div className="min_category flex gap-2">
                            <input onChange={(e) => {
                                setMin(e.target.value)
                            }} type="text" value={min} placeholder="Min Category" className='h-10 focus:outline-none w-full border border-gray-200 p-2' />
                            <button onClick={() => {
                                setFormData((prevFormData) => ({
                                    ...prevFormData,
                                    min_category: [...(prevFormData.min_category || []), min],
                                }))
                                setMin('')
                            }
                            } type="button" className='bg-[#fa8232c1] w-full py-2 text-white cursor-pointer '>Add</button>
                        </div>
                        <div className="btn">
                            {
                                loading ? (
                                    <button type="button" className='bg-[#fa8232c1] w-full py-2 text-white cursor-pointer '>Loading...</button>
                                ) : (
                                    <button onClick={HandleSubmitData} type="submit" className='bg-[#FA8232] w-full py-2 text-white cursor-pointer '>Submit</button>
                                )
                            }
                        </div>
                    </form>
                    <div className="flex flex-wrap gap-2 items-center mt-2">
                        {
                            formData?.min_category?.map((item, index) => (
                                <div className="flex items-center gap-2 bg-gray-100 p-2" key={index}>
                                    <p>{item}</p>
                                    <button type="button" onClick={() => {
                                        setFormData((prevFormData) => ({
                                            ...prevFormData,
                                            min_category: prevFormData.min_category.filter((min) => min !== item),
                                        }));
                                    }} className='text-red-400'>{IconCancel}</button>
                                </div>
                            ))}
                    </div>
                </div>
            </div >
        </div >
    );
}

export default React.memo(FormData);
