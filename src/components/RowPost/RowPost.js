import React, { useEffect, useState, useRef } from 'react';
import { imageUrl, API_KEY, baseUrl } from '../../constants/constants';
import axios from 'axios';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Shimmer from '../Shimmer';

const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  const rowRef = useRef(null);

  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovies(response.data.results);
    }).catch(err => {
      // Handle error
    });
  }, [props.url]);

  const handleMovie = (id) => {
    axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
      } else {
        console.log('Array empty');
      }
    });
  };

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -500 : 500;
      rowRef.current.scrollLeft += scrollAmount;
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  };

  return (
    <div className='relative row ml-5 text-[#fff]'>
      <h2>{props.title}</h2>
      <div className='flex items-center'>
        <button
          onClick={() => scroll('left')}
          className='absolute left-0 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800'>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div
          ref={rowRef}
          className='posters flex p-5 overflow-x-scroll overflow-y-hidden space-x-4'>
          { movies.length === 0 ? (
            <Shimmer/>
          ):
          
          (movies.map((obj, index) => (
            <img
              onClick={() => handleMovie(obj.id)}
              className={`${props.isSmall ? 'smallPoster' : 'poster'} max-h-[250px] cursor-pointer transform transition-transform duration-300 hover:scale-110`}
              key={index}
              alt='poster'
              src={`${imageUrl + obj.backdrop_path}`}
            />)
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className='absolute right-0 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800'>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
