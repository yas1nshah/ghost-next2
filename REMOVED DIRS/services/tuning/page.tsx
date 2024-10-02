import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
    title: "Ghost Protocols Car Detailing.",
    description: "It wasn't easy to reach where we are, but here something we can tell..",
  
  };

const DetailingPage = () => {
  return (
    <div className='main'>
      <div className="m-2">
        <h1 className='text-2xl md:text-4xl font-semibold'>Car Tuning</h1>
        <div className="text-xs md:text-sm breadcrumbs ">
              <ul>
                <li><Link href={"/"}>Home</Link></li> 
                <li><Link href={`/services`}>Services</Link></li> 
                <li>Car Tuning</li>
              </ul>
        </div>
        <hr className='opacity-30 border-base-content'/>
        </div>

        <div className="my-4 flex justify-between w-full bg-card rounded-xl">
            <div className='w-1/3 flex justify-center item-center'>

                <Image src={"/media/services/partners/pro.jpg"} width={200} height={200} className='w-1/2 h-auto my-4' alt='Express Lube and Detailing'/>
            </div>
            <div className='flex-grow bg- p-4'>

                 <h2  className='text-xl font-semibold'>Profix Garage</h2>
                <p className='text-xs text-primary'>GHOST PROTOCOLS OFFICIAL PARTNER</p>
                <div className="flex justify-evenly gap-4 bg-card py-2 rounded-xl my-4">
                    <Link href={`tel:03234374566`}  target='blank' style={{ backgroundPosition: '0px 0px' }} className='icon invert dark:invert-0'/>
                    <Link href={`https://www.instagram.com/profixgarage/`}  target='blank' style={{ backgroundPosition: '-60px 60px' }} className='icon invert dark:invert-0'/>
                    <Link href={`https://wa.me/92323 4374566`} target='blank' style={{ backgroundPosition: '-60px 0px' }} className='icon invert dark:invert-0'/>
                  </div>
            </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Details</AccordionTrigger>
                <AccordionContent style={{ whiteSpace: 'pre-wrap' }}>
                {`ProFix Garage is where Passion meets Profession. A self sufficient garage offering Body Work, Electrical and complete Mechanical services.
`}
                </AccordionContent>
            </AccordionItem>
            
           
        </Accordion>

        <div className='flex justify-center'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.345235468113!2d74.26719799999998!3d31.459688000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919016eb14cfbed%3A0xc777d0472529f7af!2sPROFIX%20GARAGE!5e0!3m2!1sen!2s!4v1714776974761!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                className='w-full h-24 rounded-xl'
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
   

    <hr className="my-6 h-4" />

    </div>
    
  )
}

export default DetailingPage
