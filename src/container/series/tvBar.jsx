import React, { useState, useCallback } from 'react'
import { Menu, Button, Grid } from 'semantic-ui-react'
import ContentTVSideBar from '../Elements/contentTvsidebar'

const TvBar = ({ onClick }) => {
  const [activeItem, setActiveItem] = useState('tous');

  const handleItemClick = useCallback((name) => {
    setActiveItem(name)
  });

  return (
   
    <Menu inverted pointing primary  className='moviebar cardColumn'>
       <Grid container >
         {
           ContentTVSideBar.map(content=><Menu.Item onClick={() => handleItemClick(content.id)} active={activeItem === content.id}>
           <Button centered color='green' id={content.id} basic onClick={onClick} >{content.title}</Button>
         </Menu.Item>)
         }
            </Grid>
    </Menu>
   
  )
}
export default TvBar;