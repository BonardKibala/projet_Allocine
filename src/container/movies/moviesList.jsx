import React from "react";
import { useEffect, useState,useCallback } from "react";
import { Grid} from "semantic-ui-react";
import LoaderPage from "../Elements/loader";
import MoviesCard from "./movieCard";
import Moviesbar from "./moviesBar";
import FormSearch from "../Elements/formsearch";
import PaginationPage from "../components/pagination";


const MoviesList = () => {
    const [movies, setMovies] = useState([])
    const Featured_Api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`;
    const genrePart1 = 'https://api.themoviedb.org/3/discover/movie?with_genres=';
    const genrePart2 = '&sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page='

    const topApi = `https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`;

    const [activePage, setActivePage] = useState(1);
    const search_Api = `https://api.themoviedb.org/3/search/movie?&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&query=`;
    const [searchValue, setSearchValue] = useState('')
    const [title, setTitle] = useState('Tous les Films')
    const [DiscoverApi, setDiscoverApi] = useState(Featured_Api + activePage);
    const [topUrl, setTopApi] = useState(topApi + activePage)
    const [loading, setLoading] = useState(false)
    const [idValue,setIdValue]=useState('')

    const fetch_api = useCallback((api) => {
        fetch(api).then(response => response.json())
            .then(data => {
                setLoading(false)
                setMovies(data.results);
            })
    },[]);

    useEffect(() => {
        fetch_api(DiscoverApi)
    },[fetch_api,DiscoverApi]);



    const handlechange = useCallback((e) => {
        const value = e.target.value
        setSearchValue(value)
    },[])
    const handlesubmit = useCallback((e) => {
        e.preventDefault()
        if (searchValue) {
            fetch_api(search_Api + searchValue + '&page='+activePage)
            setDiscoverApi(search_Api + searchValue +'&page='+activePage)
        }
        else{
            fetch_api(Featured_Api+activePage)
            setDiscoverApi(Featured_Api+activePage)
            setTitle('Tous les films')
        }
    },[searchValue,fetch_api,search_Api, activePage,Featured_Api])

    const clickMoviesbar = useCallback((e) => {
        const buttonChildren = e.target.id
        setIdValue(buttonChildren)
        switch (buttonChildren) {
            case 'comedy':
                fetch_api(genrePart1 + 35 + genrePart2 + activePage)
                setDiscoverApi(genrePart1 + 35 + genrePart2 + activePage)
                setTitle('Comedies')
                break;
            case 'tous':
                fetch_api(DiscoverApi)
                setDiscoverApi(Featured_Api +activePage)
                setTitle('Tous les films')
                break;
            case 'top':
                fetch_api(topUrl)
                setDiscoverApi(topUrl)
                setTitle('Top films')
                break;
            case 'action':
                fetch_api(genrePart1 + 28 + genrePart2 + activePage)
                setDiscoverApi(genrePart1 + 28 + genrePart2 + activePage)
                setTitle('Actions')
                break;
            case 'romance':
                fetch_api(genrePart1 + 10749 + genrePart2 + activePage)
                setDiscoverApi(genrePart1 + 10749 + genrePart2 + activePage)
                setTitle('Romantiques')
                break;
            case 'aventure':
                fetch_api(genrePart1 + 12 + genrePart2 + activePage)
                setDiscoverApi(genrePart1 + 12 + genrePart2 + activePage)
                setTitle('Aventures')
                break;
            case 'crime':
                fetch_api(genrePart1 + 80 + genrePart2 + activePage)
                setDiscoverApi(genrePart1 + 80 + genrePart2 + activePage)
                setTitle('Crimes')
                break;
            case 'familial':
                fetch_api(genrePart1 + 10751 + genrePart2 + activePage)
                setDiscoverApi(genrePart1 + 10751 + genrePart2 + activePage)
                setTitle('Familial')
                break;
            case 'documentaire':
                fetch_api(genrePart1 + 99 + genrePart2 + activePage)
                setDiscoverApi(genrePart1 + 99 + genrePart2 + activePage)
                setTitle('Documentaires')
                break;

            case 'fiction':
                fetch_api(genrePart1 + 878 + genrePart2 + activePage)
                setDiscoverApi(genrePart1 + 878 + genrePart2 + activePage)
                setTitle('Sciences fictions')
                break;

            default:
                break;
        }
        
    },[DiscoverApi, Featured_Api, activePage, fetch_api, topUrl])


    const pageChange = (e, pageInfo) => {
        e.preventDefault()
        setActivePage(pageInfo.activePage);
        setTopApi(topApi + pageInfo.activePage.toString())
        switch (idValue) {
            case 'comedy':
                setDiscoverApi(genrePart1 + 35 + genrePart2 + pageInfo.activePage.toString())
                break;
            case 'tous':
                setDiscoverApi(Featured_Api +pageInfo.activePage.toString())
                break;
            case 'top':
                setDiscoverApi(topUrl)
                break;
            case 'action':
                setDiscoverApi(genrePart1 + 28 + genrePart2 + pageInfo.activePage.toString())
                break;
            case 'romance':
                setDiscoverApi(genrePart1 + 10749 + genrePart2 + pageInfo.activePage.toString())
                break;
            case 'aventure':
                setDiscoverApi(genrePart1 + 12 + genrePart2 + pageInfo.activePage.toString())
                break;
            case 'crime':
                setDiscoverApi(genrePart1 + 80 + genrePart2 + pageInfo.activePage.toString())
                break;
            case 'familial':
                setDiscoverApi(genrePart1 + 10751 + genrePart2 + pageInfo.activePage.toString())
                break;
            case 'documentaire':
                setDiscoverApi(genrePart1 + 99 + genrePart2 + pageInfo.activePage.toString())
                break;

            case 'fiction':
                setDiscoverApi(genrePart1 + 878 + genrePart2 + pageInfo.activePage.toString())
                break;

            default:
                setDiscoverApi(Featured_Api +pageInfo.activePage.toString())
                break;
        }
        if (searchValue) {
            setDiscoverApi(search_Api + searchValue+'&page='+pageInfo.activePage.toString())
        }
    };

    return (
        <div >
            <Grid className='movieListContainer'>
                <Grid.Column computer={16} mobile={16} tablet={16} className='form-search'>
                    <FormSearch onChange={(e) => handlechange(e)} onSubmit={(e) => handlesubmit(e)} value={searchValue} />
                </Grid.Column>
                <Grid.Column computer={16} mobile={16} tablet={16} className='moviesBar'>
                    <Moviesbar onClick={(e) => clickMoviesbar(e)} />
                    <div className='movieTitle'><h1>{searchValue ? `R??sultat pour ${searchValue}` : title}</h1><div className='redBorder'></div></div><br></br><br></br>

                </Grid.Column>
            </Grid>
            {
                loading ? <LoaderPage /> :
                    <div>
                        <Grid container >

                            {
                                movies.length > 0 && movies.map(movie => <Grid.Column mobile={16} tablet={5} computer={3} className="cardColumn"><MoviesCard key={movie.id} {...movie} /></Grid.Column>)
                            }
                            <br></br>
                        </Grid>
                        <PaginationPage activePage={activePage} pageChange={pageChange}/>
                    </div>

            }
        </div>
    )
}
export default MoviesList;