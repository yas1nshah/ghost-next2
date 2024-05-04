"use client"


import React, { useEffect, useState, useTransition } from 'react'
import * as z from "zod"
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import { useRouter } from 'next/navigation'

import formatAmount from '@/lib/foramt-price'
import { postCar, saveDocumentInteraction } from '@/actions/post-car'
import { Button } from '@/components/ui/button'
import { CarFinal, CarSchema } from '@/schemas'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'
import { Readable } from 'stream';

import SelectModel from './model'
import SelectCity from './city'
import SelectRegistration from './registration'








interface FileBlob extends Readable {
  name: string;
}

const AddCarForm = ({isTeam}: {isTeam: boolean}) => {
  const [isPending, startTransition] =  useTransition()
  const router = useRouter()

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
    
  const [gallery, setGallery] = useState<Blob[]>([]);

  const [newCar, setNewCar] = useState<CarFinal>({
    id: "",
    title: "",
    galleryIndex: 0,
    gallery: [],
   
    make: "",
    model: "",
    year: 2000,
    price: 100000,
  
    location: "",
    mileage: 0,
    transmission: false,
  
    engine: "",
    engineCapacity: "",
    registration: "",
    body: "",
    color: "Black",
  
    sellerID: "",

    sellerComments: "",
    ref: "none"
})

const compressAndConvertToWebP = async (imageFile: File): Promise<Blob> => {
  const img = await createImageBitmap(imageFile);
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx?.drawImage(img, 0, 0);
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob as Blob);
    }, 'image/webp', 0.7); // Convert to WebP format with quality 0.7 (adjust as needed)
  });
};


  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/tiff',
    'image/bmp',
    'image/svg+xml', // SVG images
    'image/vnd.microsoft.icon', // ICO (icon) images
    'image/vnd.adobe.photoshop', // PSD (Photoshop) files
    'image/x-icon', // Icon files
    'image/x-xcf', // GIMP files
    'image/x-pcx', // PCX images
    'image/x-tga', // TGA images
    'image/x-exr', // OpenEXR images
    'image/x-dds', // DDS images
    'image/x-cmu-raster', // RAS images
    'image/x-portable-anymap', // PNM (Portable Anymap) images
    'image/x-portable-bitmap', // PBM (Portable Bitmap) images
    'image/x-portable-graymap', // PGM (Portable Graymap) images
    'image/x-portable-pixmap', // PPM (Portable Pixmap) images
    'image/x-sgi', // SGI images
    'image/x-xbitmap', // XBM (X BitMap) images
    'image/x-xpixmap', // XPM (X PixMap) images
    'image/vnd.wap.wbmp', // WBMP (Wireless Bitmap) images
  ];
  // ? Gallery
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
  
    if (!files || files.length === 0) {
      return;
    }
  
    const selectedFiles = Array.from(files).filter((file) =>
      allowedTypes.includes(file.type)
    );
  
    if (selectedFiles.length === 0) {
      alert('Please select valid image files.');
      return;
    }
  
    // Ensure that the total number of selected files is not more than 10
    if (selectedFiles.length + gallery.length > 10) {
      alert('You can only select up to 10 images.');
      return;
    }
  
    const compressedImages = await Promise.all(
      selectedFiles.map(async (file) => {
        return await compressAndConvertToWebP(file);
      })
    );
  
    setGallery((prevGallery) => [...prevGallery, ...compressedImages]);
  };
  

  useEffect(() => {
    const newGallery: string[] = gallery.map((_, index) => `${newCar.make}-${newCar.model}-${newCar.year}-<ID>-${index}`);
    setNewCar({...newCar, gallery: newGallery});
  }, [gallery, newCar.make, newCar.model, newCar.year]); // Include dependencies
  

  const removeImage = (index: number) => {
        
    setGallery((prevGallery) => {
      const newGallery = [...prevGallery];
      newGallery.splice(index, 1);
      return newGallery;
    });

    if (gallery.length === 0)
    {
      setNewCar({...newCar, galleryIndex: 0})
    }
    else if(index >newCar.galleryIndex)
    {
      setNewCar({...newCar, galleryIndex: newCar.galleryIndex})
      
    }
    else if(gallery.length > 1)
    {
      setNewCar({...newCar, galleryIndex: index-1})
    }
    else{
      setNewCar({...newCar, galleryIndex: 0})
    }
  }



  const saveImages = async (gallery: Blob[], newCar: CarFinal, id: string) => {
    for (let index = 0; index < gallery.length; index++) {
      try {
        setSuccess(`Uploading Image ${index + 1}`);
        const image = gallery[index];
        const makeModelYear = `${newCar.make}-${newCar.model}-${newCar.year}`;
        const imageName = `${makeModelYear}-${id}-${index}.webp`;
        const data = new FormData();
        data.append('img', new File([image], imageName, { type: 'image/webp' }));
  
        const result = await saveDocumentInteraction(data);
        setError(result.error ? result.error + index : '');
        setSuccess(result.success ? result.success + index : '');
        console.log(`Image ${index + 1} uploaded successfully.`);
      } catch (error) {
        console.error('Error saving image:', error);
        setError(`Error saving image ${index + 1}`);
      }
    }
  };
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    setError('');
    setSuccess('');
  
    if (!newCar.make || !newCar.model || !newCar.location || !newCar.registration) {
      setError('Please fill out all required fields.');
      return;
    }
  
    startTransition(async () => {
      try {
        const data = await postCar(newCar);
        setSuccess('Car information saved successfully.');
  
        if (data.newId) {
          setSuccess('Uploading Images...');
          await saveImages(gallery, newCar, data.newId);
          setSuccess('Images uploaded successfully.');
        } else {
          setError('Failed to upload images.');
        }
  
        router.replace('/account');
      } catch (error) {
        console.error('Error submitting form:', error);
        setError('An error occurred while submitting the form.');
      }
    });
  };
  

  return (
    <div className='space-y-6 my-6'>
       
        <div className="relative">
          <span className='label-text-alt'>Gallery</span>
          {
            gallery.length > 0 && (
            
            <div className='flex gap-2'>

                {gallery.map((file, index) => (
                    <div key={index} className={`relative m-4 rounded-xl ${index === newCar.galleryIndex && "border-2"} border-secondary`}
                    onClick={()=>setNewCar({...newCar, galleryIndex: index})}>
                        <img
                            className='w-20 h-20 object-cover rounded-xl'
                            src={URL.createObjectURL(file)}
                            alt={`Image ${index + 1}`}
                        />
                        <i className="bg-base hover:bg-secondary absolute top-1 right-1 px-2 rounded-xl" onClick={()=>removeImage(index)}>x</i>
                     </div>
                    ))}
                
            </div>
          )}
          <Input className='text-lg' type='file' multiple={true} onChange={handleFileChange}/>
        </div>
        
        <form className='space-y-6' onSubmit={onSubmit}>
        {/* Select Location */}
        <div className='relative'>
          <span className='label-text-alt'>Location</span>
          <SelectCity newCar={newCar} setNewCar={setNewCar}/>
          
        </div>

        {/* Select Model */}
        <div className='relative'>
          <span className='label-text-alt'>Model</span>
          <SelectModel newCar={newCar} setNewCar={setNewCar}/>
          
        </div>

        {/* Year and Price */}
        <div className="flex justify-between flex-col md:flex-row gap-4 w-full">
            {/* Select Year */}
            <div className='relative w-full'>
              <span className='label-text-alt'>Year</span>
              <Input
                type='number'
                placeholder='Enter Year'
                value={newCar.year }
                className='text-lg'
                min={1975}
                max={2024}
                onChange={(e)=>{
                  setNewCar({...newCar, year: parseInt(e.target.value)})
                }}
              />

            </div>

            {/* Select Price */}
            <div className='relative w-full'>
              <span className='label-text-alt'>Price</span>
              <Input
                type='number'
                placeholder='Enter Price'
                className='text-lg'
                value={newCar.price }
                onChange={(e)=>{
                  setNewCar({...newCar, price: parseInt(e.target.value)})
                }}

              />
            
              <p className='label-text-alt mb-4 mt-2 text-end'>{formatAmount(newCar.price) } </p>

            </div>
        </div>

        {/* Select Registration */}
        <div className='relative'>
          <span className='label-text-alt'>Registration</span>
          <SelectRegistration newCar={newCar} setNewCar={setNewCar}/>
          
        </div>

        {/* Color and Mileage */}
        <div className="flex justify-between flex-col md:flex-row gap-4 w-full">
            {/* Select Color */}
            <div className='relative w-full'>
              <span className='label-text-alt'>Color</span>
              <Select defaultValue='Black' onValueChange={(e)=>setNewCar({...newCar,color: e})}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Black">Black</SelectItem>
                  <SelectItem value="White">White</SelectItem>
                  <SelectItem value="Red">Red</SelectItem>
                  <SelectItem value="Silver">Silver</SelectItem>
                  <SelectItem value="Blue">Blue</SelectItem>
                  <SelectItem value="Gray">Gray</SelectItem>
                  <SelectItem value="Green">Green</SelectItem>
                  <SelectItem value="Yellow">Yellow</SelectItem>
                  <SelectItem value="Orange">Orange</SelectItem>
                  <SelectItem value="Brown">Brown</SelectItem>
                  <SelectItem value="Beige">Beige</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>


            </div>

            {/* Select Mileage */}
            <div className='relative w-full'>
              <span className='label-text-alt'>Mileage</span>
              <Input
                type='number'
                placeholder='Enter Mileage'
                className='text-lg'
                value={newCar.mileage }
                onChange={(e)=>{
                  setNewCar({...newCar, mileage: parseInt(e.target.value)})
                }}
              />
              <p className='label-text-alt mb-4 mt-2 text-end'>{newCar.mileage.toLocaleString() } km </p>

            </div>
        </div>

        {/* Seller Comments */}
        <div className='relative w-full'>
              <span className='label-text-alt'>Seller Comments</span>
              <Textarea onChange={(e)=>setNewCar({...newCar, sellerComments : e.target.value})} placeholder="Type your message here." />
        </div>

        {/* Select REF */}
        { isTeam &&
          <div className='relative w-full'>
              <span className='label-text-alt'>Ref</span>
              <Input
                type='text'
                placeholder='Enter Ref'
                className='text-lg'
                value={newCar.ref? newCar.ref : "None" }
                onChange={(e)=>{
                  setNewCar({...newCar, ref: e.target.value})
                }}
              />
              <p className='label-text-alt mb-4 mt-2 text-end'>{newCar.mileage.toLocaleString() } km </p>

        </div>}

        
        <FormError message={error}/>
        <FormSuccess message={success}/>

        {!isPending && (<Button
        type='submit'
        >
          Post Car
        </Button>)}
        </form>

    </div>
  )
}

