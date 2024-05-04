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
        <h1 className='text-2xl md:text-4xl font-semibold'>Tyres & Rims</h1>
        <div className="text-xs md:text-sm breadcrumbs ">
              <ul>
                <li><Link href={"/"}>Home</Link></li> 
                <li><Link href={`/services`}>Services</Link></li> 
                <li>Tyres & Rims</li>
              </ul>
        </div>
        <hr className='opacity-30 border-base-content'/>
        </div>

        <div className="my-4 flex justify-between w-full bg-card rounded-xl">
            <div className='w-1/3 flex justify-center item-center'>

                <Image src={"/media/services/partners/nap.jpeg"} width={200} height={200} className='w-1/2 h-auto my-4' alt='Express Lube and Detailing'/>
            </div>
            <div className='flex-grow bg- p-4'>

                 <h2  className='text-xl font-semibold'>NA Performance</h2>
                <p className='text-xs text-primary'>GHOST PROTOCOLS OFFICIAL PARTNER</p>
                <div className="flex justify-evenly gap-4 bg-card py-2 rounded-xl my-4">
                    <Link href={`tel:03280407704`}  target='blank' style={{ backgroundPosition: '0px 0px' }} className='icon invert dark:invert-0'/>
                    <Link href={`http://instagram.com/na.performance`}  target='blank' style={{ backgroundPosition: '-60px 60px' }} className='icon invert dark:invert-0'/>
                    <Link href={`https://wa.me/923280407704`} target='blank' style={{ backgroundPosition: '-60px 0px' }} className='icon invert dark:invert-0'/>
                  </div>
            </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Details</AccordionTrigger>
                <AccordionContent style={{ whiteSpace: 'pre-wrap' }}>
                {`Get Best Deals On
                -Alloy Wheels & Tyres 
                -Performance Parts
                -Bucket Seats
                -Coilovers
                -Car Accessories etc
                For any query DM

                Delivery Available all over Pakistan 
                Cash On Delivery Available
`}
                </AccordionContent>
            </AccordionItem>
            
           
        </Accordion>


   

    <hr className="my-6 h-4" />

        <div className="my-4 flex justify-between w-full bg-card rounded-xl">
                <div className='w-1/3 flex justify-center item-center'>

                    <Image src={"/media/services/partners/sultan.jpg"} width={200} height={200} className='w-1/2 h-auto my-4' alt='Express Lube and Detailing'/>
                </div>
                <div className='flex-grow bg- p-4'>

                    <h2  className='text-xl font-semibold'>Sultan Traders</h2>
                    <p className='text-xs text-primary'>GHOST PROTOCOLS OFFICIAL PARTNER</p>
                    <div className="flex justify-evenly gap-4 bg-card py-2 rounded-xl my-4">
                        <Link href={`tel:03351956515`}  target='blank' style={{ backgroundPosition: '0px 0px' }} className='icon invert dark:invert-0'/>
                        <Link href={`https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2FSultan%2520Traders%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR28r6RAVO9-WYRLKexCMQVVlu7r2qlkhFPVMMdg-5MnyhnE-S9jm5XBxjs_aem_ARfdofJDFf9DjXIrM-1EvMBQ46-Tj17TXZdYyXZSbg5jtws18YvyMl9Q7qiOCfCBdQmHcl8GCy0HmNuUydOsj0n_&h=AT3SRyIQFW2In1rzUjVH9rTmqVZxLj2oWvzAqFqi2tZ6Ev8x-E6p8Iu_jDCdAbsQ4ncLYWIMplQeVlhKld0avTUnoo0fRYj--UTUkyuLFmKKYyBfZVZeGSCjdjf1g6Je35l3OMO2GsSLsaJQ7EmjBc-7vw`}  target='blank' style={{ backgroundPosition: '-60px 60px' }} className='icon invert dark:invert-0'/>
                        <Link href={`https://wa.me/9203351956515`} target='blank' style={{ backgroundPosition: '-60px 0px' }} className='icon invert dark:invert-0'/>
                    </div>
                </div>
            </div>
            <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Details</AccordionTrigger>
                <AccordionContent style={{ whiteSpace: 'pre-wrap' }}>
                {`All Kinds off tyres and Alloy Rims
`}
                </AccordionContent>
            </AccordionItem>
            
           
        </Accordion>
            <div className='flex justify-center'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108889.10183244201!2d74.16157944335937!3d31.475115599999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903621cbdb9d5%3A0x81c1c19e0600830e!2sSultan%20Traders%20(alloy%20rims%20%26%20Tyre)!5e0!3m2!1sen!2s!4v1714776262563!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                className='w-full h-24 rounded-xl'
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    </div>
    
  )
}

export default DetailingPage
