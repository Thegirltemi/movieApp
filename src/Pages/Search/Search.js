import { ThemeProvider } from '@emotion/react';
import {  Button, createMuiTheme, Tab, Tabs, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';

const Search = () => {

  const [type, setType] = useState(0)
  const [searchText, setSearchText]=useState("")
  const [content, setContent] =useState()
  

  const darkTheme = createMuiTheme({
    palette : {
      type:"dark",
      primary:{
        main: "#fff",
      },
    },
  });

  const  fetchSearch = async () =>{
    
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=0da96188f2a5a645e7beed07147dd6f0&language=en-US&query=${searchText}&page&include_adult=false`
      );
      setContent(data.results);
    
    
    
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type]);

  

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{display:"flex",margin:"15px 0"}}>
      <TextField
         style={{flex: 1}}
         className="searchBox"
         label="Search"
          variant="filled" 
          onChange={(e)=> setSearchText(e.target.value)} 
        />
        <Button variant='contained' style={{marginLeft:10}} onClick={fetchSearch}> 
          <SearchIcon/>
          </Button>
        </div>
       
       <Tabs value={type} indicatorColor='primary' textColor='primary'
         onChange={(event,newValue)=>{
           setType(newValue)
           
         }}

         
       >

         <Tab style={{width: "50%"}} label="Search Movies"/>
         <Tab style={{width: "50%"}} label="Search TV Series"/>
       </Tabs>

      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type?"tv":"movie"}
              vote_average={c.vote_average}
            />
          ))}
          {searchText &&
          !content &&
          (type? <h2>No Series Found</h2>:<h2>No Movies Found</h2>)}

      </div>
    </div>
  )
}

export default Search