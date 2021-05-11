import React from "react";
import { useEffect, useState } from "react";
import { Grid, Pagination } from "semantic-ui-react";
import LoaderPage from "../movies/loader";
import MoviesCard from "../movies/movieCard";
import Moviesbar from "../movies/moviesBar";
import FormSearch from "../Elements/formsearch";
import ActorsCard from "./actorsCard";


const ActorsList = () => {
    const [actors, setActors] = useState([])

    const [genreId, setGenreId] = useState('')
    const Featured_Api = `https://api.themoviedb.org/3/person/popular?api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`;
    
     
    const [activePage, setActivePage] = useState(1);
    const search_Api = `https://api.themoviedb.org/3/search/person?&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&query=`;
    const [searchValue, setSearchValue] = useState('')
    const [searchQuery, setSearchQuery] = useState(search_Api + searchValue)
    const [title, setTitle] = useState('Acteurs')
    
    const [ActorsApi, setActorsApi] = useState(Featured_Api + activePage);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch_api(ActorsApi)
    }, [ActorsApi]);


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
            fetch_api(search_Api + searchValue)
        }
        else
        {
            fetch_api(ActorsApi)
            setTitle('Acteurs')
        }
       
    }

    


const pageChange = (e, pageInfo) => {
    e.preventDefault()
    setActivePage(pageInfo.activePage);
    setActorsApi(Featured_Api + pageInfo.activePage.toString());
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
                        actors.length > 0 ? actors.map(actor => <Grid.Column mobile={16} tablet={8} computer={4} className="cardColumn"><ActorsCard key={actor.id} {...actor} /></Grid.Column>):<h1>Pas de contenu</h1>
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
export default ActorsList;