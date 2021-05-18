
import { Menu, Button, Grid, Segment } from 'semantic-ui-react'
import ContentMoviesSideBar from '../Elements/contetMoviesSideBar'


const Moviesbar = ({ onClick }) => {

  return (
    <div inverted className='moviebar'>
      <Grid container>
        {
          ContentMoviesSideBar.map(content =>
            <Button centered color='green' id={content.id} basic onClick={onClick}>{content.title}</Button>
           )
        }
      </Grid>
    </div>

  )
}
export default Moviesbar;