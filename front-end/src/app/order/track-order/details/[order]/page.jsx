'use client';
import Loader from '@/app/Loader';
import { FetchOrderDetails } from '@/lib/features/Order/OrderDetails';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import React, { useEffect } from 'react';

const Page = ({ params }) => {
    const { order } = params;
    const dispatch = useAppDispatch()
    const { orderDetails , loading } = useAppSelector((state) => state.orderDetails)


    // Mock data for order details
    useEffect(() => {
        if (order) {
            dispatch(FetchOrderDetails(order))
        }
    }, [order]);


    if (loading) return <Loader/>

    return (
        <div className='max-w-7xl m-auto px-3 mt-6 lg:px-5'>
            <div className="flex flex-col">
                <div className="title">
                    <h1 className='text-3xl font-bold text-gray-900'>Order Details.</h1>
                </div>
                <div className="details flex flex-col gap-3 mt-5 border p-5 border-gray-200">
                    <div className="box flex items-center justify-between bg-amber-100 border border-amber-400 rounded p-4 ">
                        <div className="flex flex-col gap-3">
                            <p className='font-bold text-2xl'>Order ID: <span className='font-bold'>{orderDetails?.orderNumber.slice(4, 14)}</span></p>
                            <p className='text-gray-400 text-[14px]'>product : Order Placed in {orderDetails?.createdAt.split('T')[0]} / {new Date(orderDetails?.createdAt).toLocaleTimeString()} </p>
                        </div>
                        <div className="flex flex-col">
                            <small className='font-bold text-3xl block text-sky-500'>${orderDetails?.total_price}.00</small>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-5 w-full">
                        <div className="title text-gray-600">
                            Order expected arrival {orderDetails?.createdAt.split('T')[0]}
                        </div>
                        <div className="flex items-center max-w-screen-lg mx-auto w-full mt-4">
                            <div className="flex items-center w-full">
                                {/* Pending */}
                                <div className={`w-14 h-14 shrink-0 mx-[-1px]   ${orderDetails?.status === 'Pending' || orderDetails?.status === 'Packing' || orderDetails?.status === 'Shipped' || orderDetails?.status === 'Out for delivery' || orderDetails?.status === 'Completed' ? 'bg-blue-600' : 'bg-gray-300'} flex items-center justify-center rounded-full`}>
                                    <span className="text-sm text-white font-semibold">
                                        <svg
                                            viewBox="0 0 1024 1024"
                                            fill="#000000"
                                            className="icon fill-white w-8"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M959.018 208.158c0.23-2.721 0.34-5.45 0.34-8.172 0-74.93-60.96-135.89-135.89-135.89-1.54 0-3.036 0.06-6.522 0.213l-611.757-0.043c-1.768-0.085-3.563-0.17-5.424-0.17-74.812 0-135.67 60.84-135.67 135.712l0.188 10.952h-0.306l0.391 594.972-0.162 20.382c0 74.03 60.22 134.25 134.24 134.25 1.668 0 7.007-0.239 7.1-0.239l608.934 0.085c2.985 0.357 6.216 0.468 9.55 0.468 35.815 0 69.514-13.954 94.879-39.302 25.373-25.34 39.344-58.987 39.344-94.794l-0.145-12.015h0.918l-0.008-606.41z m-757.655 693.82l-2.585-0.203c-42.524 0-76.146-34.863-76.537-79.309V332.671H900.79l0.46 485.186-0.885 2.865c-0.535 1.837-0.8 3.58-0.8 5.17 0 40.382-31.555 73.766-71.852 76.002l-10.816 0.621v-0.527l-615.533-0.01zM900.78 274.424H122.3l-0.375-65.934 0.85-2.924c0.52-1.82 0.782-3.63 0.782-5.247 0-42.236 34.727-76.665 78.179-76.809l0.45-0.068 618.177 0.018 2.662 0.203c42.329 0 76.767 34.439 76.767 76.768 0 1.326 0.196 2.687 0.655 4.532l0.332 0.884v68.577z"
                                                    fill=""
                                                />
                                                <path
                                                    d="M697.67 471.435c-7.882 0-15.314 3.078-20.918 8.682l-223.43 223.439L346.599 596.84c-5.544-5.603-12.95-8.69-20.842-8.69s-15.323 3.078-20.918 8.665c-5.578 5.518-8.674 12.9-8.7 20.79-0.017 7.908 3.07 15.357 8.69 20.994l127.55 127.558c5.57 5.56 13.01 8.622 20.943 8.622 7.925 0 15.364-3.06 20.934-8.63l244.247-244.247c5.578-5.511 8.674-12.883 8.7-20.783 0.017-7.942-3.079-15.408-8.682-20.986-5.552-5.612-12.958-8.698-20.85-8.698z"
                                                    fill=""
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                {/* Packing */}
                                <div className={`w-full h-[3px] mx-4 rounded-lg  ${orderDetails?.status === 'Packing' || orderDetails?.status === 'Shipped' || orderDetails?.status === 'Out for delivery' || orderDetails?.status === 'Completed' ? 'bg-blue-600' : 'bg-gray-300'}`} />
                            </div>
                            <div className="flex items-center w-full">
                                <div className={`w-14 h-14 shrink-0 mx-[-1px] ${orderDetails?.status === 'Packing' || orderDetails?.status === 'Shipped' || orderDetails?.status === 'Out for delivery' || orderDetails?.status === 'Completed' ? 'bg-blue-600' : 'bg-gray-300'} flex items-center justify-center rounded-full`}>
                                    <span className="text-sm text-white font-semibold">
                                        <svg
                                            fill="#000000"
                                            version="1.1"
                                            id="Capa_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 458.823 458.823"
                                            xmlSpace="preserve"
                                            className='w-8 fill-white'
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <g>
                                                    {" "}
                                                    <path d="M458.539,194.435L416.933,69.623c-0.569-1.706-1.941-3.029-3.664-3.53L190.581,0.833c-1.496-0.453-3.146-0.22-4.459,0.611 l-165.6,103.606c-1.377,0.861-2.299,2.285-2.522,3.899L0.053,237.839c-0.348,2.501,1.043,4.909,3.383,5.848l34.744,13.997 l0.009,89.812c0,2.138,1.253,4.094,3.192,4.989L266.13,455.744l0.009,0.015c0.191,0.317,0.401,0.682,0.733,0.984 c1.017,0.947,2.347,1.475,3.738,1.475c1.521,0,2.986-0.639,4.022-1.755l140.307-150.909c0.947-1.018,1.471-2.348,1.471-3.738 v-59.711l40.869-42.109C458.707,198.521,459.188,196.388,458.539,194.435z M34.362,109.342l153.557-96.065v143.828L34.362,109.342z M242.449,339.945c1.521,0.602,3.276,0.499,4.704-0.294c1.456-0.798,2.455-2.194,2.754-3.832l14.641-81.226v188.335L49.173,343.973 l-0.009-81.87L242.449,339.945z M264.384,193.569l-24.091,133.667L11.524,235.095l16.19-116.318l236.978,73.712 C264.557,192.839,264.449,193.196,264.384,193.569z M397.699,72.974L270.148,182.683l-71.241-22.157V14.717L397.699,72.974z M447.062,194.745L320.991,324.642l-45.938-131.688L408.275,78.374L447.062,194.745z M275.529,227.664l38.018,108.99 c0.621,1.788,2.156,3.15,4,3.557c1.802,0.396,3.817-0.191,5.129-1.54l82.748-85.258v46.241L275.529,439.368V227.664z" />{" "}
                                                </g>{" "}
                                            </g>
                                        </svg>

                                    </span>
                                </div>
                                {/* Shipped */}
                                <div className={`${orderDetails?.status === 'Shipped' || orderDetails?.status === 'Out for delivery' || orderDetails?.status === 'Completed' ? 'bg-blue-600' : 'bg-gray-300'} w-full h-[3px] mx-4 rounded-lg bg-blue-600`} />
                            </div>
                            <div className="flex items-center w-full">
                                <div className={`w-14 h-14 shrink-0 mx-[-1px]  ${orderDetails?.status === 'Shipped' || orderDetails?.status === 'Out for delivery' || orderDetails?.status === 'Completed' ? 'bg-blue-600' : 'bg-gray-300'} flex items-center justify-center rounded-full`}>
                                    <span className="text-sm text-white font-semibold">
                                        <svg
                                            fill="#000000"
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 512 512"
                                            xmlSpace="preserve"
                                            className="w-8 fill-white"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <g>
                                                    {" "}
                                                    <g>
                                                        {" "}
                                                        <path d="M476.158,231.363l-13.259-53.035c3.625-0.77,6.345-3.986,6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392 V110.63c0-9.136-7.432-16.568-16.568-16.568H50.772c-9.136,0-16.568,7.432-16.568,16.568V256c0,4.427,3.589,8.017,8.017,8.017 c4.427,0,8.017-3.589,8.017-8.017V110.63c0-0.295,0.239-0.534,0.534-0.534h307.841c0.295,0,0.534,0.239,0.534,0.534v145.372 c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-9.088h94.569c0.008,0,0.014,0.002,0.021,0.002 c0.008,0,0.015-0.001,0.022-0.001c11.637,0.008,21.518,7.646,24.912,18.171h-24.928c-4.427,0-8.017,3.589-8.017,8.017v17.102 c0,13.851,11.268,25.119,25.119,25.119h9.086v35.273h-20.962c-6.886-19.883-25.787-34.205-47.982-34.205 s-41.097,14.322-47.982,34.205h-3.86v-60.393c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v60.391H192.817 c-6.886-19.883-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205H50.772c-0.295,0-0.534-0.239-0.534-0.534v-17.637 h34.739c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H8.017c-4.427,0-8.017,3.589-8.017,8.017 s3.589,8.017,8.017,8.017h26.188v17.637c0,9.136,7.432,16.568,16.568,16.568h43.304c-0.002,0.178-0.014,0.355-0.014,0.534 c0,27.996,22.777,50.772,50.772,50.772s50.772-22.776,50.772-50.772c0-0.18-0.012-0.356-0.014-0.534h180.67 c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.996,22.777,50.772,50.772,50.772c27.995,0,50.772-22.776,50.772-50.772 c0-0.18-0.012-0.356-0.014-0.534h26.203c4.427,0,8.017-3.589,8.017-8.017v-85.511C512,251.989,496.423,234.448,476.158,231.363z M375.182,144.301h60.392c9.725,0,17.637,7.912,17.637,17.637v0.534h-78.029V144.301z M375.182,230.881v-52.376h71.235 l13.094,52.376H375.182z M144.835,401.904c-19.155,0-34.739-15.583-34.739-34.739s15.584-34.739,34.739-34.739 c19.155,0,34.739,15.583,34.739,34.739S163.99,401.904,144.835,401.904z M427.023,401.904c-19.155,0-34.739-15.583-34.739-34.739 s15.584-34.739,34.739-34.739c19.155,0,34.739,15.583,34.739,34.739S446.178,401.904,427.023,401.904z M495.967,299.29h-9.086 c-5.01,0-9.086-4.076-9.086-9.086v-9.086h18.171V299.29z" />{" "}
                                                    </g>{" "}
                                                </g>{" "}
                                                <g>
                                                    {" "}
                                                    <g>
                                                        {" "}
                                                        <path d="M144.835,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568 c9.136,0,16.568-7.432,16.568-16.568C161.403,358.029,153.971,350.597,144.835,350.597z" />{" "}
                                                    </g>{" "}
                                                </g>{" "}
                                                <g>
                                                    {" "}
                                                    <g>
                                                        {" "}
                                                        <path d="M427.023,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568 c9.136,0,16.568-7.432,16.568-16.568C443.591,358.029,436.159,350.597,427.023,350.597z" />{" "}
                                                    </g>{" "}
                                                </g>{" "}
                                                <g>
                                                    {" "}
                                                    <g>
                                                        {" "}
                                                        <path d="M332.96,316.393H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H332.96 c4.427,0,8.017-3.589,8.017-8.017S337.388,316.393,332.96,316.393z" />{" "}
                                                    </g>{" "}
                                                </g>{" "}
                                                <g>
                                                    {" "}
                                                    <g>
                                                        {" "}
                                                        <path d="M127.733,282.188H25.119c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h102.614 c4.427,0,8.017-3.589,8.017-8.017S132.16,282.188,127.733,282.188z" />{" "}
                                                    </g>{" "}
                                                </g>{" "}
                                                <g>
                                                    {" "}
                                                    <g>
                                                        {" "}
                                                        <path d="M278.771,173.37c-3.13-3.13-8.207-3.13-11.337,0.001l-71.292,71.291l-37.087-37.087c-3.131-3.131-8.207-3.131-11.337,0 c-3.131,3.131-3.131,8.206,0,11.337l42.756,42.756c1.565,1.566,3.617,2.348,5.668,2.348s4.104-0.782,5.668-2.348l76.96-76.96 C281.901,181.576,281.901,176.501,278.771,173.37z" />{" "}
                                                    </g>{" "}
                                                </g>{" "}
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                {/* Out To Delivery  */}
                                <div className={`w-full h-[3px] mx-4 rounded-lg  ${orderDetails?.status === 'Out for delivery' || orderDetails?.status === 'Completed' ? 'bg-blue-600' : 'bg-gray-300'}`} />
                            </div>
                            <div className="flex items-center w-full">
                                <div className={`${orderDetails?.status === 'Out for delivery' || orderDetails?.status === 'Completed' ? 'bg-blue-600' : 'bg-gray-300'} w-14 h-14 shrink-0 mx-[-1px] bg-blue-600 flex items-center justify-center rounded-full`}>
                                    <span className="text-sm text-white font-semibold">
                                        <svg
                                            height="200px"
                                            width="200px"
                                            version="1.1"
                                            id="_x32_"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 512 512"
                                            xmlSpace="preserve"
                                            fill="#000000"
                                            className="w-8 fill-white"
                                            transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <style
                                                    type="text/css"
                                                    dangerouslySetInnerHTML={{ __html: " .st0{fill:white;} " }}
                                                />{" "}
                                                <g>
                                                    {" "}
                                                    <path
                                                        className="st0"
                                                        d="M116.683,354.34c-26.836,0-48.607,21.764-48.607,48.6c0,26.85,21.771,48.614,48.607,48.614 c26.844,0,48.608-21.764,48.608-48.614C165.29,376.104,143.526,354.34,116.683,354.34z M116.683,424.826 c-12.08,0-21.872-9.799-21.872-21.886c0-12.073,9.792-21.865,21.872-21.865c12.08,0,21.872,9.792,21.872,21.865 C138.554,415.027,128.762,424.826,116.683,424.826z"
                                                    />{" "}
                                                    <path
                                                        className="st0"
                                                        d="M403.8,354.34c-26.836,0-48.6,21.764-48.6,48.6c0,26.85,21.764,48.614,48.6,48.614 c26.843,0,48.606-21.764,48.606-48.614C452.406,376.104,430.643,354.34,403.8,354.34z M403.8,424.826 c-12.073,0-21.865-9.799-21.865-21.886c0-12.073,9.792-21.865,21.865-21.865c12.079,0,21.871,9.792,21.871,21.865 C425.671,415.027,415.879,424.826,403.8,424.826z"
                                                    />{" "}
                                                    <path
                                                        className="st0"
                                                        d="M200.127,128.622H90.502c-3.561,0-6.957,1.582-9.23,4.331l-78.48,94.163C0.986,229.268,0,231.994,0,234.815 v82.595v43.189c0,6.648,5.389,12.029,12.03,12.029h36.844c11.626-25.9,37.621-44.024,67.81-44.024 c30.196,0,56.183,18.124,67.81,44.024h27.671V140.652C212.163,134.003,206.767,128.622,200.127,128.622z M43.931,236.052 c0-2.849,0.978-5.612,2.777-7.82l50.103-61.694c2.36-2.907,5.9-4.59,9.633-4.59h49.083c6.848,0,12.404,5.554,12.404,12.411v70.011 c0,6.849-5.555,12.404-12.404,12.404H56.334c-6.85,0-12.404-5.554-12.404-12.404V236.052z"
                                                    />{" "}
                                                    <path
                                                        className="st0"
                                                        d="M243.532,338.792c-3.741,0-6.763,3.03-6.763,6.77v20.303c0,3.735,3.022,6.763,6.763,6.763h92.466 c6.382-14.209,17.072-26.023,30.419-33.836H243.532z"
                                                    />{" "}
                                                    <path
                                                        className="st0"
                                                        d="M504.381,338.792h-63.19c13.353,7.814,24.044,19.627,30.419,33.836h32.772c3.741,0,6.77-3.028,6.77-6.763 v-20.303C511.151,341.822,508.122,338.792,504.381,338.792z"
                                                    />{" "}
                                                    <path
                                                        className="st0"
                                                        d="M497.568,60.446H252.043c-7.964,0-14.425,6.46-14.425,14.432v226.703c0,7.972,6.461,14.432,14.425,14.432 h245.525c7.971,0,14.432-6.46,14.432-14.432V74.878C512,66.906,505.539,60.446,497.568,60.446z M458.27,134.09H291.355 c-3.741,0-6.771-3.036-6.771-6.763v-13.533c0-3.741,3.03-6.77,6.771-6.77H458.27c3.735,0,6.763,3.029,6.763,6.77v13.533 C465.033,131.054,462.005,134.09,458.27,134.09z M291.355,174.697H458.27c3.735,0,6.763,3.021,6.763,6.763V195 c0,3.727-3.028,6.763-6.763,6.763H291.355c-3.741,0-6.771-3.036-6.771-6.763v-13.54 C284.584,177.718,287.614,174.697,291.355,174.697z M291.355,242.369H458.27c3.735,0,6.763,3.022,6.763,6.763v13.533 c0,3.727-3.028,6.77-6.763,6.77H291.355c-3.741,0-6.771-3.044-6.771-6.77v-13.533C284.584,245.391,287.614,242.369,291.355,242.369 z"
                                                    />{" "}
                                                </g>{" "}
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                {/* Completed */}
                                <div className={`${orderDetails?.status === 'Completed' ? 'bg-blue-600' : 'bg-gray-300'} w-full h-[3px] mx-4 rounded-lg`} />
                            </div>
                            <div className="flex items-center">
                                <div className={`${orderDetails?.status === 'Completed' ? 'bg-blue-600' : 'bg-gray-300'} w-14 h-14 shrink-0 mx-[-1px] bg-blue-600 flex items-center justify-center rounded-full`}>
                                    <span className="text-sm text-white font-semibold">
                                        <svg
                                            fill="#000000"
                                            version="1.1"
                                            id="Capa_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 612 612"
                                            xmlSpace="preserve"
                                            className="w-8 fill-white"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <g>
                                                    {" "}
                                                    <path d="M580.592,135.703L497.33,98.681L234.478,222.254v79.353l-45.854-20.389v-79.353L451.477,78.293l-88.287-39.256 c-11.822-5.256-31.166-5.256-42.987,0l-217.401,96.666c-17.319,7.701-31.453,29.51-31.409,48.464l0.339,143.238 c13.628-4.385,28.128-6.806,43.195-6.806c77.949,0,141.373,63.424,141.373,141.382c0,20.36-4.413,39.682-12.196,57.188 l76.764,32.815c11.436,4.888,30.146,4.889,41.583,0.002l216.905-92.694c17.614-7.527,32.062-29.357,32.107-48.513L612,184.166 C612.044,165.212,597.911,143.403,580.592,135.703z M496.655,300.16l29.458-62.149c2.974-6.273,10.429-9.892,13.413-6.49 l30.229,34.461c3.019,3.441-0.812,11.277-6.869,14.087l-12.724,5.903l-0.257,89.528c-0.012,3.912-3.467,8.569-7.708,10.399 l-19.049,8.223c-4.176,1.803-7.554,0.132-7.556-3.729l-0.064-88.354l-12.325,5.718C497.407,310.446,493.778,306.23,496.655,300.16z M388.039,350.943l26.773-59.078c2.7-5.959,9.604-9.312,12.422-6.012l28.532,33.423c2.85,3.336-0.628,10.779-6.237,13.381 l-11.782,5.466l0.76,85.727c0.033,3.749-3.135,8.163-7.066,9.86l-17.664,7.625c-3.873,1.672-7.042,0.025-7.087-3.675l-1.035-84.647 l-11.429,5.302C388.852,360.808,385.422,356.718,388.039,350.943z M583.911,399.271c-0.014,1.967-1.781,4.298-3.946,5.208 l-201.751,84.757c-1.883,0.791-3.432-0.037-3.459-1.851l-0.155-9.861c-0.028-1.817,1.476-3.942,3.361-4.745l202.111-86.097 c2.17-0.924,3.92-0.075,3.908,1.896L583.911,399.271z M114.925,347.054C51.454,347.054,0,398.508,0,461.979 c0,63.472,51.454,114.926,114.925,114.926s114.925-51.454,114.925-114.926C229.851,398.508,178.396,347.054,114.925,347.054z M190.021,438.367l-70.724,79.563c-3.484,3.919-8.335,5.932-13.221,5.932c-3.881,0-7.783-1.27-11.038-3.877l-44.202-35.361 c-7.624-6.095-8.862-17.223-2.759-24.846c6.095-7.632,17.228-8.867,24.851-2.763l31.093,24.872l59.574-67.02 c6.479-7.295,17.659-7.959,24.958-1.468C195.853,419.893,196.509,431.063,190.021,438.367z" />{" "}
                                                </g>{" "}
                                            </g>
                                        </svg>

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-5">
                        <div className="title font-bold text-gray-600">
                            Order Activity
                        </div>
                        <div className='space-y-2 mt-3'>
                            <div className="flex">
                                <div className="text-gray-400 text-sm">
                                    <Image
                                        src="/images/icon-12.png"
                                        alt="Checked"
                                        width={20}
                                        height={20}
                                        className="w-12 h-12"
                                    />
                                </div>
                                <div className=" space-y-2 ml-2">
                                    <span className="text-sm block text-gray-500 font-semibold">Your order has been delivered. Thank you for shopping at Clicon!</span>
                                    <span className="text-sm block text-gray-400">{orderDetails?.date_completed ? (<><span>{orderDetails?.date_completed?.split('T')[0]}</span> && <span>{(new Date(orderDetails?.date_completed).toLocaleTimeString())}</span></>) : null}</span>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="text-gray-400 text-sm">
                                    <Image
                                        src="/images/icon-13.png"
                                        alt="Checked"
                                        width={20}
                                        height={20}
                                        className="w-12 h-12"
                                    />
                                </div>
                                <div className=" space-y-2 ml-2">
                                    <span className="text-sm block text-gray-500 font-semibold">Our delivery man (John Wick) Has picked-up your order for delivery.</span>
                                    <span className="text-sm block text-gray-400">{orderDetails?.date_delivered ? (<><span>{orderDetails?.date_delivered?.split('T')[0]}</span> && <span>{(new Date(orderDetails?.date_delivered).toLocaleTimeString())}</span></>) : null}</span>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="text-gray-400 text-sm">
                                    <Image
                                        src="/images/icon-14.png"
                                        alt="Checked"
                                        width={20}
                                        height={20}
                                        className="w-12 h-12"
                                    />
                                </div>
                                <div className=" space-y-2 ml-2">
                                    <span className="text-sm block text-gray-500 font-semibold">Your order has reached at last mile hub.</span>
                                    <span className="text-sm block text-gray-400">{orderDetails?.date_shipped ? (<><span>{orderDetails?.date_shipped?.split('T')[0]}</span> && <span>{(new Date(orderDetails?.date_shipped).toLocaleTimeString())}</span></>) : null}</span>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="text-gray-400 text-sm">
                                    <Image
                                        src="/images/icon-15.png"
                                        alt="Checked"
                                        width={20}
                                        height={20}
                                        className="w-12 h-12"
                                    />
                                </div>
                                <div className=" space-y-2 ml-2">
                                    <span className="text-sm block text-gray-500 font-semibold">Your order on the way to (last mile) hub.</span>
                                    <span className="text-sm block text-gray-400">{orderDetails?.date_packing ? (<><span>{orderDetails?.date_packing?.split('T')[0]}</span> && <span>{(new Date(orderDetails?.date_packing).toLocaleTimeString())}</span></>) : null}</span>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="text-gray-400 text-sm">
                                    <Image
                                        src="/images/icon-16.png"
                                        alt="Checked"
                                        width={20}
                                        height={20}
                                        className="w-12 h-12"
                                    />
                                </div>
                                <div className=" space-y-2 ml-2">
                                    <span className="text-sm block text-gray-500 font-semibold">Your order is successfully verified Paid.</span>
                                    <span className="text-sm block text-gray-400">{orderDetails?.createdAt?.split('T')[0]} && {new Date(orderDetails?.createdAt).toLocaleTimeString()}</span>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="text-gray-400 text-sm">
                                    <Image
                                        src="/images/icon-17.png"
                                        alt="Checked"
                                        width={20}
                                        height={20}
                                        className="w-12 h-12"
                                    />
                                </div>
                                <div className=" space-y-2 ml-2">
                                    <span className="text-sm block text-gray-500 font-semibold">Your order has been confirmed.</span>
                                    <span className="text-sm block text-gray-400">{orderDetails?.createdAt?.split('T')[0]} && {new Date(orderDetails?.createdAt).toLocaleTimeString()}</span>
                                </div>
                            </div>
                            <div className=" space-y-2 mt-5">
                                <p className='text-gray-400 text-sm'>Your order is being processed. We will send you an email when your order is shipped.</p>
                                <p className='text-gray-400 text-sm'>You can track your order status in the order history section of your account.</p>
                                <p className='text-gray-400 text-sm'>If you have any questions, please contact us.</p>
                                <p className='text-gray-400 text-sm'>Thank you for your order!</p>
                                <p className='text-gray-400 text-sm'>Order ID: <span className='font-bold'>{orderDetails?.orderNumber.slice(4, 14)}</span></p>
                                <p className='text-gray-400 text-sm'>Order Date: <span className='font-bold'>{orderDetails?.createdAt.split('T')[0]}</span></p>
                                <p className='text-gray-400 text-sm'>Order Status: <span className='font-bold'>{orderDetails?.status}</span></p>
                                <p className='text-gray-400 text-sm'>Payment Status: <span className='font-bold'>{orderDetails?.paymentStatus}</span></p>
                                <p className='text-gray-400 text-sm'>Payment Method: <span className='font-bold'>Credit Card</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
