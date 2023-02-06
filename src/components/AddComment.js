import React, { useState } from "react";
import Post from '../icons/Post'


export const AddComment = ({ onSubmit }) => {
    const textInput = React.useRef();
    const [comment, setComment] = useState("");
    const resetInput = () => (textInput.current.value = "")
  
  return (
    <div className="w-full max-w-xs">
      <form
        className=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit({ content: comment });
        }}
      >
        <div className="flex justify-between">
          <input
            type='text'
            name="comment"
            id="comment"
            className='p-2 mb-2 w-[80%] h-[35px] rounded-xl border border-slate-600'
            rows={2}
            placeholder="Add a comment"
            ref={textInput}
            onChange={e => setComment(e.target.value)}
          />

          <button type="submit" onClick={resetInput} ><Post onClick={resetInput}/></button>
        </div>
      </form>
    </div>
  );
};
