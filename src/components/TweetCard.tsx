import React from "react";

export interface TweetCardProps {
  avatar?: string;
  name: string;
  username: string;
  text: string;
  image?: string;
  likes: number;
  retweets: number;
  comments: number;
}

const TweetCard: React.FC<TweetCardProps> = ({
  avatar,
  name,
  username,
  text,
  image,
  likes,
  retweets,
  comments,
}) => (
  <div className="border-b p-4 bg-white">
    <div className="flex items-center gap-2 mb-1">
      <img src={avatar || '/user.svg'} alt="User" className="w-8 h-8 rounded-full object-cover border" />
      <span className="font-bold text-gray-900 text-base">{name}</span>
      <span className="text-gray-500 text-sm">@{username}</span>
    </div>
    <div className="mb-2 text-gray-800 text-[15px] leading-snug font-normal">{text}</div>
    {image && <img src={image} alt="Tweet Image" className="w-48 border rounded mb-2" />}
    <div className="flex gap-8 text-sm text-gray-700 font-semibold">
      <span>{likes.toLocaleString()} Likes</span>
      <span>{retweets.toLocaleString()} Retweets</span>
      <span>{comments.toLocaleString()} Comments</span>
    </div>
  </div>
);

export default TweetCard;
