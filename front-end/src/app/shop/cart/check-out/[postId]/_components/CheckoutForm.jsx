'use client'
import { FetchUser } from "@/lib/features/Cart/GetUserCartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";


// Set Client Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const { data: section } = useSession()
    const { user } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    const Router = useRouter()

    // Handle Submit 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;
        setLoading(true);
        const cardElement = elements.getElement(CardNumberElement);
        // Check if the card
        if (!cardElement) {
            setLoading(false);
            alert("Card element is not loaded properly.");
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            setLoading(false);
            alert(error.message);
            return;
        }

        setFormData({
            ...formData,
            payment_method: paymentMethod.id,
            payment_method_types: "card",
            client_secret: paymentMethod.client_secret,
        })

        // Send Data To server 
        const res = await axios.post(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/order-payment/${section?.user?.id}`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setLoading(false);

        // Check if payment was successful
        if (res.status === 200) {
            toast.success(res.data.message)
            Router.replace(`/shop/cart/check-out/success/${res.data.order.clientSecret}`)
            await dispatch(FetchUser({ id: section?.user?.id }))
        } else {
            alert("Payment failed: " + data.message);
        }
    };


    // Handle Set Data
    useEffect(() => {
        if (section?.user && user) {
            setFormData({
                ...formData,
                user_id: section?.user?.id,
                total_price: user?.cart?.total_price + 4 + 2,
                quantity: user?.cart?.quantity,
                country: user?.country,
                city: user?.city,
                email: section?.user?.email,
                phone: user?.phone,
                name: section?.user?.name,
                zip_code: user?.zip_code,
                amount: user?.cart?.total_price + 4 + 2,
                currency: "USD",
                items: user?.cart?.items,
                address: user?.address,
            });
        }
    }, [section?.user && user]);


    // Fetch User Data
    useEffect(() => {
        if (section?.user?.id) {
            dispatch(FetchUser({ id: section?.user?.id }))
        }
    }, [section?.user?.id]);





    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 max-md:order-1">
                <h2 className="text-3xl font-bold text-slate-900">Make a payment</h2>
                <p className="text-slate-900 text-sm mt-4">
                    Complete your transaction swiftly and securely with our easy-to-use
                    payment process.
                </p>
                <form onSubmit={handleSubmit} className="mt-12 w-full">
                    <div className="grid gap-4">
                        <div>
                            <input
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                value={formData?.name}
                                type="text"
                                placeholder="Cardholder's Name"
                                className="px-4 py-3.5 bg-white text-gray-700 w-full text-sm border border-gray-200 focus:bg-transparent outline-none"
                            />
                        </div>
                        <div className="flex bg-white border border-gray-200 focus-within:bg-transparent overflow-hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 ml-3"
                                viewBox="0 0 32 20"
                            >
                                <circle
                                    cx={10}
                                    cy={10}
                                    r={10}
                                    fill="#f93232"
                                    data-original="#f93232"
                                />
                                <path
                                    fill="#fed049"
                                    d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                                    className="hovered-path"
                                    data-original="#fed049"
                                />
                            </svg>
                            <CardNumberElement className="px-4 py-3.5 bg-white text-gray-700 w-full text-sm focus:bg-transparent outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <CardExpiryElement className="px-4 py-3.5 bg-white text-gray-700 w-full text-sm border border-gray-200 focus:bg-transparent outline-none" />
                            </div>
                            <div>
                                <CardCvcElement className="px-4 py-3.5 bg-white text-gray-700 w-full text-sm border border-gray-200 focus:bg-transparent outline-none" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                    value={formData?.country}
                                    type="text"
                                    name="country"
                                    id="country"
                                    placeholder="Enter Country."
                                    className="px-4 py-3.5 bg-white text-gray-700 w-full text-sm border border-gray-200 focus:bg-transparent outline-none"
                                />
                            </div>
                            <div>
                                <input
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    value={formData?.city}
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="Enter City"
                                    className="px-4 py-3.5 bg-white text-gray-700 w-full text-sm border border-gray-200 focus:bg-transparent outline-none"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    value={formData?.email}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email."
                                    className="px-4 py-3.5 bg-white text-gray-700 w-full text-sm border border-gray-200 focus:bg-transparent outline-none"
                                />
                            </div>
                            <div>
                                <input
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    value={formData?.phone}
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter phone"
                                    className="px-4 py-3.5 bg-white text-gray-700 w-full text-sm border border-gray-200 focus:bg-transparent outline-none"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })}
                                    value={formData?.zip_code}
                                    type="text"
                                    name="zip_code"
                                    id="zip_code"
                                    placeholder="Enter zip code"
                                    className="px-4 py-3.5 bg-white text-gray-700 w-full text-sm border border-gray-200 focus:bg-transparent outline-none"
                                />
                            </div>
                            <div>
                                <input
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    value={formData?.address}
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Enter address"
                                    className="px-4 py-3.5 bg-white text-gray-700 w-full text-sm border border-gray-200 focus:bg-transparent outline-none"
                                />
                            </div>
                        </div>

                    </div>
                    {
                        loading ?
                            (<button
                                className="mt-8 py-3 text-[15px] font-medium bg-[#FA8232] text-white w-full cursor-pointer"
                            >
                                Loading...
                            </button>)
                            :
                            (<button
                                type="submit"
                                className="mt-8 py-3 text-[15px] font-medium bg-[#FA8232] text-white w-full cursor-pointer"
                            >
                                Place order
                            </button>)
                    }
                </form>
            </div>
            <div className="bg-gray-100 p-6 ">
                <h2 className="text-3xl font-bold text-slate-900">${user?.cart?.total_price + 4 + 2}</h2>
                <ul className="text-slate-900 font-medium mt-12 space-y-4">
                    <li className="flex flex-wrap gap-4 text-sm">
                        Price <span className="ml-auto font-bold">${user?.cart?.total_price}</span>
                    </li>
                    <li className="flex flex-wrap gap-4 text-sm">
                        Shipping <span className="ml-auto font-bold">$4</span>
                    </li>
                    <li className="flex flex-wrap gap-4 text-sm">
                        Tax <span className="ml-auto font-bold">$2</span>
                    </li>
                    <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
                        Total Price <span className="ml-auto">${user?.cart?.total_price + 4 + 2}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const StripePaymentPage = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default StripePaymentPage;