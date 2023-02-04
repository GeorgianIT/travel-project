import React from 'react'

const Images = ({ data }) => {
  return (

    <div className="flex group relative cursor-pointer items-center justify-center">
      <div className="h-[50%] w-72">
        <img id='image' className="select-none origin-right h-[100%] w-full rounded-xl object-cover " src={require(`../assets/${data.image}`)} draggable='false' />
      </div>
    </div>
  )
}

export default Images