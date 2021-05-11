import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderPage = () => {

    return (
        <div>
            <Dimmer active>
                <Loader size='massive'>Loading</Loader>
            </Dimmer>
        </div>
    )
}
export default LoaderPage;