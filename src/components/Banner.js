import { useEffect, useState } from 'react'
import './Banner.css'
import categories, { getMovies } from '../api'

function Banner({ }) {

    const [ movie, setMovie ] = useState({})
    
    const fetchRandonMovie = async (_path) => {
        try{
            const netflixOriginalsCategory = categories.find(category => category?.name === 'netflixOriginals')
            const data = await getMovies(netflixOriginalsCategory.path)
            
            const movies = data?.results
            const randomIndex = Math.floor(Math.random() * movies.length)
            setMovie(movies[randomIndex])
        } catch (error) {
            console.log('fetchRandonMovie error: ', error)
        }
    }

    useEffect(() => {
        fetchRandonMovie()
    }, [])

    return (
        <header 
            className='banner-container' 
            style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            }}>

            <div className='banner-content'>
                <h1 className='banner-title'>{
                    movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner-button-container'>
                    <button className='banner-button'>Assistir</button>
                    <button className='banner-button'>Minha Lista</button>
                </div>

                <div className='banner-description'>
                    <h3>{movie?.overview}</h3>
                </div>
            </div>
        </header>
    )
}

export default Banner