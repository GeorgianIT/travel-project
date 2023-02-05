import React from 'react'
import Heart from '../icons/Heart'
import Comment from '../icons/Comment'
import { useState, useEffect } from 'react'

const Images = ({ data }) => {
  let color = '#000000';

  const onClickPopUp = {
    containerClick: 'flex group/item w-[40%] scale-[110%] ml-10 mr-10 relative cursor-pointer items-center justify-center',
    containerDefault: "flex group/item w-72 hover:scale-[110%] relative cursor-pointer items-center justify-center",
    imageContainer: 'h-full w-full flex flex-row gap-4',
    comments: "hidden bg-white w-[30%] ml-4 h-full", 
    commentsClicked: " bg-white w-[500px] ml-4 h-full rounded-xl text-black", 
    likeSection: 'invisible group-hover/item:visible flex bg-white h-[10%] w-full rounded-xl',
    likeSectionClicked : 'invisible flex bg-white h-[10%] w-full rounded-xl',
  }

  const style = {
    posted: 'mt-2 ml-2 font-bold text-black',
    location: 'mt-4 ml-2',
    button: 'mt-4 ml-1'
  }

  let [isClicked, setIsClicked] = useState(false);

  return (

    <div className={isClicked ? onClickPopUp.containerClick  : onClickPopUp.containerDefault } onClick={() =>setIsClicked(!isClicked)}>
      <div className="h-[50%] w-full flex flex-col gap-4">
        <div className={onClickPopUp.imageContainer}>
          <img id='image' className="select-none origin-right h-[100%] w-full rounded-xl object-cover " src={require(`../assets/${data.image}`)} draggable='false' />
          <div className={isClicked ? onClickPopUp.commentsClicked : onClickPopUp.comments}>
            <p className={style.posted}>{data.postedBy}</p>
            <p className={style.location}>{data.imgLocation}</p>
            <button className={style.button}><Heart stroke={color}/></button>
            <button className={style.button}><Comment /></button>
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