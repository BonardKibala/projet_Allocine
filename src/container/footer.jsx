import { Link } from 'react-router-dom';
import { Grid,Icon } from 'semantic-ui-react'
const Footer = () => {

    return (
        <>
            <Grid container stackable>
                <Grid.Column mobile={16} computer={4} tablet={16} className='cardColumn'>
                    <div><h1><span className='head'>Biso</span><span className='span'>Film</span><Icon className='iconFilm1' name='film' /></h1></div>
                </Grid.Column >
                <Grid.Column mobile={16} computer={4} tablet={16} className='cardColumn'>
                    <div className='menu-footer'>
                    <Link to="/"><h4>Accueil</h4></Link><br></br>
                    <Link to="/movies"><h4>Films</h4></Link><br></br>
                    <Link to="/series"><h4>Series</h4></Link></div>
                </Grid.Column>
                <Grid.Column mobile={16} computer={4} tablet={16} className='cardColumn'>
                    <div><h3>Vous servir est notre devoir</h3></div>
                </Grid.Column>
                <Grid.Column mobile={16} computer={16} tablet={16} className='cardColumn'>
                    <div><h4>Copyright@ Mai 2021 /<span>Bonard Kibala</span>. Tout droit reservé</h4></div>
                </Grid.Column>
            </Grid>
        </>
    )
}
export default Footer;