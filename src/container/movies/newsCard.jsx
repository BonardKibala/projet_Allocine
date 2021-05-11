import React from 'react'
import { Card, Image, Button, Icon, Modal, Table, Header, Rating } from 'semantic-ui-react'

const NewsCard = ()=>{
    const [open, setOpen] = React.useState(false)
    return (
        <>
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
          <Image src='' wrapped ui={false} className='cardImage' />
          <Card.Content className='cardContent'>
            <Card.Header className='filmTitle'>xxxxx</Card.Header>
            <Card.Meta>
              <span className='releaseDate'>44444fj</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      }
      className='movieCard'
    >

      <Modal.Header className='modalTitle'>bnrd</Modal.Header>
      <Modal.Content image>
        <Image size='huge' src='' wrapped />
        <Modal.Description>
       
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' />Fermer
        </Button>
      </Modal.Actions>
    </Modal>
        </>
    )
}
export default NewsCard;