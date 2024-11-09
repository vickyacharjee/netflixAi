import React from 'react';
import MovieCards from './MovieCards';

const MovieList = ({ title, movies }) => {
  
  return (
    <div className='p-2 px-3 '>
      <style>
        {`
          /* Custom scrollbar styling for horizontal overflow */
          .movie-scroll::-webkit-scrollbar {
            height: 8px;
          }
          .movie-scroll::-webkit-scrollbar-thumb {
            background-color: #000; /* Black scrollbar thumb */
            border-radius: 10px;
          }
          .movie-scroll::-webkit-scrollbar-track {
            background-color: #333; /* Dark background for scrollbar track */
          }
        `}
      </style>
      
      <h1 className='text-3xl font-bold p-2 text-white'>{title.substring(0,1).toUpperCase()+title.substring(1)}</h1>
      <div className='flex overflow-x-scroll movie-scroll'>
        <div className='flex'>
          {
            Array.isArray(movies) && movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCards key={movie.id} posterPath={movie?.poster_path} />
              ))
            ) : (
              <p className="text-white">No movies available</p>  
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MovieList;
