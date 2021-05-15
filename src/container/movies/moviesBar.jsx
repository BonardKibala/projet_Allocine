
import { Menu, Button, Grid, Segment } from 'semantic-ui-react'
import ContentMoviesSideBar from '../Elements/contetMoviesSideBar'


const Moviesbar = ({ onClick }) => {

  return (
    <Menu inverted className='moviebar'>
      <Grid container>
        {
          ContentMoviesSideBar.map(content =><Menu.Item>
            <Button centered color='green' id={content.id} basic onClick={onClick}>{content.title}</Button>
          </Menu.Item> )
        }
      </Grid>
    </Menu>

  )
}
export default Moviesbar;