import {Grid,Icon,Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
 const FirstBlock2 = ()=>{
    return (
        <>
        <Grid className='startSegment3'>
            <Grid.Column mobile={16} tablet={16} computer={16}>
            <div className='bisoFilm'><span className='head'>Biso</span><span className='span'>Film</span><Icon className='iconFilm1' name='film' /></div>
            </Grid.Column>
                <Grid.Column className='textStart' mobile={16} tablet={16} computer={8}>
                    <div className='texthome'>
                     Recherchez un film au choix et savourez-le avec le plaisir.
                        <br></br><br></br>
                        <span className='bienvenu'>
                            Vous êtes le(a) bienvenu(e)
                          </span>
                    </div>
                    <div>
                        <Link to="/movies">
                            <Button color='green' secondary className='btnStart'>
                                Commencer
                         </Button>
                        </Link>
                    </div>
                </Grid.Column>
            </Grid> <br></br>
        </>
    )
}
export default FirstBlock2;