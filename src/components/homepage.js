import { Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchBooks, selectedBook } from "../redux/booksActions";
import bookDisplay from "../hoc/BookDisplay";

const useStyles = makeStyles({
    root: {
        width: '70%',
    },
    container: {
        maxHeight: 600,
    },
    tableIcons: {
        cursor: 'pointer'
    }
});
const HomePage = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const booksList = useSelector(state => state.booksList.items);
    const error = useSelector(state => state.error);
    useEffect(() => {
        dispatch(fetchBooks());
        // eslint-disable-next-line 
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleRowClick = (e) => {
        dispatch(selectedBook(e));
        history.push('/bookdetails');
    }


    return (<>
        {!error ? <div >
            <h1>Books List</h1>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={{ minWidth: 150 }}><strong>Image</strong></TableCell>
                            <TableCell align="center" style={{ minWidth: 150 }}><strong>Title</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {booksList && booksList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                            return (
                                <TableRow onClick={() => handleRowClick(row)} hover tabIndex={-1} key={row.id}>
                                    <TableCell align='center' >
                                        <img src={row.volumeInfo.imageLinks.smallThumbnail} alt="book" />
                                    </TableCell>
                                    <TableCell align='center'>
                                        {row.volumeInfo.title}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={booksList ? booksList.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div> : <Snackbar
            open={error ? true : false}
            autoHideDuration={3000}
            message={error}
        />}</>);
}

export default bookDisplay(HomePage);

