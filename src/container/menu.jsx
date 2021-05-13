import { Menu, Segment, Search, Header, Icon, Input, Form } from 'semantic-ui-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MoviesList from './movies/moviesList'


const MenuSite = () => {
    const [activeItem, setActiveItem] = useState('films')
    const handleItemClick = (name) => {
        setActiveItem(name)
    }
    return (
        <>
            <Segment inverted className='Menu'>
                <Menu inverted pointing secondary >

                    <Menu.Item>
                        <Header inverted className='header'>
                            <Link to='/'><h1 className='head'>Biso<span className='span'>Film</span></h1></Link><Icon className='iconFilm' name='film' />
                        </Header>
                    </Menu.Item>

                    <Menu.Menu position='right' >
                        <Link to="/movies"><Menu.Item name='films' onClick={() => handleItemClick('films')} active={activeItem === 'films'} /></Link>

                        <Link to="/series"><Menu.Item name='tv' onClick={() => handleItemClick('tv')} active={activeItem === 'tv'} /></Link>
                        <Link to="/actors"><Menu.Item name='acteurs' onClick={() => handleItemClick('acteurs')} active={activeItem === 'acteurs'} /></Link>


                    </Menu.Menu>
                </Menu>
            </Segment><br></br>

        </>

    )
}
export default MenuSite;