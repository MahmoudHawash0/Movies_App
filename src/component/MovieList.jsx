import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { CardMovies } from './CardMovies'
import { PaginationCompontent } from './PaginationCompontent'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovie } from "../redux/actions/movieAction";


export const MovieList = ({ getPage, pageCount }) => {

    const [movies, setMovies] = useState([]);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllMovie())
    }, [])

    const dataMovies = useSelector((state) => state.movies)

    useEffect(() => {
        setMovies(dataMovies)
    },[dataMovies])

    return (
        <Row className='mt-3'>
            {
                movies.length >= 1 ? (
                    movies.map((mov) => {
                        return (<CardMovies key={mov.id} mov={mov} />)
                    })
                ) : <h2 className='text-center p-5'>لا يوجد افلام</h2>
            }

            {movies.length >= 1 ? (<PaginationCompontent getPage={getPage} pageCount={pageCount} />) : null}
        </Row>
    )
}
