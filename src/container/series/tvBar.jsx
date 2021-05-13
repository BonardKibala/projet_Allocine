import React, { useState, useCallback } from 'react'
import { Menu, Button, Grid } from 'semantic-ui-react'

const TvBar = ({ onClick }) => {
  const [activeItem, setActiveItem] = useState('tous');

  const handleItemClick = useCallback((name) => {
    setActiveItem(name)
  });

  return (
   
    <Menu inverted pointing primary  className='moviebar cardColumn'>
       <Grid container >
            <Menu.Item onClick={() => handleItemClick('tous')} active={activeItem === 'tous'}>
              <Button centered color='green' id='tous' basic onClick={onClick} >Tous</Button>
            </Menu.Item>
          <Menu.Item onClick={() => handleItemClick('animation')} active={activeItem === 'animation'}>
              <Button centered color='green' id='animation' basic onClick={onClick}>Animation</Button>
            </Menu.Item>
            <Menu.Item onClick={() => handleItemClick('comedy')} active={activeItem === 'comedy'}>
              <Button centered color='green' id='comedy' basic onClick={onClick}>Comedie</Button>
            </Menu.Item>
            <Menu.Item onClick={() => handleItemClick('kids')} active={activeItem === 'kids'}>
              <Button centered color='green' id='kids' basic onClick={onClick} basic>Enfants</Button>
            </Menu.Item>
            <Menu.Item onClick={() => handleItemClick('news')} active={activeItem === 'news'}>
              <Button centered color='green' id='news' basic onClick={onClick} basic>News</Button>
            </Menu.Item>
            <Menu.Item onClick={() => handleItemClick('aventure')} active={activeItem === 'aventure'}>
              <Button centered color='green' id='aventure' basic onClick={onClick} basic>Aventures</Button>
            </Menu.Item>
            <Menu.Item onClick={() => handleItemClick('crime')} active={activeItem === 'crime'}>
              <Button centered color='green' id='crime' basic onClick={onClick} basic>Crime</Button>
            </Menu.Item>
            <Menu.Item onClick={() => handleItemClick('familial')} active={activeItem === 'familial'}>
              <Button centered color='green' id='familial' basic onClick={onClick} basic>Familiale</Button>
            </Menu.Item>
            <Menu.Item onClick={() => handleItemClick('documentaire')} active={activeItem === 'documentaire'}>
              <Button centered color='green' id='documentaire' basic onClick={onClick} basic>Documentaire</Button>
            </Menu.Item>
            <Menu.Item onClick={() => handleItemClick('reality')} active={activeItem === 'reality'}>
              <Button centered color='green' id='reality' basic onClick={onClick} basic>Réalité</Button>
            </Menu.Item>
            <Menu.Item onClick={() => handleItemClick('politic')} active={activeItem === 'politic'}>
              <Button centered color='green' id='politic' basic onClick={onClick} basic>Guerres et Politique</Button>
            </Menu.Item>
            <Menu.Item onClick={() => handleItemClick('drame')} active={activeItem === 'drame'}>
              <Button centered color='green' id='drame' basic onClick={onClick} basic>Drames</Button>
            </Menu.Item>
            <Menu.Item onClick={() => handleItemClick('today')} active={activeItem === 'today'}>
              <Button centered color='green' id='today' basic onClick={onClick} basic>Aujourd'hui</Button>
            </Menu.Item>
            </Grid>
    </Menu>
   
  )
}
export default TvBar;