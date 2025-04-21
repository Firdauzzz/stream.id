import React from "react";
import TweetCard from "./TweetCard";

const exampleTweets = [
  {
    name: "User Name",
    username: "username",
    text: "This is an example tweet content.",
    image: "https://via.placeholder.com/150x80?text=Tweet+Image",
    likes: 919,
    retweets: 3700,
    comments: 13000,
  },
  {
    name: "User Name",
    username: "username",
    text: "This is an example tweet content.",
    image: "https://via.placeholder.com/150x80?text=Tweet+Image",
    likes: 919,
    retweets: 3700,
    comments: 13000,
  },
  {
    name: "User Name",
    username: "username",
    text: "This is an example tweet content.",
    image: "https://via.placeholder.com/150x80?text=Tweet+Image",
    likes: 919,
    retweets: 3700,
    comments: 13000,
  },
];

const Feed: React.FC = () => (
  <main>
    {exampleTweets.map((tweet, idx) => (
      <TweetCard key={idx} {...tweet} />
    ))}
  </main>
);

export default Feed;
