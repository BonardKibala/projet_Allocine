import { useEffect,useState } from 'react'
import { Button, Grid} from 'semantic-ui-react'
import MoviesCard from '../movies/movieCard'
import {Link} from 'react-router-dom'

const SeriesTV = () => {
    const Featured_Api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=51`;

    const [SeriesTV, setSeriesTV] = useState([])

    useEffect(() => {
        fetch(Featured_Api).then(response => response.json())
            .then(data => {
                console.log(data);
                setSeriesTV(data.results);
            })
    }, []);
    
    return (
        <>
            <Grid>
                <div className='movieTitle'><h1>Series Télévisées</h1><div className='redBorder'></div></div><br></br><br></br>
            </Grid>

            <Grid container>
                {
                    SeriesTV.length > 0 && SeriesTV.slice(0,4).map(movie => <Grid.Column mobile={16} tablet={8} computer={4} className="cardColumn"><MoviesCard key={movie.id} {...movie} /></Grid.Column>)
                }
            </Grid>
            <Grid columns={1} centered container>
                <Grid.Column className='cardColumn'>
                <Link to='/series'><Button centered color='green' basic>Voir plus</Button></Link>
                </Grid.Column>
            </Grid>
        </>
    )
}
export default SeriesTV;