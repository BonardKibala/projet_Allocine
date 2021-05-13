import { Grid, Icon, Button,Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const FirstBlock = ({src}) => {
    return (
        <>
            <Grid className='startSegment1' columns={16}>
                <Image src={src}/>
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
                            <Button color='green' basic className='btnStart'>
                                Commencer
                         </Button>
                        </Link>
                    </div>
                </Grid.Column>
            </Grid> <br></br>
        </>
    )
}
export default FirstBlock;