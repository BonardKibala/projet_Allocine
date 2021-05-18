import React, { useEffect, useCallback, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Link} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import { Image,Button,Grid } from 'semantic-ui-react'



const CarousselHome = () => {
	const ImageApi = "https://image.tmdb.org/t/p/w1280";
	const AllMovies = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=1`;
	const [movies, setMovies] = useState([])

	useEffect(() => {
		fetchFonction(AllMovies)
	}, []);


	const fetchFonction = useCallback((api) => {
		fetch(api).then(response => response.json())
			.then(data => {
				setMovies(data.results);
			})
	});

	return (
		<div>
			<Carousel autoPlay={true}>
				{movies.map(movie => <div className='ImageLegendeContainer'><Image src={ImageApi + movie.poster_path} className='Image-legende'/>
				<div className='legend'>
				<Grid className='startSegment1' columns={16}>
                <Grid.Column className='textStart' mobile={16} tablet={16} computer={8}>
                    <div className='texthome'>
                        Recherchez un film au choix et savourez-le avec le plaisir.
                        <br></br><br></br>
                        <span className='bienvenu'>
                            Vous êtes le(a) bienvenu(e)
                          </span>
                    </div>
                    <div><br></br>
					<div>
                        <Link to="/movies">
                            <Button primary className='btnStart'>
                                Commencer
                         </Button>
                        </Link>
                    </div>
                    </div>
                </Grid.Column>
            </Grid> <br></br><br></br><br></br><br></br>
				</div><br></br>
				</div>)
				}
			</Carousel>

		</div>
	)
}
export default CarousselHome;