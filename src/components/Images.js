import React from 'react'
import Heart from '../icons/Heart'
import Comment from '../icons/Comment'
const Images = ({ data }) => {
  return (

    <div className="flex group/item hover:scale-[110%] relative cursor-pointer items-center justify-center">
      <div className="h-[50%] w-72 flex flex-col gap-4">
        <img id='image' className="select-none origin-right h-[100%] w-full rounded-xl object-cover " src={require(`../assets/${data.image}`)} draggable='false' />
        <div className='invisible group-hover/item:visible flex bg-white h-[10%] w-full rounded-xl'> <Heart/> <Comment/></div>
      </div>
    </div>
  )
}

export default Images