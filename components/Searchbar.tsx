"use client";
import { ScrapeSaveAction } from "@/lib/actions";
import { FormEvent, useState } from "react";
const isValidProductLink = (link: string) => {
    try {
        const url = new URL(link);
        const hostname = url.hostname;
        if (
            hostname.includes("amazon.com") || hostname.includes("amazon.") || hostname.endsWith("amazon")
            // url.pathname.startsWith("/products/")   // check if the link starts with /products/
            // && url.pathname.endsWith("/")           // check if the link ends with a slash
            // && url.pathname.split('/').length === 4 // check if the link has 4 parts
            // && url.pathname.split('/')[2] === "setupgame"  // check if the producthunt link is for setupgame
        ) {
            return true; // if the link is  a valid setupgame link, return true
        }
        // const productId = url.pathname.split('/')[2];
        // const productSlug = url.pathname.split('/')[3];
        // const product = getProductById(productId);
        // if (!product) {
        //     return false; // if the product is not found, return false
        // }
        // if (productSlug !== product.slug) {
        //     return false; // if the slug is not the same, return false
        // }
        // return true; // if the link is a valid setupgame link, return true
    } catch (error) {
        return false;
    }
    return false;
};
const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValidLink = isValidProductLink(searchQuery);

        if (!isValidLink) {
            return alert("provided link is not a amazon link");
        }
        try {
            setIsLoading(true);
            //scraping the product page
            const product = await ScrapeSaveAction(searchQuery);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-wrap gap-4 mt-12"
        >
            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className=" flex-1 rounded-md border-2  bg-transparent py-2 px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-700 focus:outline-none  "
            />

            <button
                type="submit"
                disabled={searchQuery === ""}
                className=" cursor-pointer rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:text-gray-200"
            >
                {isLoading ? "Searching..." : "Search"}
            </button>
        </form>
    );
};

export default Searchbar;
