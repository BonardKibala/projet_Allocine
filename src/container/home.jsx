
import CarousselHome from './Elements/carousselHome'
import LastFilms from './movies/lastFilm'
import SeriesTV from './series/newsSeries'
import TopFilms from './movies/topFilms'
import News from './movies/popularfilms'

const Home = () => {

    return (
        <>
        <div className='HomeContainer'>
            <CarousselHome/>
            <News/><br></br>
            <div className='separeBlock'></div><br></br>
            <TopFilms/><br></br>
            <div className='separeBlock'></div><br></br>
            <LastFilms/><br></br>
            <div className='separeBlock'></div><br></br>
            <SeriesTV/><br></br>
            <div className='separeBlock'></div><br></br>
        </div>
        </>
    )
}
export default Home;