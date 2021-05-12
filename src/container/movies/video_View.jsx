
import React from 'react'
import { Button, Icon, Modal, Embed } from 'semantic-ui-react'

const Image_Api = "https://image.tmdb.org/t/p/w500";

const VideoView = ({ title, videoKey,poster_path,name }) => {
    const [open, setOpen] = React.useState(false)
    return (
        <Modal
            basic
            dimmer='inverted blurring'
            centered
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={
                <Button color='green' inverted >
                    <Icon name='video play' />Prévisualiser
        </Button>
            }
            className='movieCard'
        >
            <Modal.Header className='modalTitle'>{title?title:name}</Modal.Header>
            <Modal.Content >
                <div>
                <Embed
                    autoplay={false}
                    brandedUI
                    color='black'
                    hd={false}
                    id={videoKey}
                    placeholder={Image_Api + poster_path}
                    source='youtube'
                />
                </div>
                
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' />Fermer
        </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default VideoView;