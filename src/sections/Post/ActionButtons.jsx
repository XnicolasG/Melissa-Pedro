import React, { useState } from 'react'
import Like from '../../components/icons/Like'
import Comment from '../../components/icons/Comment'
import Send from '../../components/icons/Send'

export const ActionButtons = () => {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };
  return (
    <div className="flex gap-x-2 items-center">
      <Like
        stroke={like ? '#ef4444' : "white"}
        fill={like ? '#ef4444' : 'transparent'}
        id="like"
        className={`size-6 ${like ? 'like' : ''}`}
        onClick={toggleLike} />
      <Comment
        stroke="white" className="size-6 transform scale-x-[-1]" />
      <a
        target="blank_"
        href="https://api.whatsapp.com/send?text=Save%20The%20Date%2007/12/24:%20https://melissa-pedro.vercel.app/">
        <Send
          stroke="white" className="size-6" />
      </a>
    </div>
  )
}
