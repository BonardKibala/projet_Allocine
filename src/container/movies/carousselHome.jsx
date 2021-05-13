import  React, {useEffect,useCallback,useState}  from  'react';
import  Carousel from  'semantic-ui-carousel-react';
import FirstBlock from './firstBlock';
import FirstBlock1 from './firstBlock1';
import FirstBlock2 from './firstBlock2';



const CarousselHome = ()=>{
	const ImageApi = "https://image.tmdb.org/t/p/w1280";
	const AllMovies = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR&page=`;
    const [movies,setMovies]=useState([])
	useEffect(() => {
        fetchFonction(AllMovies)
    }, [AllMovies]);


    const fetchFonction = useCallback((api) => {
        fetch(api).then(response => response.json())
            .then(data => {
                setMovies(data.results);
            })
    });
    let  elements  = [
		{
			render:()=>{
				return <FirstBlock src={movies.map(movie=>movie.poster_path)}/>
			}
		},
		{
			render:()=>{
				return <FirstBlock1/>
			}
	    },
        {
			render:()=>{
				return <FirstBlock2/>
			}
	    },
	]
	return (
		<div>
			<Carousel
				elements  =  {  elements  }
				duration  ={3000}
				animation  ='scale'
				showNextPrev  =  {false}
				showIndicators  ={false}
			/>
		</div>
	)
}
export default CarousselHome;