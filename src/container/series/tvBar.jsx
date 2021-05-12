import React, { useState } from 'react'
import {Menu,Button } from 'semantic-ui-react'

const TvBar=({onClick})=> {
  const [activeItem,setAtiveItem]=useState('home')

  const handleItemClick = (e, { name}) => setAtiveItem(name)

    return (
      <Menu inverted className='moviebar'>
        <Menu.Item>
        <Button centered color='green' id='tous' basic onClick={onClick}>Tous</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='animation' basic onClick={onClick}>Animation</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='comedy'  basic onClick={onClick}>Comedie</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='kids' basic onClick={onClick} basic>Enfants</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='news' basic onClick={onClick} basic>News</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='aventure' basic onClick={onClick} basic>Aventures</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='crime' basic onClick={onClick} basic>Crime</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='familial' basic onClick={onClick} basic>Familiale</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='documentaire' basic onClick={onClick} basic>Documentaire</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='reality' basic onClick={onClick} basic>Réalité</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='politic' basic onClick={onClick} basic>Guerres et Politique</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='drame' basic onClick={onClick} basic>Drames</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='today' basic onClick={onClick} basic>Aujourd'hui</Button>
        </Menu.Item>
      </Menu>
    )
  }
  export default TvBar;