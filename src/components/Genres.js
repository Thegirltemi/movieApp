import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=0da96188f2a5a645e7beed07147dd6f0&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres()

    return ()=>{
      setGenres({})
    }
  },[])

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres && 
        selectedGenres.map((genre) => (

        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
           color="primary"
          clickable
           onDelete={()=>handleRemove(genre)}
        />
      ))}
      {genres &&
       genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          onClick={()=>handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;