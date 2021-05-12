import React from "react";
import { useEffect, useState } from "react";
import { Grid, Pagination } from "semantic-ui-react";
import LoaderPage from "../movies/loader";
import FormSearch from "../Elements/formsearch";
import TvCard from "./TvCards";
import TvBar from "./tvBar";


const SeriesList = () => {
    const [actors, setActors] = useState([])
    const genrePart1 = 'https://api.themoviedb.org/3/tv/popular?with_genres=';
    const genrePart2 = '&sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page='
    const airing_today_Api='https://api.themoviedb.org/3/tv/airing_today?api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=en-US&page='
    const Featured_Api = `https://api.themoviedb.org/3/tv/top_rated?api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`;
    
    const [activePage, setActivePage] = useState(1);
    const search_Api = `https://api.themoviedb.org/3/search/tv?&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&query=`;
    const [searchValue, setSearchValue] = useState('')
    const [searchQuery, setSearchQuery] = useState(search_Api + searchValue)
    
    const [title, setTitle] = useState('A la télévision')
    const [TvApi, setTvApi] = useState(Featured_Api + activePage);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch_api(TvApi)
    }, [TvApi]);


    const fetch_api = (api) => {
        fetch(api).then(response => response.json())
            .then(data => {
                setLoading(false)
                setActors(data.results);
            });
    }
    const handlechange = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if (searchValue) {
            fetch_api(search_Api + searchValue +'&page=1')
        }
        else
        {
            fetch_api(TvApi)
            setTitle('A la télévision')
        }
       
    }

    


const pageChange = (e, pageInfo) => {
    e.preventDefault()
    setActivePage(pageInfo.activePage);
    setTvApi(Featured_Api + pageInfo.activePage.toString());
};

const clickTvbar = (e) => {
    const buttonChildren = e.target.id
    switch (buttonChildren) {
        case 'comedy':
            fetch_api(genrePart1 + 35 + genrePart2 + activePage)
            setTitle('Series Comedies')
            break;
        case 'tous':
            fetch_api(TvApi)
            setTitle('A la télévision')
            break;
        case 'animation':
            fetch_api(genrePart1+ 16 + genrePart2 +activePage)
            setTitle('Séries d\'Animations')
            break;
        case 'kids':
            fetch_api(genrePart1+ 10762 + genrePart2 +activePage)
            setTitle('Séries pour enfants')
            break;
        case 'news':
            fetch_api(genrePart1+ 10763 + genrePart2 +activePage)
            setTitle('News')
            break;
        case 'aventure':
            fetch_api(genrePart1+ 10759 + genrePart2 +activePage)
            setTitle('Séries d\'actions et aventures')
            break;
            case 'crime':
            fetch_api(genrePart1+ 80 + genrePart2 +activePage)
            setTitle('Séries de crime')
            break;
            case 'familial':
            fetch_api(genrePart1+ 10751 + genrePart2 +activePage)
            setTitle('Séries pour la Famille')
            break;
            case 'documentaire':
            fetch_api(genrePart1+ 99 + genrePart2 +activePage)
            setTitle('Documentaires')
            break;
            case 'reality':
            fetch_api(genrePart1+ 10764 + genrePart2 +activePage)
            setTitle('Réalités')
            break;
            case 'politic':
            fetch_api(genrePart1+ 10768 + genrePart2 +activePage)
            setTitle('Guerre Politiques')
            break;
            case 'drame':
                fetch_api(genrePart1+ 18 + genrePart2 +activePage)
                setTitle('Drames')
                break;
            case 'today':
            fetch_api(airing_today_Api+activePage)
            setTitle('Aujourd\'hui')
            break;

        default:
            break;
    }
}

return (
    <div >
        <Grid className='movieListContainer'>
        <Grid.Column computer={16} mobile={16} tablet={16} className='form-search'>
                <FormSearch  onChange={(e) => handlechange(e)} onSubmit={(e) => handlesubmit(e)} value={searchValue}/>
            </Grid.Column>
            <Grid.Column computer={16} mobile={16} tablet={16} className='moviesBar'>
            <TvBar  onClick={(e) => clickTvbar(e)}/>
                <div className='movieTitle'><h1>{searchValue?`Résultat de la recherche`:title}</h1><div className='redBorder'></div></div><br></br><br></br>
       
            </Grid.Column>
             </Grid>
        {
            loading ? <div><LoaderPage /></div> :
                <Grid container >

                    {
                        actors.length > 0 && actors.map(actor => <Grid.Column mobile={16} tablet={8} computer={4} className="cardColumn"><TvCard key={actor.id} {...actor} /></Grid.Column>)
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
export default SeriesList;