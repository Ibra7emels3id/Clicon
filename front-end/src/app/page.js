import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import BestDeals from "./components/BestDeals";
import Category from "./components/Category";
import { getServerSession } from 'next-auth';
import { authOptions } from "./api/auth/[...nextauth]/route";
import Featured from "./components/Featured";
import Offers from "./components/Offers";
import ComputerAccessories from "./components/ComputerAccessories";
import Discount from "./components/Discount";
import FilterCategory from "./components/FilterCategory";
import LatestNews from "./components/LatestNews";
import SubscribeNews from "./components/SubscribeNews";

export default async function Home() {
    const session = await getServerSession(authOptions);
    console.log(session);

    
    
    return (
        <>
            <Hero/>
            <Service />
            <BestDeals />
            <Category />
            <Featured />
            <Offers />
            <ComputerAccessories />
            <Discount />
            <FilterCategory />
            <LatestNews />
            <SubscribeNews />
        </>
    );
}
