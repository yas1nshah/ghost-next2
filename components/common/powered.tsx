import React from 'react'
import Image from 'next/image'

const PoweredBy = () => {
  return (
    <div className='m-4 max-w-6xl '>
      <h2 className="text-sm font-semibold">Powered By:</h2>
      <div className='flex gap-4'>
        <div className="overflow-clip roundex-xl bg-card h-24 w-24 flex items-center justify-center">
          <Image src={'/media/powered/autonation.png'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip roundex-xl bg-card h-24 w-24 flex items-center justify-center">
          <Image src={'/media/powered/aub.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip roundex-xl bg-card h-24 w-24 flex items-center justify-center">
          <Image src={'/media/powered/chp.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip roundex-xl bg-card h-24 w-24 flex items-center justify-center">
          <Image src={'/media/powered/eld.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip roundex-xl bg-card h-24 w-24 flex items-center justify-center">
          <Image src={'/media/powered/khan.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip roundex-xl bg-card h-24 w-24 flex items-center justify-center">
          <Image src={'/media/powered/profix.jpg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip roundex-xl bg-card h-24 w-24 flex items-center justify-center">
          <Image src={'/media/powered/sp.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>

        <div className="overflow-clip roundex-xl bg-card h-24 w-24 flex items-center justify-center">
          <Image src={'/media/powered/thegarage.jpeg'} height={100} width={100} alt='AutoNation'/>
        </div>
      </div>
    </div>
  )
}

export default PoweredBy
