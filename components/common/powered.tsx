import React from 'react'
import Image from 'next/image'

const PoweredBy = () => {
  return (
    <div className='m-4 max-w-6xl md:mx-auto'>
      <h2 className="text-sm font-semibold">Featuring:</h2>
      <div className='flex gap-4 flex-wrap md:flex-nowrap'>
        <div className="overflow-clip rounded-xl bg-card h-20 md: w-24 w-1/4 flex items-center justify-center">
          <Image src={'/media/powered/autonation.png'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip rounded-xl bg-card h-20 md: w-24 w-1/4 flex items-center justify-center">
          <Image src={'/media/powered/aub.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip rounded-xl bg-card h-20 md: w-24 w-1/4 flex items-center justify-center">
          <Image src={'/media/powered/chp.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip rounded-xl bg-card h-20 md: w-24 w-1/4 flex items-center justify-center">
          <Image src={'/media/powered/eld.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip rounded-xl bg-card h-20 md: w-24 w-1/4 flex items-center justify-center">
          <Image src={'/media/powered/khan.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip rounded-xl bg-card h-20 md: w-24 w-1/4 flex items-center justify-center">
          <Image src={'/media/powered/profix.jpg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip rounded-xl bg-card h-20 md: w-24 w-1/4 flex items-center justify-center">
          <Image src={'/media/powered/sp.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip rounded-xl bg-card h-20 md: w-24 w-1/4 flex items-center justify-center">
          <Image src={'/media/powered/thegarage.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>
      </div>
    </div>
  )
}

export default PoweredBy
