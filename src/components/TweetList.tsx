"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import TweetCard from './TweetCard';

// Komponen TweetList bertugas mengambil data tweet dari Supabase dan menampilkannya
const TweetList = () => {
  // State untuk menyimpan data tweet yang sudah di-fetch dari Supabase
  const [tweets, setTweets] = useState<any[]>([]);

  // useEffect akan dijalankan sekali setelah komponen dimount (pertama kali ditampilkan)
  useEffect(() => {
    // Log untuk memastikan komponen dirender di client
    console.log("TweetList rendered");
    // Fungsi async untuk mengambil data tweet dari Supabase
    const fetchTweets = async () => {
      // Query ke tabel 'tweets' dan ambil juga data user dari tabel 'profiles'
      const { data, error } = await supabase
        .from('tweets')
        .select(`
          id, content, image_url, user_id,
          profiles (username, display_name, avatar_url)
        `)
        .order('created_at', { ascending: false });
      // Jika ada error, tampilkan di console
      if (error) {
        console.error(error);
      } else {
        // Log hasil data yang didapat dari Supabase
        console.log('DATA FROM SUPABASE:', data);
        // Set hasil data ke state tweets (pastikan data berupa array)
        setTweets(Array.isArray(data) ? data : []);
      }
    };
    // Jalankan fungsi fetchTweets
    fetchTweets();
  }, []);

  // Render daftar TweetCard berdasarkan data tweets
  return (
    <div>
      {/* Loop setiap tweet dan tampilkan TweetCard untuk masing-masing */}
      {tweets.map((tweet: any) => (
        <TweetCard
          key={tweet.id}
          avatar={tweet.profiles?.avatar_url}
          name={tweet.profiles?.display_name || ''}
          username={tweet.profiles?.username || ''}
          text={tweet.content}
          image={tweet.image_url}
          likes={0}
          retweets={0}
          comments={0}
        />
      ))}
    </div>
  );
};

export default TweetList;
