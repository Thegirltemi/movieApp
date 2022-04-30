import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    if(value === 0)navigate('/')
    if(value === 1)navigate('/movies')
    if(value === 2)navigate('/series')
    if(value === 3)navigate('/search')
  },[value,navigate])
    

  return (
    <Box style={{ width: "100%", position: "fixed", bottom: 0, zIndex: 100 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
       <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
       <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
