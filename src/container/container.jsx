
import { Route, Switch } from 'react-router-dom';
import Home from './home'
import MenuSite from './menu';
import MoviesList from './movies/moviesList';
import SeriesList from './series/seiesList';
import ActorsList from './actors/actorsList'

const PrincipalContainer = ()=>{

    return (
<div className='principalcontainer'>
<Switch>
    <Route exact path="/" component={Home} />
</Switch>
<MenuSite/>
<Switch>
    <Route path="/movies" component={MoviesList} />
    <Route path="/series" component={SeriesList} />
    <Route path="/actors" component={ActorsList} />
</Switch>
</div>
    )
}
export default PrincipalContainer;