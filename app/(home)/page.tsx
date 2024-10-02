import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import CarCarosel from '@/components/common/car-carousel'
import Hero from '@/components/home/hero'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

import services from "@/static-files/services";
import { getHomeData } from '@/actions/home'

import { Car } from '@prisma/client';
import { Button } from '@/components/ui/button'



export const metadata = {
  title: "Buy & Sell Cars in Pakistan - Get Your Ride Now.",
  description: "Proudly providing unusual Car Needs in Pakistan. Buy & Sell Cars. List Your Car Now and let the Ghosts Work.",
};

export const revalidate = 100

const HomePage = async () => {
  const response = await  getHomeData()
  const { gpCars, featuredCars, recentCars } = response

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Image src={'/app-prev.webp'} height={400} width={400} alt="Ghost Protocols" />
      <h1 className="text-2xl font-semibold">GHOST PROTOCOLS V3</h1>
      <p className="">COMING SOON - STAY TUNED</p>
      <p className="opacity-40 text-xs">SOMETHING SPECIAL COMING UP</p>
    </div>
  )
}

export default HomePage





