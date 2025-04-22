'use client'
import { FetchCategories } from '@/lib/features/Category/GetCategoriesSlice';
import { EditProduct } from '@/lib/features/Product/EditProductSlice';
import { fetchProductId } from '@/lib/features/Product/GetProductSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

const FormData = ({ id }) => {
    const { categories } = useAppSelector(state => state?.categories);
    const { product } = useAppSelector(state => state?.product);
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState({});
    const [index, setIndex] = useState(null);
    const [loading, setLoading] = useState(false);
    const Router = useRouter();



    // Handle Submit Data To server
    const HandleSubmitData = useCallback(async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await dispatch(EditProduct({id , formData}));
            if (res?.meta?.requestStatus === "fulfilled") {
                toast.success(res?.payload?.message);
                setLoading(false);
                Router.replace('/products');
            } else {
                console.warn('Unexpected response:', res);
            }
        } catch (error) {
            console.error('Error adding product:', error);
        } finally {
            setLoading(false);
        }
    }, [dispatch, formData]);


    // Get Product By Id
    useEffect(() => {
        if (id) {
            dispatch(fetchProductId(id));
        }
    }, [id]);


    // Use Get Product
    useEffect(() => {
        if (product) {
            setFormData(product);
        }
    }, [product]);


    // Use Get Category
    useEffect(() => {
        dispatch(FetchCategories())
    }, []);



    return (
        <div className="py-10 flex flex-col justify-between bg-white">
            <form className=" space-y-5 w-full">
                <div className='w-full'>
                    <p className="text-base font-medium">Product Image</p>
                    <div className="flex flex-wrap items-center justify-around gap-3 mt-2 w-full">
                        {Array(5).fill('').map((_, index) => (
                            <label key={index} htmlFor={`image-${index}`}>
                                <input onChange={(e) => {
                                    setFormData({ ...formData, [`image_${index + 1}`]: e.target.files[0] })
                                }} accept="image/*" type="file" id={`image-${index}`} hidden />
                                <img className="max-w-24 cursor-pointer" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png" alt="uploadArea" width={100} height={100} />
                            </label>
                        ))}
                    </div>
                    <div className="flex items-center justify-around flex-wrap py-10">
                        {formData?.image_1?.name ? <Image loading='lazy' className="max-w-28 cursor-pointer" src={URL.createObjectURL(formData.image_1)} alt="uploadArea" width={100} height={100} /> : <Image loading='lazy' className="max-w-28 cursor-pointer" src={formData?.image_1} alt="uploadArea" width={100} height={100} />}
                        {formData?.image_2?.name ? <Image loading='lazy' className="max-w-28 cursor-pointer" src={URL.createObjectURL(formData.image_2)} alt="uploadArea" width={100} height={100} /> : <Image loading='lazy' className="max-w-28 cursor-pointer" src={formData?.image_2} alt="uploadArea" width={100} height={100} />}
                        {formData?.image_3?.name ? <Image loading='lazy' className="max-w-28 cursor-pointer" src={URL.createObjectURL(formData.image_3)} alt="uploadArea" width={100} height={100} /> : <Image loading='lazy' className="max-w-28 cursor-pointer" src={formData?.image_3} alt="uploadArea" width={100} height={100} />}
                        {formData?.image_4?.name ? <Image loading='lazy' className="max-w-28 cursor-pointer" src={URL.createObjectURL(formData.image_4)} alt="uploadArea" width={100} height={100} /> : <Image loading='lazy' className="max-w-28 cursor-pointer" src={formData?.image_4} alt="uploadArea" width={100} height={100} />}
                        {formData?.image_5?.name ? <Image loading='lazy' className="max-w-28 cursor-pointer" src={URL.createObjectURL(formData.image_5)} alt="uploadArea" width={100} height={100} /> : <Image loading='lazy' className="max-w-28 cursor-pointer" src={formData?.image_5} alt="uploadArea" width={100} height={100} />}
                    </div>
                </div>
                <div className="flex flex-col gap-1w-full">
                    <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
                    <input value={formData?.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div onChange={(e) => setFormData({
                        ...formData,
                        category: {
                            ...formData.category,
                            name: e.target.value
                        }
                    })} className="w-full flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="category">Category</label>
                        <select value={formData?.category?.name} onChange={(e) => setIndex(e.target.selectedIndex - 1)} id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
                            <option hidden>Select Category</option>
                            {categories?.map((item, index) => (
                                <option key={index} value={item.category}>{item.category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="category">Min Category</label>
                        <select value={formData?.category?.min_category} onClick={(e) => setFormData({
                            ...formData,
                            category: {
                                ...formData.category,
                                min_category: e.target.value
                            }
                        })} id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
                            <option hidden>Select Category</option>
                            {categories[index]?.min_category?.map((it, index) => (
                                <option key={index} value={it}>{it}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
                        <input value={formData?.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="del-price">Offer Price</label>
                        <input value={formData?.del_price} onChange={(e) => setFormData({ ...formData, del_price: e.target.value })} id="del-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="discount">Discount</label>
                        <input value={formData?.discount} onChange={(e) => setFormData({ ...formData, discount: e.target.value })} id="discount" type="number" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="Count">Count</label>
                        <input value={formData?.count} onChange={(e) => setFormData({ ...formData, count: e.target.value })} id="Count" type="number" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <div className="w-full flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="price">Size</label>
                        <select value={formData?.size} onChange={(e) => setFormData({ ...formData, size: [e.target.value] })} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" name="size" id="size">
                            <option value="sm">Small</option>
                            <option value="md">Medium</option>
                            <option value="lg">Large</option>
                            <option value="xl">XLarge</option>
                            <option value="xxl">XXLarge</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
                    <textarea value={formData?.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>
                {
                    loading ?
                        <div className="w-full flex items-center justify-center mt-5">
                            <div className="w-10 h-10 border-4 border-t-transparent border-l-transparent border-r-transparent border-b-gray-500 rounded-full animate-spin"></div>
                        </div>
                        :
                        <button onClick={HandleSubmitData} type='submit' className="px-8 py-2.5 bg-orange-500 text-white font-medium rounded w-full cursor-pointer">UPDATE</button>
                }
            </form>
        </div>
    );
}

export default React.memo(FormData);
