import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@mui/material";
import { AuthContextProvider } from "./context/AuthContext";
import Signin from "./Pages/SignIn/SignIn";
/* import Protected from "./components/Protected"; */

function App() {
  return (
    <>
      <AuthContextProvider>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Signin/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
      </AuthContextProvider>
    </>
  );
}

export default App;