export default AddCarForm





{/* <Input
            type='text'
            placeholder='Choose Your Model'
            className=''
            onChange={(e) => {
              setNewCar({...newCar, title:e.target.value })
              // setTitle(e.target.value);
              getModels(e.target.value);
            }}
            onFocus={() => setShowModels(true)}
            onBlur={() => setShowModels(false)}
            value={newCar?.title}
          />

          {
            showModels &&
            <div  className="p-4 my-2 absolute top-full left-0 z-20 bg-white dark:bg-black drop-shadow-xl w-full overflow-hidden overflow-y-scroll h-full md:h-64 rounded-xl">
              {
                modelData.length > 0 ?
                  modelData.map((model, index) => (
                    <div key={index} className='p-2'
                      onMouseDown={() => {
                        setNewCar({...newCar,
                          make : model.make,
                          model : model.model,
                          engine : model.engineType,
                          engineCapacity : model.engineCapacity,
                          body : model.bodyType,
                          title : model.title })
                        
                        console.log("hello")
                        console.log(newCar)
                        // setMake(model.make);
                        // setModel(model.model);
                        // setEngine(model.engineType);
                        // setEngineCapacity(model.engineCapacity);
                        // setBody(model.bodyType);
                        // setTitle(model.title); // Update title here
                        // setCheck(prevCheck => ({ ...prevCheck, model: true }));
                        setShowModels(false);
                      }}
                    >
                      <h5 className="text-xs md:text-sm">
                        {model.make}
                      </h5>
                      <h4 className="text-base md:text-lg font-semibold">
                        {model.model}
                      </h4>
                      <hr className='dark:opacity-35 opacity-100' />
                    </div>
                  )) :
                  <p className="text-center">No Cars Found <span className='text-secondary'><Link href={'/'}>Report</Link></span></p>
              }
            </div>
          } */}


          // <Input
          //   type='text'
          //   placeholder='Choose Your Location'
          //   className=''
          //   onChange={(e) => {
          //     if(newCar)
          //     newCar.location  = e.target.value ;
          //     // setTitle(e.target.value);
          //     getCities(e.target.value);
          //   }}
          //   onFocus={() => setShowCity(true)}
          //   onBlur={() => setShowCity(false)}
          //   value={newCar?.location}
          // />

          // {
          //   showCity &&
          //   <div  className="p-4 my-2 absolute top-full left-0 z-20 bg-white dark:bg-black drop-shadow-xl w-full overflow-hidden overflow-y-scroll h-full md:h-64 rounded-xl">
          //     {
          //       cityData.length > 0 ?
          //         cityData.map((city, index) => (
          //           <div key={index} className='p-2'
          //             onMouseDown={() => {
          //               if(newCar)
          //               {
          //                 newCar.location = city.name;
          //               }
          //               setShowCity(false);
          //             }}
          //           >
                   
          //             <h4 className="text-base md:text-lg font-semibold">
          //               {city.name}
          //             </h4>
          //             <hr className='dark:opacity-35 opacity-100' />
          //           </div>
          //         )) :
          //         <p className="text-center">No Cars Found <span className='text-secondary'><Link href={'/'}>Report</Link></span></p>
          //     }
          //   </div>
          // }

{/* <Input
            type='text'
            placeholder='Choose Your Registration'
            className=''
            onChange={(e) => {
              setNewCar({...newCar, registration:e.target.value})
              
              // setTitle(e.target.value);
              getRegistrations(e.target.value);
            }}
            onFocus={() => setShowReg(true)}
            onBlur={() => setShowReg(false)}
            value={newCar.registration}
          />

          {
            showReg &&
            <div  className="p-4 my-2 absolute top-full left-0 z-20 bg-white dark:bg-black drop-shadow-xl w-full overflow-hidden overflow-y-scroll h-full md:h-64 rounded-xl">
              {
                regData.length > 0 ?
                  regData.map((city, index) => (
                    <div key={index} className='p-2'
                      onMouseDown={() => {
                        setNewCar({...newCar, registration: city.name})
                        setShowReg(false);
                      }}
                    >
                   
                      <h4 className="text-base md:text-lg font-semibold">
                        {city.name}
                      </h4>
                      <hr className='dark:opacity-35 opacity-100' />
                    </div>
                  )) :
                  <p className="text-center">No Cars Found <span className='text-secondary'><Link href={'/'}>Report</Link></span></p>
              }
            </div>
          }           */}