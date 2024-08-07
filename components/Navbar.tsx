import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navIcons = [
    { src: "/assets/icons/search.png", alt: "search" },
    { src: "/assets/icons/outline-heart.png", alt: "heart" },
    { src: "/assets/icons/user.png", alt: "user" },
]
const Navbar = () => {
    return (
        <header className='w-full'>
            <nav className='flex justify-between items-center px-6 md:px-20 py-4 shadow-sm'>
                <Link href="/" className='flex items-center gap-1' >
                    <Image src="/assets/icons/logo.png" width={30} height={30} alt="logo" />
                    <p className='text-[21px]  font-bold'>
                        Price<span className='text-amber-700'>ful</span>
                    </p>

                </Link>
                <div className="flex items-center gap-5">
                    {navIcons.map((icon, index) => (
                        <Image key={index} src={icon.src} width={25} height={25} alt={icon.alt} className='cursor-pointer object-contain' />
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
