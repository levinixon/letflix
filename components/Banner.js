import axios from '../pages/api/axios';
import React, { useEffect, useState } from 'react'
import requests from '../pages/api/Requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n -1) + '...' : string;
    }

  return (
    <div className='w-full h-1 object-contain relative'
        style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
        <div className='text-white ml-8 pt-36 h-48'>
            <h1 className='text-5xl font-extrabold pb-2'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div>
                <button className='cursor-pointer border rounded-sm outline-none border-none 
                font-bold pl-8 pr-8 pt-2 pb-2 mr-8 bg-gray-700 hover:text-black
                transition ease-in-out hover:bg-white duration-300'>
                    Play
                </button>
                <button className='cursor-pointer border rounded-sm outline-none border-none 
                font-bold pl-8 pr-8 pt-2 pb-2 ml-8 bg-gray-700 hover:text-black
                transition ease-in-out hover:bg-white duration-300'>
                    My List
                </button>
                <h1 className='w-full leading-6 pt-4 max-w-sm h-20 text-md'> {truncate(movie?.overview, 150)}</h1>
            </div>
        </div>
    </div>
  )
}

export default Banner