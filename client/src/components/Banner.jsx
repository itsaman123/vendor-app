import React from 'react'
import Image from '../nutribucket.png'
import Button from './Button'
const Banner = () => {
    return (
        <>
            <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src={Image} alt="BannerImage" class="absolute inset-0 w-full h-full object-cover" />

                <div class="min-h-[280px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 class="sm:text-4xl text-2xl font-bold mb-6">Explore The Helthier Food</h2>
                    <p class="sm:text-lg text-base text-center font-bold">Get The Testier Fresh Hive Directly From The Farms</p>
                    <Button name="Explore Now" />
                </div>
            </div>
        </>
    )
}

export default Banner