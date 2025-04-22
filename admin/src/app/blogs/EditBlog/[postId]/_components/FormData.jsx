'use client'
import { EditBlog } from '@/lib/features/Blog/EditBlogSlice';
import { FetchBlog } from '@/lib/features/Blog/GetBlog';
import { FetchCategories } from '@/lib/features/Category/GetCategoriesSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

const FormData = ({id}) => {
    const { categories } = useAppSelector(state => state?.categories);
    const { blog } = useAppSelector(state => state?.blog);
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const Router = useRouter();


    // Handle Submit Data To server
    const HandleSubmitData = useCallback(async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await dispatch(EditBlog({ id , formData })).unwrap();
            toast.success(res.message);
            Router.push("/blogs");
        } catch (error) {
            console.error('Error adding product:', error);
        } finally {
            setLoading(false);
        }
    }, [dispatch, formData]);



    // Set Form Data
    useEffect(() => {
        if (blog) {
            setFormData(blog);
        }
    }, [blog]);


    // Use Get Category
    useEffect(() => {
        dispatch(FetchCategories())
    }, []);


    // Use Get Blog
    useEffect(() => {
        dispatch(FetchBlog(id));
    }, [id]);



    return (
        <div className="py-10 flex flex-col justify-between bg-white">
            <form className=" space-y-5 w-full">
                <div className='w-full'>
                    <p className="text-base font-medium">Blog Image and Person Image </p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 w-full">
                        <label htmlFor={`image`} title='Image Blog'>
                            <input onChange={(e) => {
                                setFormData({ ...formData, image: e.target.files[0] })
                            }} accept="image/*" type="file" id={`image`} hidden />
                            <img className="max-w-24 cursor-pointer" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png" alt="uploadArea" width={100} height={100} />
                        </label>
                        <label htmlFor={`image_parson`} title='Image Person'>
                            <input onChange={(e) => {
                                setFormData({ ...formData, image_parson: e.target.files[0] })
                            }} accept="image/*" type="file" id={`image_parson`} hidden />
                            <img className="max-w-24 cursor-pointer" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png" alt="uploadArea" width={100} height={100} />
                        </label>
                    </div>
                    <div className="flex items-center flex-wrap gap-5 py-5 ">
                        {formData?.image?.name ? <Image loading='lazy' className="max-w-40 cursor-pointer" src={URL.createObjectURL(formData.image)} alt="uploadArea" width={100} height={100} /> : <Image loading='lazy' className="max-w-40 cursor-pointer" src={formData.image} alt="uploadArea" width={100} height={100} />}
                        {formData?.image_parson?.name ? <Image loading='lazy' className="max-w-40 cursor-pointer" src={URL.createObjectURL(formData.image_parson)} alt="uploadArea" width={100} height={100} /> : <Image loading='lazy' className="max-w-40 cursor-pointer" src={formData.image_parson} alt="uploadArea" width={100} height={100} />}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1w-full">
                        <label className="text-base font-medium" htmlFor="product-name">Blog Name</label>
                        <input onChange={(e) => setFormData({ ...formData, title: e.target.value })} value={formData.title} id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="date">Date</label>
                        <input onChange={(e) => setFormData({ ...formData, date: e.target.value })} value={formData.date} id="date" type="date" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="name">Person Name</label>
                        <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} id="name" type="text" placeholder="Enter Person Name" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="email">Person email</label>
                        <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} id="email" type="email" placeholder="Enter Person email" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="facebook">facebook</label>
                        <input onChange={(e) => setFormData({ ...formData, facebook: e.target.value })} value={formData.facebook} id="product-price" type="text" placeholder="facebook" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="instagram">instagram</label>
                        <input onChange={(e) => setFormData({ ...formData, instagram: e.target.value })} value={formData.instagram} id="instagram" type="text" placeholder="instagram" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="product-price">twitter</label>
                        <input onChange={(e) => setFormData({ ...formData, twitter: e.target.value })} value={formData.twitter} id="product-price" type="text" placeholder="twitter" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="del-price">linkedIn</label>
                        <input onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })} value={formData.linkedIn} id="linkedIn" type="text" placeholder="linkedIn" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="whatsApp">whatsApp</label>
                        <input onChange={(e) => setFormData({ ...formData, whatsApp: e.target.value })} value={formData.whatsApp} id="whatsApp" type="text" placeholder="whatsApp" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="youtube">youtube</label>
                        <input onChange={(e) => setFormData({ ...formData, youtube: e.target.value })} value={formData.youtube} id="youtube" type="text" placeholder="youtube" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium" htmlFor="category">Category</label>
                    <select onClick={(e) => setFormData({ ...formData, category: e.target.value })} value={formData.category} id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 h-11">
                        <option hidden>Select Category</option>
                        {categories?.map((item, index) => (
                            <option key={index} value={item.category}>{item.category}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
                    <textarea onChange={(e) => setFormData({ ...formData, description: e.target.value })} value={formData.description} id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>
                {
                    loading ?
                        <div className="w-full flex items-center justify-center mt-5">
                            <div className="w-10 h-10 border-4 border-t-transparent border-l-transparent border-r-transparent border-b-gray-500 rounded-full animate-spin"></div>
                        </div>
                        :
                        <button onClick={HandleSubmitData} type='submit' className="px-8 py-2.5 bg-orange-500 text-white font-medium rounded w-full cursor-pointer">ADD</button>
                }
            </form>
        </div>
    );
}

export default React.memo(FormData);
