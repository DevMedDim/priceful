"use client";
import React from "react";

const Searchbar = () => {
    const handSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <form
            onSubmit={handSubmit}
            action=""
            className="flex flex-wrap gap-4 mt-12"
        >
            <input
                type="text"
                placeholder="Search"
                className=" flex-1 rounded-md border-2  bg-transparent py-2 px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-700 focus:outline-none  "
            />

            <button
                type="submit"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Search
            </button>
        </form>
    );
};

export default Searchbar;
