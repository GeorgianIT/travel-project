import React from 'react'

const Images = ({ data }) => {
  return (

    <div className="flex group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:rounded-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full rounded-xl object-cover transition-transform duration-500  group-hover:scale-125" src={require(`../assets/${data.image}`)} />
      </div>
    </div>
  )
}

export default Images