import React from 'react'
import { useState, useEffect } from "react"
import { Card, Image, Button, Icon, Modal, Table, Header, Rating, Message } from 'semantic-ui-react'


const Image_Api = "https://image.tmdb.org/t/p/w1280";

const ActorsCard = ({ id, name, profile_path, overview, known_for }) => {
   const ActorsDetailsApi = `https://api.themoviedb.org/3/person/${id}?api_key=b8e4f457e57f8e0e1ed625b784a14f3b&language=fr-FR`

  const [ActorsDetails, setActorsDetails] = useState([])
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    fetch(ActorsDetailsApi).then(response => response.json())
      .then(data => {
        setActorsDetails([data]);
      })
  }, []);



  const ContentDetails = () => {
    let content = ''
    if (profile_path) {
      return <div>{ActorsDetails.map(detail => <Message color='black'>{detail.biography}</Message>)}</div>
    }
    else if (known_for.map(knowfor => knowfor.profile_path)) {
      return <div>{ActorsDetails.map(detail => <Message color='black'>{detail.biography}</Message>)}</div>
    }
   
  }

  return (

    <Modal
      basic
      dimmer='inverted blurring'
      centered
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='fullscreen'
      trigger={
        <Card color='red' raised >
          <Image src={profile_path ? Image_Api + profile_path : Image_Api + known_for.map(knowfor => knowfor.profile_path)} wrapped ui={false} className='cardImage' />
          <Card.Content className='cardContent'>
            <Card.Header className='filmTitle'>{name}</Card.Header>
            <Card.Meta>
              {/* <span className='releaseDate'>{release_date}</span> */}
            </Card.Meta>
          </Card.Content>
        </Card>
      }
      className='movieCard'
    >

      <Modal.Header className='modalTitle'>{name}</Modal.Header>
      <Modal.Content image>
        <Image size='big' src={profile_path ? Image_Api + profile_path : Image_Api + known_for.map(knowfor => knowfor.profile_path)} wrapped />
        <Modal.Description>
          <div>
            <h1 className='title'>{profile_path ? 'Biographie de l\'acteur' : 'Description'}</h1>
            {ContentDetails()}
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' />Fermer
        </Button>
      </Modal.Actions>
      {/* {JSON.stringify(details)} */}
    </Modal>
  )
}
export default ActorsCard;