const APIKEY ="0da96188f2a5a645e7beed07147dd6f0"



const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}
    &language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US `,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`

};

export default requests;