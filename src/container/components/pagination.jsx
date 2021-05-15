
import { Grid, Pagination } from "semantic-ui-react";
const PaginationPage = ({ activePage, pageChange }) => {

    return (
        <Grid>
            <Grid.Column className='cardColumn' mobile={8}>
                <Pagination
                    activePage={activePage}
                    onPageChange={pageChange}
                    totalPages={100}
                    ellipsisItem={null}
                    secondary
                    inverted
                />
            </Grid.Column>
            <br></br><br></br><div className='separeBlock'></div><br></br>
        </Grid>
    )

}
export default PaginationPage;