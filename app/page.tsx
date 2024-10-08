import Herocarousel from "@/components/Herocarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import React from "react";

const Home = () => {
    return (
        <>
            <section className=" h-[85vh] px-6 py-2  md:px-20  rounded-lg">
                <div className="flex max-xl:flex-col gap-16">
                    <div className=" flex flex-col justify-center">
                        <p className="flex gap-2 text-sm font-medium cursor-pointer object-contain">
                            Shop Smarter Now !
                            <Image
                                src="/assets/icons/arrow-right.png"
                                width={20}
                                height={20}
                                alt="arrow-right"
                            />
                        </p>
                        <h1 className="mt-4 text-3xl font-bold">
                            {" "}
                            Save up Time and Money with{" "}
                            <span className="text-amber-700">Priceful</span>
                        </h1>
                        <p className="text-sm text-gray-500 mt-2">
                            Priceful is a platform that helps you save time and
                            money by providing you with the best deals and
                            discounts. With Priceful, you can easily compare
                            prices, find the best deals, and make informed
                            purchases.
                        </p>
                        <Searchbar />
                    </div>
                    <Herocarousel />
                    <Image
                        src="/assets/icons/drawn-arrow-black-1.png"
                        alt="arrow"
                        width={160}
                        height={160}
                        className="absolute max-xl:hidden bottom-20 left-[46%] transform scale-x-[-1]"
                    />
                </div>
            </section>
        </>
    );
};

export default Home;
