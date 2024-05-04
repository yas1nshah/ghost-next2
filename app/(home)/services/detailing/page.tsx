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
        <h1 className='text-2xl md:text-4xl font-semibold'>Car Detailing</h1>
        <div className="text-xs md:text-sm breadcrumbs ">
              <ul>
                <li><Link href={"/"}>Home</Link></li> 
                <li><Link href={`/services`}>Services</Link></li> 
                <li>Car Detailing</li>
              </ul>
        </div>
        <hr className='opacity-30 border-base-content'/>
        </div>

        <div className="my-4 flex justify-between w-full bg-card rounded-xl">
            <div className='w-1/3 flex justify-center item-center'>

                <Image src={"/media/services/partners/eld.png"} width={200} height={200} className='w-1/2 h-auto' alt='Express Lube and Detailing'/>
            </div>
            <div className='flex-grow bg- p-4'>

                 <h2  className='text-xl font-semibold'>Express Lube & Detailing</h2>
                <p className='text-xs text-primary'>GHOST PROTOCOLS OFFICIAL PARTNER</p>
                <div className="flex justify-evenly gap-4 bg-card py-2 rounded-xl my-4">
                    <Link href={`tel:03104408322`}  target='blank' style={{ backgroundPosition: '0px 0px' }} className='icon invert dark:invert-0'/>
                    <Link href={`https://instagram.com/express_lube_and_detailing?utm_medium=copy_link`}  target='blank' style={{ backgroundPosition: '-60px 60px' }} className='icon invert dark:invert-0'/>
                    <Link href={`https://wa.me/923104408322`} target='blank' style={{ backgroundPosition: '-60px 0px' }} className='icon invert dark:invert-0'/>
                  </div>
            </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Premium Detailing Packages:</AccordionTrigger>
                <AccordionContent style={{ whiteSpace: 'pre-wrap' }}>
                {`🚗 Hatch - 12,500rs
                🚘 Sedan - 14,500rs
                🚙 Crossover - 16,500rs
                🛻 SUV/Luxury Sedan - 20,500rs

                Premium Package includes:

                Complete Interior + Engine Deep Cleaning 

                Dual Step Paint Correction:

                - Includes Branded Cutting Compound with Buff Machine

                - Branded Finishing High Gloss Compound with Buff Machine

                6 Months Ceramic Coating Application 

                Experience:
                - Deep Candy Gloss ✅
                - Swirl-Free Finish ✅
                - Mirror-Like Shine ✅

                Give your car the shine it deserves. Contact us today!" 🚗✨`}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Explore Our Premium Ceramic and Glass Coating Selection at Express Lube and Detailing for Optimal Vehicle Protection:</AccordionTrigger>
                <AccordionContent style={{ whiteSpace: 'pre-wrap' }}>
                        {`  
            🇩🇪 Sonax Coating (Germany)
            - 6 Months Protection: 14,500rs

            🇹🇷 Nasiol Nano Ceramic Coating (Turkey)
            - 1 Year: 17,500rs
            - 2 Years: 24,500rs
            - Up to 5 Years: 29,500rs

            Graphene Coating
            - 3 Years: (USA) 24,500rs
            - 3 Years (Turkey) (Self-healing) 36,500rs 

            💥 We Offer IR Curing for Ceramic/Glass Coating Right at Your Doorstep! 💥

            Benefits of Ceramic Coating:

            * Achieve Mirror-Like Reflection ✅
            * Candy Gloss Shine ✅
            * Shield Against Scratches ✅
            * Repel Water and Dust Effortlessly ✅
            * Hassle-Free Cleaning ✅
            * Long-Lasting Durability ✅
            * Protects Against UV Rays ✅
            * Guards Against Bird Droppings and Acid ✅
            * No Wax Needed ✅️

            All of Our Packages Include:

            - Complete Interior Deep Cleaning
            - Engine Bay Cleaning
            - Exterior Scaling
            - Dual Step Paint Correction
            - Application of Your Chosen Coating
            - Optional IR Curing (as needed)

            Additional Services Available:
            - Glass/Windows Coatings
            - Rims Coating
            - Leather Treatment
            - Plastic Parts Treatment

            Elevate your vehicle's protection and aesthetics with our expert services. Contact us for booking and further information!
                            `}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Our Premium Paint Protection Film (PPF) Packages:</AccordionTrigger>
                <AccordionContent  style={{ whiteSpace: 'pre-wrap' }}>
                {`
                🥉 Bronze Package 🥉
                - TPH PPF
                - Mid-tier PPF with a lifespan of +2 years
                - Thickness: 7Mils
                - Cost: 135,000rs

                🥇 Gold Package 🥇
                - TPU PPF
                - High-end PPF with self-healing capabilities and a lifespan of +5 years
                - Thickness: 7.5Mils
                - Cost: 170,000rs

                💎 Platinum Package 💎
                - TPU PPF
                - Top-tier PPF with ultimate self-healing abilities and a lifespan of +5 years
                - Thickness: 8.5Mils
                - Cost: 200,000rs

                🌟 Special PPF Options Available 🌟
                - Matte Finish PPF
                - Gloss Black Color PPF

                Get the protection your car deserves. Contact us for details and bookings
                `}
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <div className='flex justify-center'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27219.495010918075!2d74.30332373860652!3d31.484673398326468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904106691c4c7%3A0xfb24ddaf1e7bc6c2!2sModel%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714774911791!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        className='w-full h-44 rounded-xl'
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    </div>
    
  )
}

export default DetailingPage
