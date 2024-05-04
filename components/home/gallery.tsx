import React from 'react'
import Image from 'next/image'

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 

const gallery = (props : any) => {
  const {gallery, id} = props;

  return (
    <Carousel className="h-full" 
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}  
      >

      <CarouselContent>
            {
              gallery.map((img:any, index:any)=> (
                <CarouselItem key={index} className='bg-black h-40 md:h-80 grow'>
                  <Image className='w-full h-full object-cover' src={`${img}`} width={800} height={800} alt='Gallery Item'/>
                </CarouselItem>
                ))
            }
      </CarouselContent>
      
      <div className="absolute top-0 left-0 p-2 h-full ">
        <CarouselPrevious  className="relative -translate-y-1/2"/>
      </div>
      
      <div className="absolute top-0 right-0 p-2 h-full">
        <CarouselNext className="relative -translate-y-1/2"/>
      </div>
      
    </Carousel>
  )
}

export default gallery
