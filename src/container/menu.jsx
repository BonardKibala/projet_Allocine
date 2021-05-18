import { Menu, Segment,Header, Icon, Grid } from 'semantic-ui-react'
import React, { useState,useCallback } from 'react'
import { Link } from 'react-router-dom'


const MenuSite = () => {
    const [activeItem, setActiveItem] = useState('')
    const handleItemClick = useCallback((name) => {
        setActiveItem(name)
    });
    return (
        <>
            <Segment inverted className='Menu'>
                <Menu inverted pointing secondary >
                    <Grid>
                        <Grid.Row>
                            <Grid.Column computer={8} mobile={16} className='cardColumn'>
                                <Menu.Item onClick={() => handleItemClick('home')} active={activeItem === 'home'}>
                                    <Header inverted className='header'>
                                        <Link to='/'><h1 className='head' >Biso<span className='span'>Film</span></h1></Link><Icon className='iconFilm' name='film' />
                                    </Header>
                                </Menu.Item>
                            </Grid.Column>
                            <Grid.Column computer={8} mobile={16}>
                                <Menu.Menu position='right'>
                                    
                                    <Link to="/movies"><Menu.Item name='Films' onClick={() => handleItemClick('films')} active={activeItem === 'films'} /></Link>

                                    <Link to="/series"><Menu.Item name='Tv' onClick={() => handleItemClick('tv')} active={activeItem === 'tv'} /></Link>
                                    <Link to="/actors"><Menu.Item name='Acteurs' onClick={() => handleItemClick('acteurs')} active={activeItem === 'acteurs'} /></Link>

                                </Menu.Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Menu>
            </Segment><br></br>

        </>

    )
}
export default MenuSite;