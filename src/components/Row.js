import React, { useEffect, useState } from 'react'
import { getMovies } from '../api'
import './Row.css'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'

const imageHost = "https://image.tmdb.org/t/p/original/"
function Row({ title, path }) {

    
    const [ trailerUrl, setTrailerUrl ] = useState('')
    const handleClick = (movie) => {

        if(trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie.title || movie.name || movie.original_name || '')
            .then((url) => {
                setTrailerUrl(url)
            })
            .catch((error) => {
                console.log('HandleClick error: ', error)
            })
        }
    }

    const [ movies, setMovies ] = useState([])
    const fetchMovies = async (_path) => {
        try {
            const data = await getMovies(_path)
            console.log('Data', data)
            setMovies(data?.results)
        } catch (error) {
            console.log('fetchMovies error: ', error)
        }
    }

    useEffect(() => {
        fetchMovies(path)
    }, [path])
    
    return (
        <div className='row-container'>
            <h2 className='row-header'>{title}</h2>
            <div className='row-cards' id={title}>
                {movies?.map(movie =>
                    <img onClick={() => handleClick(movie)} key={movie.id} src={`${imageHost}${movie.poster_path}`} alt={movie.name} /> 
                )}
            </div>
            {trailerUrl? <ReactPlayer url={trailerUrl} playing={true} />
            : null}
        </div>
    )
}

export default Row