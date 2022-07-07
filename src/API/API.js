import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3"
const API_KEY = "8b9c2b35d1bc0d9e8879c4faa9dd8b75";

export async function getTopMoviesOnWeek () {
    try {
        const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}&page=1`);
        return response.data;
    } catch (error) {
        console.error('Упс, ошибочка вышла');
    }
};
export async function getMoviesByQueryName (name) {
    try {
        const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${name}&page=1`);
        
        return response.data;
      } catch (error) {
        console.error('Упс, ошибочка вышла');
    }
    
}

export async function searchAPIbyID (movieID) {
    try {
        const response = await axios.get(`/movie/${movieID}?api_key=${API_KEY}&language=en-US`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Упс, ошибочка вышла');
    }

}
export async function searchAPIVideos (movieID) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`);
        
        return response.data.results;
    } catch (error) {
        console.log('Упс, ошибочка вышла');
        console.error(error);
    }
}

