import { Card, CardActionArea, CardContent, Container, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import bookDisplay from "../hoc/BookDisplay";

const useStyles = makeStyles({
    container: {
        maxHeight: 440,
        maxWidth: 500,
        backgroundColor: 'none'
    }
});
const BookDetails = (props) => {
    const classes = useStyles();
    const selectedBook = useSelector(state => state.selectedBook);

    return (<>
        <div>
            {selectedBook &&
                <Container maxWidth="sm">
                    <h2>Book Details</h2><br />
                    <Card className={classes.container}>
                        <CardActionArea>
                            <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt="book" />
                            {props.showSubtitle && <CardContent>
                                <Typography variant="body2" color="secondary" paragraph>
                                    {selectedBook.volumeInfo.subtitle}
                                </Typography>
                            </CardContent>}
                        </CardActionArea>
                    </Card>
                </Container>}
        </div></>);
}

export default bookDisplay(BookDetails);