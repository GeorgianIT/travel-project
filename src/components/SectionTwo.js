import React from 'react'
import myData from '../constants/images.json'
import Images from './Images';
import { useEffect, useState } from 'react';

const SectionTwo = () => {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setImages(myData);
}
  return (

  
    <div className='bg-black w-[100vw] snap-start flex gap-10 justify-center h-[100vh]'>
       {images.map((data) => { return <Images key={data.unicKey} data={data} /> })}
    </div>
  )
}

export default SectionTwo