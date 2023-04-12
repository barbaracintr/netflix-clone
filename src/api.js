const API_KEY = 'd40fcd1e6d520204e8c0143ec7376f92'

const categories = [
    {
        name: 'trending',
        title: 'Em alta',
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name: 'netflixOriginals',
        title: 'Originais Netflix',
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name: 'topRated',
        title: 'Populares',
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name: 'comedy',
        title: 'Comédias',
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    },
    {
        name: 'documentaries',
        title: 'Documentários',
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    }
]

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`
        const response = await fetch(url)
        return await response.json()
    
    } catch (error) {
        console.log('error getMovies: ', error)
    }
}

export default categories