import React from 'react';
import { useEffect, useState } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import MoviesCard from './movieCard'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel';
import Slider from 'infinite-react-carousel';

const Featured_Api = `https://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=10`;

const News = () => {
    const [newsMovies, setNewsMovies] = useState([])

    useEffect(() => {
        fetch(Featured_Api).then(response => response.json())
            .then(data => {
                console.log(data);
                setNewsMovies(data.results);
            })
    }, []);


    return (
        <>
            <Grid>
                <div className='movieTitle'><h1>Films populaires</h1><div className='redBorder'></div></div><br></br><br></br>
            </Grid>

            <Grid container>
                {/* 
                <Slider dots autoplay={true} autoplaySpeed={3000}>
                    
                </Slider> */}
                {
                    newsMovies.length > 0 && newsMovies.slice(0, 4).map(movie => <Grid.Column mobile={16} tablet={8} computer={4} className="cardColumn"><MoviesCard key={movie.id} {...movie} /></Grid.Column>)
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
export default News;