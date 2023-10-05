import axios from 'axios';
import { ALLMOVIES, MovieAPI } from '../types/moviesType';



export const getAllMovie = () => {

    return async (dispatch) => {
        const result = await axios.get(MovieAPI);
        dispatch({ type: ALLMOVIES, data: result.data.results, pages: result.data.total_pages })

    }
}

export const getMovieSearch = (word) => {

    return async (dispatch) => {
        const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=aa73694666c2cb9f08c1d4590e480b76&query=${word}&language=ar`);
        dispatch({ type: ALLMOVIES, data: result.data.results, pages: result.data.total_pages })

    }
}

export const getPage = (page) => {

    return async (dispatch) => {
        const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=aa73694666c2cb9f08c1d4590e480b76&language=ar&page=${page}`);
        dispatch({ type: ALLMOVIES, data: result.data.results, pages: result.data.total_pages })

    }
}