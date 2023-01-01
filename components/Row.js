import React, { useEffect, useState } from 'react'
import axios from '../pages/api/axios'


function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

  return (
    <div className=''>
        <h2 className='ml-3 pl-5 pt-2 w-full font-bold'>{title}</h2>

        <div className='flex overflow-y-hidden overflow-x-scroll p-5 object-contain mr-3 w-full
        transition transform duration-450 '>
        {movies.map(
            (movie) => 
            ((isLargeRow && movie.poster_path) || 
            (!isLargeRow && movie.poster_path)) && (
                <img className={`ml-5 max-h-24 hover:scale-110 duration-300`}
            key={movie.id}
            src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}/>
            
        ))}
        </div>
    </div>
  )
}

export default Row