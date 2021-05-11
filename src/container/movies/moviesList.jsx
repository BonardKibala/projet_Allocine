import React from "react";
import { useEffect, useState } from "react";
import { Grid, Pagination } from "semantic-ui-react";
import MenuSite from "../menu";
import LoaderPage from "./loader";
import MoviesCard from "./movieCard";
import Moviesbar from "./moviesBar";
import FormSearch from "../Elements/formsearch";


const MoviesList = () => {
    const [movies, setMovies] = useState([])
    const [genreId, setGenreId] = useState('')
    const Featured_Api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`;
    const comedyApi = `https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`
    const actionApi = `https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`
    const romanceApi = `https://api.themoviedb.org/3/discover/movie?with_genres=10749&sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`
    const aventureApi = `https://api.themoviedb.org/3/discover/movie?with_genres=12&sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`
    const crimeApi = `https://api.themoviedb.org/3/discover/movie?with_genres=80&sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`
    const topApi=`https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`;
    const familialApi = `https://api.themoviedb.org/3/discover/movie?with_genres=10751&sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`
    const DocumentApi = `https://api.themoviedb.org/3/discover/movie?with_genres=99&sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`
    const fictionUrlSciences =`https://api.themoviedb.org/3/discover/movie?with_genres=99&sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`

    
    const [activePage, setActivePage] = useState(1);
    const search_Api = `https://api.themoviedb.org/3/search/movie?&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&page=${activePage}&query=`;
    const [searchValue, setSearchValue] = useState('')
    const [searchQuery, setSearchQuery] = useState(search_Api + searchValue)
    const [title, setTitle] = useState('Tous les Films')
    const [DiscoverApi, setDiscoverApi] = useState(Featured_Api + activePage);
    const [comedyUrl, setcomedyUrl] = useState(comedyApi + activePage);
    const [actionUrl, setActionUrl] = useState(actionApi + activePage);
    const [romanceUrl, setRomanceUrl] = useState(romanceApi + activePage)
    const [aventureUrl, setAventureUrl] = useState(aventureApi + activePage)
    const [crimeUrl, setCrimeurl] = useState(crimeApi + activePage)
    const [topUrl,setTopApi]=useState(topApi+activePage)
    const [familialUrl,setfamilialUrl]=useState(familialApi+activePage)
    const [documentUrl,setDocumentUrl]=useState(DocumentApi+activePage)
    const [fictionUrl,setfictionUrl]=useState(fictionUrlSciences+activePage)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch_api(DiscoverApi)
    }, [DiscoverApi]);


    const fetch_api = (api) => {
        fetch(api).then(response => response.json())
            .then(data => {
                setLoading(false)
                setMovies(data.results);
            });
    }
    const handlechange = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if (searchValue) {
            fetch_api(search_Api + searchValue)
        }
        else
        {
            fetch_api(DiscoverApi)
            setTitle('Tous les films')
        }
       
    }

    const clickMoviesbar = (e) => {
        const buttonChildren = e.target.id
        switch (buttonChildren) {
            case 'comedy':
                fetch_api(comedyUrl)
                setTitle('Comedies')
                break;
            case 'tous':
                fetch_api(DiscoverApi)
                setTitle('Tous les films')
                break;
                case 'top':
                fetch_api(topUrl)
                setTitle('Top films')
                break;
            case 'action':
                fetch_api(actionUrl)
                setTitle('Actions')
                break;
            case 'romance':
                fetch_api(romanceUrl)
                setTitle('Romantiques')
                break;
            case 'aventure':
                fetch_api(aventureUrl)
                setTitle('Aventures')
                break;
            case 'crime':
                fetch_api(crimeUrl)
                setTitle('Crimes')
                break;
                case 'familial':
                fetch_api(familialUrl)
                setTitle('Familial')
                break;
                case 'documentaire':
                fetch_api(documentUrl)
                setTitle('Documentaires')
                break;

                case 'fiction':
                fetch_api(fictionUrl)
                setTitle('Sciences fictions')
                break;

            default:
                break;
        }
console.log(buttonChildren);
    }


const pageChange = (e, pageInfo) => {
    e.preventDefault()
    setActivePage(pageInfo.activePage);
    setDiscoverApi(Featured_Api + pageInfo.activePage.toString());
    setcomedyUrl(comedyApi + pageInfo.activePage.toString())
    setActionUrl(actionApi + pageInfo.activePage.toString())
    setRomanceUrl(romanceApi + pageInfo.activePage.toString())
    setAventureUrl(aventureApi + pageInfo.activePage.toString())
    setTopApi(topApi+pageInfo.activePage.toString())
    setCrimeurl(crimeApi+pageInfo.activePage.toString())
    setfamilialUrl(familialApi+pageInfo.activePage.toString())
    setDocumentUrl(DocumentApi+pageInfo.activePage.toString())
    setfictionUrl(fictionUrlSciences+pageInfo.activePage.toString())
};

return (
    <div >
        <Grid className='movieListContainer'>
        <Grid.Column computer={16} mobile={16} tablet={16} className='form-search'>
                <FormSearch  onChange={(e) => handlechange(e)} onSubmit={(e) => handlesubmit(e)} value={searchValue}/>
            </Grid.Column>
            <Grid.Column computer={16} mobile={16} tablet={16} className='moviesBar'>
                <Moviesbar onClick={(e) => clickMoviesbar(e)} />
                <div className='movieTitle'><h1>{searchValue?`Résultat de la recherche`:title}</h1><div className='redBorder'></div></div><br></br><br></br>
       
            </Grid.Column>
             </Grid>
        {
            loading ? <div><LoaderPage /></div> :
                <Grid container >

                    {
                        movies.length > 0 && movies.map(movie => <Grid.Column mobile={16} tablet={8} computer={4} className="cardColumn"><MoviesCard key={movie.id} {...movie} /></Grid.Column>)
                    }
                    <br></br>
                    <Pagination
                        activePage={activePage}
                        onPageChange={pageChange}
                        totalPages={100}
                        ellipsisItem={null}
                        secondary
                        inverted
                    /><br></br><br></br>
                </Grid>

        }
    </div>
)
}
export default MoviesList;