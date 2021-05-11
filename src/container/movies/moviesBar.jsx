import React, { useState } from 'react'
import {Menu,Button } from 'semantic-ui-react'

const Moviesbar=({onClick})=> {
  const [activeItem,setAtiveItem]=useState('home')

  const handleItemClick = (e, { name}) => setAtiveItem(name)

    return (
      <Menu inverted className='moviebar'>
        <Menu.Item>
        <Button centered color='green' id='tous' basic onClick={onClick}>Tous les films</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='top' basic onClick={onClick}>Top films</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='comedy'  basic onClick={onClick}>Comedy</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='action' basic onClick={onClick} basic>Actions</Button>
        </Menu.Item>
        <Menu.Item>
        <Button centered color='green' id='romance' basic onClick={onClick} basic>Romantiques</Button>
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
        <Button centered color='green' id='fiction' basic onClick={onClick} basic>Science Fiction</Button>
        </Menu.Item>
      </Menu>
    )
  }
  export default Moviesbar;