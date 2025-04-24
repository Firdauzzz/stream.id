import React from "react";

// Definisi tipe props yang diterima TweetCard
export interface TweetCardProps {
  avatar?: string;      // URL foto profil user
  name: string;         // Nama user
  username: string;     // Username user
  text: string;         // Isi tweet
  image?: string;       // (Opsional) URL gambar pada tweet
  likes: number;        // Jumlah likes
  retweets: number;     // Jumlah retweets
  comments: number;     // Jumlah komentar
}

// Komponen TweetCard menerima props di atas dan menampilkan satu tweet
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
  // Card utama untuk satu tweet
  <div className="border-b p-4 bg-white">
    {/* Bagian header: foto profil, nama, dan username */}
    <div className="flex items-center gap-2 mb-1">
      {/* Foto profil user, fallback ke /streem.png jika kosong */}
      <img src={avatar || '/streem.png'} alt="User" className="w-8 h-8 rounded-full object-cover border" />
      <span className="font-bold text-gray-900 text-base">{name}</span>
      {/* Username user */}
      <span className="text-gray-500 text-sm">@{username}</span>
    </div>
    {/* Isi tweet */}
    <div className="mb-2 text-gray-800 text-[15px] leading-snug font-normal">{text}</div>
    {/* Gambar tweet jika ada */}
    {image && <img src={image} alt="Tweet Image" className="w-48 border rounded mb-2" />}
    {/* Statistik: likes, retweets, comments */}
    <div className="flex gap-8 text-sm text-gray-700 font-semibold">
      <span>{likes.toLocaleString()} Likes</span>
      <span>{retweets.toLocaleString()} Retweets</span>
      <span>{comments.toLocaleString()} Comments</span>
    </div>
  </div>
);

export default TweetCard;
