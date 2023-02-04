import React from 'react'
import myData from '../constants/images.json'
import Images from './Images';
import { useEffect, useState, useRef } from 'react';
import {motion} from 'framer-motion'


const SectionTwo = () => {

  const [images, setImages] = useState([]);
  const [width, setWidth] = useState(0);

  const carousel = useRef(0);
  useEffect(() => {

    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])
  

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setImages(myData);
}
  return (

  
    <motion.div  className='bg-black snap-start flex justify-center h-[100vh]'>
      <motion.div  drag='x' dragConstraints={{right : 1000, left: -1000}} id= 'image-track' className='flex gap-10 justify-center'>
        {images.map((data) => { return <Images key={data.unicKey} data={data} /> })}
      </motion.div> 
    </motion.div>
  )
}

export default SectionTwo