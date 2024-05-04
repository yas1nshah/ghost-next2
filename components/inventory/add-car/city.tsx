
import { CarFinal, CarSchema } from '@/schemas'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CarResult } from '@/types'
import { Button } from '@/components/ui/button'

const SelectCity = (props : any) => {
    const {newCar, setNewCar}: {newCar: CarFinal, setNewCar:React.Dispatch<React.SetStateAction<CarFinal>>} = props;
    const [open, setOpen] = React.useState(false)


    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
          if (e.key === "," && (e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            setOpen((open) => !open)
          }
        }
    
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
      }, [])

    const [keyword, setKeyword] = useState("")
    const [result, setResult] = useState<{id: number , name: string}[]>([{"id": 103, "name": "Lahore"}, {"id": 162, "name": "Rawalpindi"}, {"id": 85, "name": "Karachi"}, {"id": 130, "name": "Multan"}, {"id": 71, "name": "Islamabad"}, {"id": 50, "name": "Faisalabad"},]);
  
      
    const handleInputChange = (e:string)=>{
          console.log(result.length)
          setKeyword(e);
          let searchResult: {id: number , name: string}[];
          const cachedCities = localStorage.getItem('cities');
          if (cachedCities) {
              const parsedCities = JSON.parse(cachedCities);
              searchResult = parsedCities.filter((city : {id: number , name: string}) =>
                city.name.toLowerCase().trim().includes(e.toLowerCase().trim())
              );
              // console.log(searchResult)
              setResult(searchResult.slice(0,15));
          }
      }

      useEffect(() => {
        const fetchCities = async () => {
            try {
                const lastFetchTime = localStorage.getItem('citiesFetchTime');
                if (lastFetchTime && Date.now() - parseInt(lastFetchTime) < (24 * 60 * 60 * 1000)) {
                    // Makes exist in local storage and were fetched within the last 24 hours
                    console.log('cities exist in local storage and are recent.');
                    return;
                }
    
                const response = await fetch('/cities.json'); // Adjust the path as needed
                if (!response.ok) {
                    throw new Error('Failed to fetch cities');
                }
                const citiesData = await response.json();
                // console.log(makesData);
                // Store makes in local storage
                localStorage.setItem('cities', JSON.stringify(citiesData));
                localStorage.setItem('citiesFetchTime', Date.now().toString());
            } catch (error) {
                console.error('Error fetching cities from file:', error);
            }
        };
  
        
        fetchCities();
    }, []);

    return (
        <>
        <Button onClick={(e) => {e.preventDefault(); setOpen((prev) => !prev)}} className="rounded-xl bg-background border-2 flex justify-between pr-4 items-center gap-16 w-full h-4 py-6">
            <div className="flex gap-2 items-center">
              <p className={`text-sm ${newCar.location == ''&&"opacity-55" } text-card-foreground`}>
                {newCar.location == ''? " Choose Your Location": newCar.location}
              </p>
            </div>
            <p className="text-sm opacity-65 md:inline hidden text-card-foreground">
              Press{" "}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                <span className="text-xs">⌘</span>,
              </kbd>
            </p>
          </Button>
       
        <CommandDialog open={open} onOpenChange={setOpen}  >
          <CommandInput value={keyword}  onValueChange={(e) => handleInputChange(e)} placeholder="Type your..." />
          <CommandList>
            <CommandEmpty>
                Cant find your City? <Link className='text-primary font-semibold' href={'/inventory/add-car/report-city'}>Report</Link>
            </CommandEmpty>
            {result.length > 0 &&
            <CommandGroup heading="Suggestions">
            {result.map((city, index) => (
              <CommandItem key={index} onSelect={() => {
                setNewCar({...newCar,
                    location: city.name})
                setKeyword('');
                setOpen((prev) => !prev);
                }}>
                <ArrowTopRightIcon className="mr-2 h-4 w-4" />
                {city.name}
              </CommandItem>
            ))}
            </CommandGroup> }
          </CommandList>
        </CommandDialog>
      </>
  )
}

export default SelectCity