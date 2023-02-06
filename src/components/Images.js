import React from 'react'
import Heart from '../icons/Heart'
import Post from '../icons/Post'
import Comment from '../icons/Comment'
import { useState, useEffect } from 'react'
import FullScreen from '../icons/FullScreen'
import FullScreenClosed from '../icons/FullScreenClosed'

const Images = ({ data }) => {
  let color = '#000000';

  const onClickPopUp = {
    containerClick: 'flex group/item  w-[40%] scale-[110%] ml-10 mr-10 relative cursor-pointer items-center justify-center overflow-x-hidden',
    containerDefault: "flex group/item w-72 hover:scale-[110%] relative cursor-pointer items-center justify-center overflow-x-hidden",
    imageContainer: 'h-full w-50% flex flex-row gap-4',
    comments: "hidden bg-white w-[30%] ml-4 h-full", 
    commentsClicked: " bg-white w-[50%] ml-4 h-full rounded-xl text-black ", 
    likeSection: 'invisible group-hover/item:visible flex bg-white h-[10%] w-full rounded-xl',
    likeSectionClicked: 'invisible flex bg-white h-[10%] w-full rounded-xl',
    fullScreenButton: 'invisible group-hover/item:visible mt-2 ml-[90%] absolute',
    fullScreenButtonClicked: 'invisible ',
    fullScreenClosed: 'invisible',
    fullScreenClosedClicked: 'visible group-hover/item:visible mt-2 mr-0 relative',
    image: "select-none origin-right h-[100%] w-full rounded-xl object-cover ",
    imageClicked: "select-none origin-right h-[100%] w-[60%] rounded-xl object-cover "
  }
// group-hover/item:visible mt-2 ml-[97%] absolute
  const style = {
    posted: 'mt-2 ml-2 font-bold text-black',
    location: 'mt-4 ml-2',
    button: 'mt-4 ml-1'
  }

  let [isClicked, setIsClicked] = useState(false);

  return (

    <div className={isClicked ? onClickPopUp.containerClick  : onClickPopUp.containerDefault }>
      <div className="h-[50%] w-full flex flex-col gap-4">
        <div className={onClickPopUp.imageContainer}>
          <button className={isClicked ? onClickPopUp.fullScreenButtonClicked : onClickPopUp.fullScreenButton} onClick={() => setIsClicked(!isClicked)}>
            <FullScreen />
          </button>
          <img id='image' className={isClicked ? onClickPopUp.imageClicked : onClickPopUp.image} src={require(`../assets/${data.image}`)} draggable='false' />
          <div className={isClicked ? onClickPopUp.commentsClicked : onClickPopUp.comments}>
            <div className='flex justify-end mr-2'><button onClick={() => setIsClicked(!isClicked)}><FullScreenClosed className={isClicked ? onClickPopUp.fullScreenClosedClicked : onClickPopUp.fullScreenClosed} /></button></div>
            <p className={style.posted}>{data.postedBy}</p>
            <p className={style.location}>{data.imgLocation}</p>
            <button className={style.button}><Heart stroke={color}/></button>
            <button className={style.button}><Comment /></button>
            <div className='flex gap-2'>
            <input type='text' placeholder='Add a comment' className='ml-[5%] p-2 w-[80%] h-[35px] rounded-xl border border-slate-600' />
            <button><Post /></button>
            </div>
          </div>
        </div>
        <div className={isClicked? onClickPopUp.likeSectionClicked : onClickPopUp.likeSection}>
          <div className='flex mt-2 ml-2'>
            <button onClick={color=''}><Heart stroke={color}/></button>
            <button><Comment /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Images