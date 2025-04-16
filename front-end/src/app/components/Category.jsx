'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { FetchCategory } from "@/lib/features/Category/GetCategoriesSlice";
import Link from "next/link";


function Category() {
    const { category } = useAppSelector((state) => state.categories)
    const dispatch = useAppDispatch()

    // Handle Swiper 
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };


    // Handle Fetch Data
    useEffect(() => {
        dispatch(FetchCategory())
    }, [])

    return (
        <div className="slider-container w-[98%] max-w-7xl m-auto max-md:px-5 my-10">
            <div className="title flex justify-center">
                <h2 className="text-3xl font-bold"> Shop with Categorys </h2>
            </div>
            <div className="slider-container mt-5">
                <Slider {...settings}>
                    {category?.map(({image , category , _id}) => (
                        <div key={_id} className="flex p-2">
                            <Link href={'/category/'+category} className="p-3 flex items-center flex-col border border-gray-200">
                                <div className="image h-[160px] flex items-center justify-center">
                                    <Image
                                        src={image}
                                        alt="Image Hand"
                                        width={300}
                                        height={300}
                                        layout="intrinsic"
                                        objectFit="cover"
                                        className="w-[150px] h-[150px] object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="text-center font-bold text-[15px] text-gray-700">{category}</h3>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Category;
