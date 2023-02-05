import React from 'react'
import linkedin from '../assets/linkedin.svg'
import github2 from '../assets/github2.svg'

const Footer = () => {
  return (
      <div id='footer' className='w-full snap-start bg-neutral-900 h-[20vh]  flex justify-center'>
          <div className='w-[70%]'>
              <p className='text-white pt-[5vh] mb-5'>Would you like to get my CV in PDF?</p>
              
        <div className='flex justify-between'>
          <button href='#' onClick={onButtonClick} className='rounded-full bg-neutral-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'>Download CV</button>
          <div className=' w-90% flex justify-start gap-3'>
                <a href='https://www.linkedin.com/in/georgian-tudor/' target='_blank'><img src={linkedin} alt='linkedin' className='w-[45px]' /></a>                  
                <a href='https://github.com/GeorgianIT' target='_blank' ><img src={github2} alt='github' className='w-[44px]' /></a>      
            </div>
        </div>
      </div>
    </div>
  )
}

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('CVGeorgian.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'CVGeorgian.pdf';
          alink.click();
      })
  })
}

export default Footer