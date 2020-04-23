import React, { useEffect } from 'react';
import Paginator from 'react-hooks-paginator';
import { fetchData } from '../data/saints';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    textAlign: 'center',
    display: 'block',
  },
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: 'lightblue',
  },
}));

function AudioBook() {
  const classes = useStyles();
  const pageLimit = 8;

  const [offset, setOffset] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [currentData, setCurrentData] = React.useState([]);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  return (
    <div className="App">
      {currentData.map((a) => (
        <Paper
          direction="column"
          justify="center"
          className={classes.paper}
          key={a.id}
        >
          <Grid
            container
            spacing={0}
            direction="column"
            className={classes.root}
          >
            <List className={classes.root} key={a.id}>
              <ListItem variant="h1" justify="center" className={classes.root}>
                <b>Name: {a.name}</b>
              </ListItem>
              <ListItem variant="h3" justify="center" className={classes.root}>
                <b>Feast Day: {a.feastday}</b>
              </ListItem>
              <ListItem variant="h3" justify="center" className={classes.root}>
                <b>Notable- {a.notable}</b>
              </ListItem>
              <br />
              <ListItem justify="center" className={classes.root}>
                <b>
                  Info-{' '}
                  <a
                    style={{ color: 'black' }}
                    href={a.info}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </b>
              </ListItem>
            </List>
          </Grid>
        </Paper>
      ))}

      <Paginator
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default AudioBook;
