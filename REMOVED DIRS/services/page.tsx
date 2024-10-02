import services from '@/static-files/services'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ServicesPage = () => {
  return (
    <div className='space-y-6'>
        <div className="m-2">
            <h1 className='text-2xl md:text-4xl font-semibold'>Services</h1>
            <div className="text-xs md:text-sm breadcrumbs ">
                <ul>
                    <li><Link href={"/"}>Home</Link></li> 
                    <li><Link href={`/demand-list`}>Services</Link></li> 
                </ul>
            </div>
            <hr className='opacity-30 border-base-content'/>
        </div>

        <div className="m-2 grid grid-cols-2 gap-4">
          {
            services.map((item,index)=>(
              <Link href={item.link} key={index} className="bg-card  hover:bg-white/10 transition-all cursor-pointer 
                            flex justify-between p-4 rounded-xl  md:h-auto
                            flex-col items-end
                            md:flex-row relative">
                <div className="text-wrap order-2  w-full md:order-1">
                  <h3 className="text-primary text-xs hidden md:inline">{item.subTitle}</h3>
                  <h2 className="text-base md:text-lg self-start font-semibold">{item.title}</h2>
                  <p className=" text-sm hidden md:inline">{item.details}</p>
                </div>
                <Image className="w-3/5 h-auto mx-auto order-1 md:w-auto md:h-full md:order-2" width={80} height={80} src={`/media/services${item.image}`} alt={item.title}/>
                <div className='absolute bottom-2 right-2'>
                  <ArrowTopRightIcon className='w-4 h-4'/>
                </div>
              </Link>
            ))
          }
        </div>
    </div>
  )
}

export default ServicesPage