import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";

const page = () => {

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <Link href="/" className="flex items-center justify-center gap-2">
                    <Image
                        className="h-[50px] w-[50px]"
                        width={100}
                        height={100}
                        src="/images/Icon-footer.png"
                        alt="dummyLogoColored"
                    />
                    <h1 className=" text-4xl font-bold text-[#fa8233]">Clicon</h1>
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className="flex">
                <NavBar />
                <div className="flex-1 p-4 max-xl:ml-16 ml-64 overflow-auto">
                    <div className="flex flex-col">
                        <div className="flex w-full items-center justify-between min-w-[700px]">
                            <h3 className='font-bold text-2xl '>DashBoard.</h3>
                            <Link href={'/products/AddProduct'} className='bg-[#FA8232] hover:bg-[#363636] w-[200px] transition-all duration-300 text-white flex items-center justify-center h-12'>Add Product</Link>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Search..." />
                            <button>Search</button>
                        </div>
                    </div>
                    <div className='w-full'>
                        {/* <Table /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
