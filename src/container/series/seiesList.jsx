import React from "react";
import { useEffect, useState } from "react";
import { Grid, Pagination } from "semantic-ui-react";
import LoaderPage from "../movies/loader";
import FormSearch from "../Elements/formsearch";
import ActorsCard from "../actors/actorsCard";
import TvCard from "./TvCards";


const SeriesList = () => {
    const [actors, setActors] = useState([])

    const [genreId, setGenreId] = useState('')


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

return (
    <div >
        <Grid className='movieListContainer'>
        <Grid.Column computer={16} mobile={16} tablet={16} className='form-search'>
                <FormSearch  onChange={(e) => handlechange(e)} onSubmit={(e) => handlesubmit(e)} value={searchValue}/>
            </Grid.Column>
            <Grid.Column computer={16} mobile={16} tablet={16} className='moviesBar'>
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