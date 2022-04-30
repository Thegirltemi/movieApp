import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import Genres from '../../components/Genres';
import SingleContent from '../../components/SingleContent/SingleContent';
import useGenre from '../../hooks/useGenre';

const Series = () => {

  const [content, setContent] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres)

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=0da96188f2a5a645e7beed07147dd6f0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreforURL}`
    );

    setContent(data.results);
  };
  useEffect(() => {
    fetchMovies();
  }, [genreforURL]);


  return (
    <div>
        <span className='pageTitle'>Tv Series</span>
        <Genres
        type="tv"
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setSelectedGenres={setSelectedGenres}
      />
        <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </div>
    </div>
  )
}

export default Series