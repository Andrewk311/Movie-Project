import React, {useState, useEffect, useRef} from 'react'
import './App.css';
import axios from "axios";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'; 
import { TablePagination } from '@material-ui/core';
import TableFooter from '@material-ui/core/TableFooter';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Box from '@material-ui/core/Box';


//figure out how to block increasing when there are no more results
//one solution: do another get that is 1 page ahead, and if there are no results in that array, dont allow any more next
//problem with this is if using pagination the results would be in blocks of 10 but i may be searching with 5 results per page
//second solution: load up every page available into another array and if the current is not there yet, allow it to proceed
//problem with this: waste of space, should only put for how far the user is willing to search

function createData(Title, Year, imdbID) {
    return {Title, Year, imdbID}
}

const useStyles = makeStyles({
    table: {
        minWidth:650
    },
});

const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));

let rows = [];

function App(){
    const [search, setSearch] = useState('');
    const [movie, setMovie] = useState({});
    const [movieInstance, setMovieInstance] = useState({});
    const [pageNumber, setPageNumber] = useState(1);
    const [visible, setVisible] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [nextPageData, setNextPageData] = useState(true);
    const prevSearch = usePrevious(search)
    const API_KEY = "7c60f5fa"
    const url = `http://www.omdbapi.com/?s=${search}&type=movie&page=${pageNumber}&apikey=${API_KEY}`;
   

    const getMovie = e => {
        setNextPageData(true);
        setVisible(true);
        if (rowsPerPage === 10){  
            axios.get(`http://www.omdbapi.com/?s=${search}&type=movie&page=${pageNumber+1}&apikey=${API_KEY}`)
                .then(res => {
                    if(res == null || res.data == null || res.data.Search == null){
                        setNextPageData(false);
                    }
                })
            console.log(`page number in getmovie is ${pageNumber}`)
            if (((rows.length/rowsPerPage) >= pageNumber) && (search === prevSearch)){   
                return; 
            }
            axios.get(url)      
                .then(response => {
                    if(response == null || response.data == null || response.data.Search == null) return;
                        for(let i = 0; i < response.data.Search.length; i++){
                            rows.push(createData(response.data.Search[i].Title, response.data.Search[i].Year, response.data.Search[i].imdbID));
                        }
                        console.log(response.data)
                    setMovie(response.data);
                });
            }

        if (rowsPerPage === 5){
            axios.get(`http://www.omdbapi.com/?s=${search}&type=movie&page=${((pageNumber+1)/2)}&apikey=${API_KEY}`)
                .then(res => {
                    if(res == null || res.data == null || res.data.Search == null){
                        setNextPageData(false);
                    }
                })
            console.log(`page number in getmovie is ${(pageNumber+1)/2}`)
            if (((rows.length/rowsPerPage) >= pageNumber) && (search === prevSearch)){   
                return; 
            }
            axios.get(`http://www.omdbapi.com/?s=${search}&type=movie&page=${(pageNumber+1)/2}&apikey=${API_KEY}`)      
                .then(response => {
                    if(response == null || response.data == null || response.data.Search == null) return;
                        for(let i = 0; i < response.data.Search.length; i++){
                            rows.push(createData(response.data.Search[i].Title, response.data.Search[i].Year, response.data.Search[i].imdbID));
                        }
                        console.log(response.data)
                    setMovie(response.data);
                });
        }
    }

    function increasePage(){
        
        if(pageNumber >= 100 || nextPageData === false){
            return;
        }
        else{
            setPageNumber(pageNumber => pageNumber + 1);
        }  
    }

    function decreasePage(){
        if(pageNumber === 1){
            return;
        }
        setPageNumber(pageNumber => pageNumber - 1);  
    }

    function handleRowClick(event, row){
        setVisible(false);
        axios.get(`http://www.omdbapi.com/?i=${row.imdbID}&apikey=7c60f5fa`)
            .then(res => {
                setMovieInstance(res.data);
            })
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPageNumber(1);
    }

    useEffect(() => {
        checkData(movieInstance);
    }, [movieInstance]);

    useEffect(() => {
        getMovie();
    }, [pageNumber]);   //called getMovie every time page number changes, showing a new list

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        }, [value]);
        return ref.current;
      }

    const newSearch = (e) => {
        if (e.key === "Enter"){ 
            if (search === prevSearch){
                getMovie();
            }
            else {
                getMovie();
                rows = [];
                setPageNumber(1);
            }
        }
    }
    const onInputChange = e => {     
        setSearch(e.target.value);
    }

    function TablePaginationActions(){
        
        const classes = useStyles1();
        const theme = useTheme();

        return (
            <div className={classes.root}>              
                <IconButton onClick={decreasePage} disabled={pageNumber === 1} aria-label="previous page">
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={increasePage}
                    disabled={nextPageData === false}
                    aria-label="next page">
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
            </div>
        )
    }

    function checkData(movie){
        if(movie.Response === "True" && visible === true){
            return(
                <Box className="Box" display="flex" flexDirection="row" justifyContent="center">
                    <TableContainer className ={Table} component={Paper}>
                        <Table className={Table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell componenet="th" scope="row"><b>Movie Name</b></TableCell>
                                    <TableCell style={{width: 125 }} align="left"><b>Release Year</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice((pageNumber-1) * rowsPerPage, (pageNumber-1) * rowsPerPage + rowsPerPage)
                                : rows
                                ).map((row) => ( 
                                <TableRow hover onClick={(event) => handleRowClick(event,row)} key={row.imdbID}>
                                    <TableCell componenet="th" scope="row">
                                        {row.Title}
                                    </TableCell>
                                    <TableCell style={{width: 125}} align="center">{row.Year} </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions = {[5, 10, 20, {label: 'All', value: -1}]}
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={pageNumber-1}
                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions}
                                        />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Box>
            );
        }
        else if (movie.Response === "True"){
            return(
                <div className="movieResponse">
                    <h2 className="Title">{movie.Title}</h2>
                    <img className = 'poster' src={movie.Poster} alt=""  />
                    <p className="Genre"><u><b>Genre:</b></u> {movie.Genre}</p>
                    <p className="Director"><u><b>Director:</b></u> {movie.Director}</p>
                    <p className="Rated"><b><u>Rating</u>:</b> {movie.Rated}</p>
                    <p className="imdbRating"><b><u>IMDBRating</u>:</b> {movie.imdbRating}</p>
                    <p className="boxOffice"><b><u>Box Office:</u></b> {movie.BoxOffice}</p>
                    <p className ="goBack" onClick={getMovie}> Back to Search</p>
                </div>
            );
        }
        return(
            <p></p>
        );
    }

    return(
     <div className = "App">
         <header>
             <h1>Movie App</h1>
         </header>
        <section className = "search">
            <input className = "searchBox" type="text" placeholder = "Search for a movie..." value={search} onKeyPress={newSearch} onChange={onInputChange}/>       
        </section>
        {visible && checkData(movie)}
        {!visible && checkData(movieInstance)}
     </div>
    );
}

export default App;