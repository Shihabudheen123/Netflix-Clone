import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { imageUrl, API_KEY, baseUrl } from '../../constants/constants';

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch trending movies for the week
    axios.get(`${baseUrl}/trending/movie/week?api_key=${API_KEY}`)
      .then(response => {
        const movies = response.data.results;
        // Pick a random movie from the list
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      })
      .catch(err => {
        console.error('Error fetching banner movie:', err);
      });
  }, []);

  return (
    <div className='banner bg-cover h-[590px] text-white'
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}>
      <div className='content pt-[140px] h-48 pl-[15px]'>
        <h1 className='title text-5xl font-bold pb-[0.3rem]'>{movie ? movie.title : 'Loading...'}</h1>
        <div className='banner-buttons flex space-x-4'>
          <button className='flex items-center justify-center text-white font-semibold py-3 px-8 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded'>
            Play Now
          </button>
          <button className='flex items-center justify-center text-white font-semibold py-3 px-8 bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] focus:outline-none border-none rounded'>
            My List
          </button>
        </div>
        <p className='w-[45rem] leading-[1.3] pt-4 h-20 max-w-[1000px] text-[1rem]'>
          {movie ? movie.overview : 'Loading...'}
        </p>
      </div>
      <div className="fade-bottom h-[25rem]
        bg-gradient-to-b from-transparent via-[rgba(37,37,37,0.61)] to-[#111]"></div>
    </div>
  );
}

export default Banner;
