import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import team from '@/static-files/team'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

   

export const metadata = {
  title: "About Us - The Ghostly Journey.",
  description: "It wasn't easy to reach where we are, but here something we can tell..",

};

const GPAPP = () => {
  return (
    <div className=" p-2">
        <div className="m-2">
        <h1 className='text-2xl md:text-4xl font-semibold'>GP APP</h1>
        <div className="text-xs md:text-sm breadcrumbs ">
              <ul>
                <li><Link href={"/"}>Home</Link></li> 
                <li><Link href={`/app`}>GP APP</Link></li> 
                
              </ul>
        </div>
        <hr className='opacity-30 border-base-content'/>
        </div>

        <div className="p-4 my-4 rounded-xl w-full bg-card">
            <h2 className="text-2xl font-semibold">For IOS</h2>
            <h4 className="text-sm">Add a website icon to your Home Screen</h4>
            <p className="text-xs whitespace-pre-wrap">
                {`You can add a website icon to your iPhone Home Screen for quick access.
    1. While viewing the website, tap the Share button  in the menu bar.
    2. Scroll down the list of options, then tap Add to Home Screen.
If you don’t see Add to Home Screen, you can add it. Scroll down to the bottom of the list, tap Edit Actions, then tap Add to Home Screen.
The icon appears only on the device where you add it`}
                <div className='flex justify-center w-full m-4'>

                <Image src={"/ios-prev.png"} width={200} height={200} alt='IOS App Prev'/>
                </div>
            </p>
        </div>


        <div className="p-4 my-4 rounded-xl w-full bg-card">
            <h2 className="text-2xl font-semibold">For Andriod</h2>
            <h4 className="text-sm">Add a website icon to your Home Screen</h4>
            <p className="text-xs whitespace-pre-wrap">
                {`You can add a website icon to your Andriod Home Screen for quick access.
    1. While viewing the website, tap the Three Dots on top corner.
    2. Scroll down the list of options, then tap Add to Home Screen.
The icon appears only on the device where you add it`}
                <div className='flex justify-center w-full m-4'>

                <Image src={"/andriod-prev.jpeg"} width={200} height={200} alt='IOS App Prev'/>
                </div>
            </p>
        </div>

    
    </div>
  )
}

export default GPAPP