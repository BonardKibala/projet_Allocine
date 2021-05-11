import React from 'react'
import { useState, useEffect } from "react"
import { Card, Image, Button, Icon, Modal, Table, Header, Rating, Message } from 'semantic-ui-react'


const Image_Api = "https://image.tmdb.org/t/p/w1280";

const TvCard = ({ id, name, poster_path, overview, known_for }) => {
  const TvDetailsApi = `http://api.themoviedb.org/3/tv/${id}?api_key=b8e4f457e57f8e0e1ed625b784a14f3b`
  const [open, setOpen] = React.useState(false)
  const [tvDetails, setTvDetails] = useState([])

  useEffect(() => {
    fetch(TvDetailsApi).then(response => response.json())
      .then(data => {
        setTvDetails([data]);
        console.log(data)
      })
  }, []);


  const ContentDetails = () => {
      return <div><Message color='black'>{overview}</Message>
        <div> {tvDetails.map(tvdetail => <div>
          <p>Episodes: {`${tvdetail.number_of_episodes}`}</p>
          <p>saisons: {tvdetail.number_of_seasons}</p>
          <p>Votes: {tvdetail.vote_count}</p>
          <p>Moyenne de votes: {tvdetail.vote_average}</p>
          <div><h1>Companie de production:</h1> {tvdetail.production_companies.map((companie, index) => <p key={index}>{`${index + 1 + '.'} ${companie.name} (${companie.origin_country})`}</p>)}</div>
        </div>)}</div>

      </div>
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
          <Image src={Image_Api + poster_path} wrapped ui={false} className='cardImage' />
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
        <Image size='big' src={Image_Api + poster_path} wrapped />
        <Modal.Description>
          <div>
            <h1 className='title'>Description</h1>
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
export default TvCard;