'use client'
import { FetchUser } from '@/lib/features/Cart/GetUserCartSlice';
import { EditUser } from '@/lib/features/User/EditUserSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const FormData = () => {
    const { user, loading } = useAppSelector((state) => state.user)
    const [formData, setFormData] = useState(user)
    const [imageUrl, setImageUrl] = useState(null)
    const [resetPass, setResetPass] = useState({})
    const {data: section} = useSession()
    const dispatch = useAppDispatch()



    // Handle Edit User
    const HandleEditUser = async (e) => {
        e.preventDefault();
        try {
            await dispatch(EditUser({ id: user?._id, user: formData }))
            // await dispatch(FetchUser({ id: user._id }))
        } catch (error) {
            console.error(error)
        }
    };


    // Handle Reset Password
    const HandleResetPassword = async () => {
        if (resetPass.passwordNew === resetPass.password_confirm) {
            try {
                const res = await axios.put(`/api/reset-password-user/${user._id}`, resetPass)
                if (res.status === 200) {
                    toast.success(res.data.message)
                }
            } catch (error) {
                console.error(error)
            }
        }else{
            toast.error('check Password Please')
        }
    };


    // Handle Set User
    useEffect(() => {
        if (user) {
            setFormData(user)
        }
    }, [user]);

    return (
        <>
            <div className="grid grid-cols-5 border border-gray-200 p-5">
                <div className="flex flex-col max-lg:items-center max-lg:justify-center relative w-full max-lg:col-span-5 ">
                    <div className="image ">
                        {imageUrl ?
                            <Image
                                src={URL.createObjectURL(imageUrl)}
                                height={200}
                                width={200}
                                alt='Avatar'
                                className='rounded-full'
                            /> :
                            formData?.image ?
                                <Image
                                    src={formData?.image}
                                    height={200}
                                    width={200}
                                    alt='Avatar'
                                    className='rounded-full'
                                /> :
                                <Image
                                    src={'/images/Avatar.png'}
                                    height={200}
                                    width={200}
                                    alt='Avatar'
                                    className='rounded-full'
                                />
                        }
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="image">Upload Image</label>
                        <input onChange={(e) => {
                            setFormData({ ...formData, image: e.target.files[0] })
                            setImageUrl(e.target.files[0])
                        }} type="file" name="image" id="image" hidden />
                    </div>
                </div>
                <div className="flex flex-col lg:col-span-4 col-span-5  gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData?.name} className='p-2 border border-gray-200 focus:outline outline-none' type="text" name="name" id="name" placeholder='Enter Name' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Username">Username</label>
                            <input value={formData?.name} className='p-2 border border-gray-200 focus:outline outline-none' type="text" name="Username" id="Username" placeholder='Enter Username' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input readOnly value={formData?.email} className='p-2 border border-gray-200 focus:outline outline-none' type="text" name="email" id="email" placeholder='Enter Email' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Confirm-Email">Confirm Email</label>
                            <input readOnly value={formData?.email} className='p-2 border border-gray-200 focus:outline outline-none' type="text" name="Confirm-Email" id="Confirm-Email" placeholder='Enter Confirm Email' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                        <div className="flex flex-col">
                            <label htmlFor="phone">Phone</label>
                            <input onChange={(e) => setFormData({ ...formData, phone: e.target.value })} value={formData?.phone} className='p-2 border border-gray-200 focus:outline outline-none' type="number" name="phone" id="phone" placeholder='Enter Phone' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="States">States</label>
                            <p className='flex items-center justify-start mt-2 gap-2'><span className='w-5 h-5 rounded-full bg-amber-300 block'></span><span>Active</span></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                        <div className="flex flex-col">
                            <label htmlFor="Country">Country/Region</label>
                            <input onChange={(e) => setFormData({ ...formData, country: e.target.value })} value={formData?.country} className='p-2 border border-gray-200 focus:outline outline-none' type="text" name="Country" id="Country" placeholder='Enter Country' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Zip-Code">Zip Code</label>
                            <input onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })} value={formData?.zip_code} className='p-2 border border-gray-200 focus:outline outline-none' type="number" name="Zip-Code" id="Zip-Code" placeholder='Enter Zip Code' />
                        </div>
                    </div>
                    <div className="flex flex-col col-span-4 gap-5 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                            <div className="flex flex-col">
                                <label htmlFor="name">Address</label>
                                <input onChange={(e) => setFormData({ ...formData, address: e.target.value })} value={formData?.address} className='p-2 border border-gray-200 focus:outline outline-none' type="text" name="address" id="address" placeholder='Enter Address' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email">City</label>
                                <input onChange={(e) => setFormData({ ...formData, city: e.target.value })} value={formData?.city} className='p-2 border border-gray-200 focus:outline outline-none' type="text" name="city" id="city" placeholder='Enter City' />
                            </div>
                        </div>
                        <div className="btn">
                            <button onClick={HandleEditUser} type="submit" className='bg-[#FA8232] w-[150px] text-white cursor-pointer px-2 py-2'>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-10 border border-gray-200 p-5 gap-3">
                <div className="flex flex-col">
                    <label htmlFor="current-password">Current Password</label>
                    <input onChange={(e) => setResetPass({ ...resetPass, password: e.target.value })} className='p-2 border border-gray-200 focus:outline outline-none' type="password" name="current-password" id="current-password" placeholder='Enter Password' />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">New password</label>
                    <input onChange={(e) => setResetPass({ ...resetPass, passwordNew: e.target.value })} value={resetPass.passwordNew} className='p-2 border border-gray-200 focus:outline outline-none' type="password" name="name" id="name" placeholder='Enter New Password' />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Username">Confirm Password</label>
                    <input onChange={(e) => setResetPass({ ...resetPass, password_confirm: e.target.value })} value={resetPass.password_confirm} className='p-2 border border-gray-200 focus:outline outline-none' type="password" name="Username" id="Username" placeholder='Enter Confirm password' />
                </div>
                <div className="btn mt-3">
                    <button onClick={HandleResetPassword} type="submit" className='bg-[#FA8232] w-[170px] text-white cursor-pointer px-2 py-2'>Change Passowrd</button>
                </div>
            </div>
        </>
    );
}

export default FormData;
