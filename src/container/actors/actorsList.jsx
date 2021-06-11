import React from "react";
import { useEffect, useState } from "react";
import { Grid} from "semantic-ui-react";
import LoaderPage from "../Elements/loader";
import FormSearch from "../Elements/formsearch";
import ActorsCard from "./actorsCard";
import PaginationPage from "../components/pagination";


const ActorsList = () => {
    const [actors, setActors] = useState([])

    const Featured_Api = `https://api.themoviedb.org/3/person/popular?api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`;


    const [activePage, setActivePage] = useState(1);
    const search_Api = `https://api.themoviedb.org/3/search/person?&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&query=`;
    const [searchValue, setSearchValue] = useState('')
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
        else {
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
                    <FormSearch onChange={(e) => handlechange(e)} onSubmit={(e) => handlesubmit(e)} value={searchValue} />
                </Grid.Column>
                <Grid.Column computer={16} mobile={16} tablet={16} className='moviesBar'>
                    <div className='movieTitle'><h1>{searchValue ? `Résultat de la recherche` : title}</h1><div className='redBorder'></div></div><br></br><br></br>

                </Grid.Column>
            </Grid>
            {
                loading ? <LoaderPage />:
                    <div>
                        <Grid container >

                            {
                                actors.length > 0 ? actors.map(actor => <Grid.Column mobile={8} tablet={5} computer={3} className="cardColumn"><ActorsCard key={actor.id} {...actor} /></Grid.Column>) : <h1>Pas de contenu</h1>
                            }
                        </Grid>
                        <PaginationPage activePage={activePage} pageChange={pageChange}/>
                    </div>

            }
        </div>
    )
}
export default ActorsList;