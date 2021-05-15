import { useEffect, useState } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import MoviesCard from './movieCard';

const Featured_Api = `https://api.themoviedb.org/3/movie/top_rated?sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=10`;

const TopFilms = () => {
    const [TopMovies, setTopMovies] = useState([])

    useEffect(() => {
        fetch(Featured_Api).then(response => response.json())
            .then(data => {
                console.log(data);
                setTopMovies(data.results);
            })
    }, []);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (
        <>
            <Grid>
                <div className='movieTitle'><h1>Films Top</h1><div className='redBorder'></div></div><br></br><br></br>
            </Grid>

            <Grid container>
                    {
                        TopMovies.length > 0 && TopMovies.slice(0,4).map(movie => <Grid.Column mobile={8} tablet={8} computer={4} className="cardColumn"><MoviesCard key={movie.id} {...movie} /><br></br><br></br></Grid.Column>)
                    }

            </Grid>
            <Grid columns={1} centered container>
                <Grid.Column className='cardColumn'>
                    <Link to='/movies'><Button centered color='green' basic>Voir plus</Button></Link>
                </Grid.Column>
            </Grid>
        </>
    )
}
export default TopFilms;