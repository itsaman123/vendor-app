import React from 'react'
import Image from './assets/banner1.jpg'
 const Banner = () => {
    return (
        <>
            <div className="relative font-sans">
    <div className="w-full bg-[#161136] flex flex-col justify-center items-center text-center text-white p-6">
        <img 
            src={Image} 
            alt="BannerImage" 
            className="w-full min-h-[100px] sm:min-h-[120px] md:min-h-[180px] lg:min-h-[210px] xl:min-h-[240px]"
        />
    </div>
</div>


        </>
    )
}

export default Banner