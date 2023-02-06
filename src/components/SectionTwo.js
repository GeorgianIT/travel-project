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
    console.log(carousel.current.scrollWidth , carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  useEffect(() => {
    fetchImages();
  }, []);
  
  const fetchImages = async () => {
    setImages(myData);
}
  return (
    <motion.div id='discover' className=' bg-black snap-start flex justify-center h-[80vh]'>
      <motion.div ref={carousel} className='carousel overflow-hidden w-[80vw]'>
      <motion.div drag='x' dragConstraints={{ right: 1600, left: -1000}} id= 'image-track' className='inner-carousel flex h-full gap-10 justify-center w-[50vw]'>
        {images.map((data) => { return <Images key={data.unicKey} data={data} /> })}
      </motion.div> 
      </motion.div>
    </motion.div>
  )
}

export default SectionTwo