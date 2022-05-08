import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3"
const API_KEY = "8b9c2b35d1bc0d9e8879c4faa9dd8b75";

export default async function getTopMoviesOnWeek () {

    try {
        const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}&page=1`);
        return response.data;
    } catch (error) {
        console.error('Упс, ошибочка вышла');
    }
}

// export default class Api  {
//     constructor () {
       
//         this.indexOfPage = 1;
//     }
    
//     setIndexOfPage (newValue) {
//         this.indexOfPage = newValue;
//         console.log(this.indexOfPage);
//     }
//     async searchAPIName (name) {
//         this.setIndexOfPage(1);
        
//         try {
//             const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}&page=${this.indexOfPage}`);
            
//             return response.data;
//           } catch (error) {
//             console.error('Упс, ошибочка вышла');
//         }
        
//     }
//     async searchAPINameOnNextPage (name) {
//         this.setIndexOfPage(this.indexOfPage + 1);
        
//         try {
//             const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}&page=${this.indexOfPage}`);
            
//             return response.data;
//           } catch (error) {
//             console.error('Упс, ошибочка вышла');
//         }
        
//     }

    
//     async searchAPITopOnNextPage () {
//         this.setIndexOfPage(this.indexOfPage + 1);
//         try {
//             const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${this.indexOfPage}`);
//             return response.data;
//         } catch (error) {
//             console.error('Упс, ошибочка вышла');
//         }
//     }
   
//     async searchAPIbyID (movieID) {
//         try {
//             const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`);
//             return response.data;
//         } catch (error) {
//             console.error('Упс, ошибочка вышла');
//         }

//     }


//     async searchAPIVideos (movieID) {
//         try {
//             const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`);
            
//             return response.data.results;
//         } catch (error) {
//             console.log('Упс, ошибочка вышла');
//             console.error(error);
//         }
//     }
    
// };