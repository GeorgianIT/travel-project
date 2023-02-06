import React from 'react'
import Heart from '../icons/Heart'
import Post from '../icons/Post'
import Comment from '../icons/Comment'
import { useState, useEffect } from 'react'
import FullScreen from '../icons/FullScreen'
import FullScreenClosed from '../icons/FullScreenClosed'
import { useComments } from "@commont/react";
import { AddComment } from "./AddComment";

export const formatStatus = (status) => {
  switch (status) {
    case "failed":
      return "request failed";
    case "added":
      return "👌";
    case "delivered-awaiting-approval":
      return "🕑";
    case "sending":
      return "✉️";
    default:
      return "";
  }
};
  

const Images = ({ data, postId }) => {
  let color = '#000000';
  
  const { comments, addComment, count, loading } = useComments({
    projectId: 'Tudor Project',
    topic: postId
  });

  const onClickPopUp = {
    containerClick: 'flex group/item  min-w-[900px] w-[900px] scale-[110%] mr-10 relative hover:cursor-pointer items-center justify-center ',
    containerDefault: "flex group/item min-w-[300px] w-[300px] hover:scale-[110%] relative hover:cursor-pointer items-center justify-center ",
    imageContainer: 'h-full w-50% flex flex-row gap-4',
    comments: "hidden bg-white w-[30%] ml-4 h-full", 
    commentsClicked: " bg-white w-[50%] ml-4 h-full rounded-xl text-black ", 
    likeSection: 'invisible group-hover/item:visible flex bg-white h-[10%] w-full rounded-xl',
    likeSectionClicked: 'invisible flex bg-white h-[10%] w-full rounded-xl',
    fullScreenButton: 'invisible group-hover/item:visible mt-2 ml-[90%] absolute',
    fullScreenButtonClicked: 'invisible ',
    fullScreenClosed: 'invisible',
    fullScreenClosedClicked: 'visible group-hover/item:visible mt-2 mr-0 relative',
    image: "select-none origin-right h-[100%] w-[100%] rounded-xl object-cover ",
    imageClicked: "select-none origin-right h-[100%] w-[60%] rounded-xl object-cover ",
    lostFocus: "h-[60%] w-full flex flex-col gap-4",
    focus: "h-[60%] w-full flex flex-col gap-4"
  }
// group-hover/item:visible mt-2 ml-[97%] absolute
  const style = {
    posted: 'mt-2 ml-2 font-bold text-black',
    location: 'mt-4 ml-2',
    button: 'mt-4 ml-1'
  }
  let [isClicked, setIsClicked] = useState(false);

  return (

    <div  className={isClicked ? onClickPopUp.containerClick : onClickPopUp.containerDefault}>
      <div className={onClickPopUp.lostFocus}>
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
        <div className="w-full max-w-md p-4">
      <AddComment onSubmit={addComment} />
      <h3 className="font-bold text-xm">
        {count === 1 ? "1 comment" : `${count} comments`}
      </h3>
      {loading ? (
        "Loading..."
      ) : (
        <div className='h-auto overflow-hidden'>
          {comments.map(({ content, createdAt, status }) => (
            <article key={`${createdAt}${content}`} className="max-w-sm bg-white rounded overflow-hidden shadow-lg px-6 py-4">
              <div className="text-xm mb-2">Anonim {new Date(createdAt).toLocaleDateString()}{status && `・ ${formatStatus(status)}`}
              </div>
              <p className="text-gray-700 text-base">{content}</p>
            </article>
          ))}
        </div>
      )}
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