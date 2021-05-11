import React from 'react'
import { useState, useEffect } from "react"
import { Card, Image, Button, Icon, Modal, Table, Header, Rating } from 'semantic-ui-react'
import VideoView from './video_View'


const Image_Api = "https://image.tmdb.org/t/p/w1280";

const MoviesCard = ({ id, title, poster_path, release_date, overview }) => {
  const Details_Api = `http://api.themoviedb.org/3/movie/${id}?api_key=b8e4f457e57f8e0e1ed625b784a14f3b`
  const Videos_Api = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b8e4f457e57f8e0e1ed625b784a14f3b`

  const [videos, setVideos] = useState([])
  const [open, setOpen] = React.useState(false)
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(Videos_Api).then(response => response.json())
      .then(data => {
        setVideos(data.results);
      })
  }, []);

  useEffect(() => {
    fetch(Details_Api).then(response => response.json())
      .then(data => {
        setDetails([data]);
        console.log(data)
      })
  }, []);

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
        <Card color='red' raised className='cardMovie'>
          <Image src={Image_Api + poster_path} wrapped ui={false} className='cardImage' />
          <Card.Content className='cardContent'>
            <Card.Header className='filmTitle'>{title}</Card.Header>
            <Card.Meta>
              <span className='releaseDate'>{release_date}</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      }
      className='movieCard'
    >

      <Modal.Header className='modalTitle'>{title}</Modal.Header>
      <Modal.Content image>
        <Image size='huge' src={Image_Api + poster_path} wrapped />
        <Modal.Description>
          <p>
            {overview} <br></br>
          </p>
          <div>

            {
              details.map(detail => <div>
                <p>Site: {detail.homepage}
              popularité: {detail.popularity}<br></br>
              Revenu: {detail.revenue}<br></br>
              Status: {detail.status}<br></br>
              Budget: {detail.budget}<br></br>
              Date: {detail.release_date}<br></br>
              Durée: {`${detail.runtime} minutes`}<br></br>
              Slogan: {detail.tagline}<br></br>
              Titre Original: {detail.original_title}<br></br>
              Votes: {detail.vote_count}<br></br>
              Moyenne votes: {detail.vote_average} </p>
                
                <div stackable className='contentTable'>
                <Table stackable className='detail_Table'>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' color='blue' textAlign='center'>
                          Genres du film
                                </Header>
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      {detail.genres.map((genre, index) => <div>
                        <Table.Cell singleLine>{genre.name}</Table.Cell>
                        
                      </div>)}

                    </Table.Row>
                  </Table.Body>

                </Table>
                <Table stackable className='detail_Table'>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' color='blue' textAlign='center'>
                        Compagnies de production
                                </Header>
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      {detail.production_companies.map((companies, index) => <div>
                        <Table.Cell singleLine >{`${companies.name}  (${companies.origin_country})`}</Table.Cell>
                        
                      </div>)}
                    </Table.Row>
                  </Table.Body>
                </Table>
                <Table stackable className='detail_Table'>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' color='blue' textAlign='center'>
                        Pays producteurs
                                </Header>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      {detail.production_countries.map((country, index)=> <div>
                        <Table.Cell singleLine>{country.name}</Table.Cell>
                        
                      </div>)}
                    </Table.Row>
                  </Table.Body>
                </Table>
                </div>

                <p>Langues parlées: {detail.spoken_languages.map((language, index) => (
                  <div>{index + 1}. {`${language.name}`} <br></br></div>
                ))}</p>
              </div>)
            }
          </div>
          <VideoView poster_path={poster_path} title={title} videoKey={videos.slice(0, 1).map(video => video.key)} />
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
export default MoviesCard;