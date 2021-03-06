import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderPage = () => {

    return (
        <div className='loader'>
            <Dimmer active>
                <Loader size='massive'>Loading</Loader>
            </Dimmer>
        </div>
    )
}
export default LoaderPage;