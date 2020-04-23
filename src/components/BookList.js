import React, { useState } from 'react';
import prayer from '../../data/prayers.json';
import search from './Search';
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
    maxWidth: 800,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: 'lightblue',
  },
}));

const BookList = () => {
  const classes = useStyles();
  //const [post, setPost] = useState('');
  const [term, setTerm] = useState('');

  const searchHandler = (e) => {
    setTerm(e.target.value); //outputs watever the input is inputted
  };

  //const { term, post } = this.state; //destructuring
  return (
    <div className="App">
      <h1>Book List</h1>
      <form>
        Search By Title:
        <input
          className="Input"
          type="text"
          onChange={searchHandler}
          value={term}
        />
      </form>

      <div>
        {/* {this.state.post.filter(search(this.state.term)).map((a) =>{ */}
        {prayer.filter(search(term)).map((a) => {
          return (
            <Paper
              key={a.id}
              direction="column"
              justify="center"
              className={classes.paper}
            >
              <Grid
                container
                spacing={0}
                direction="column"
                className={classes.root}
              >
                <List className={classes.root}>
                  <ListItem
                    variant="h2"
                    justify="center"
                    className={classes.root}
                  >
                    <h2>Title: {a.title}</h2>
                  </ListItem>
                  <hr />
                  <br />
                  <ListItem
                    variant="h4"
                    justify="center"
                    className={classes.root}
                  >
                    <b>Prayer- {a.body}</b>
                  </ListItem>
                  <br />
                  <ListItem
                    variant="h4"
                    justify="center"
                    className={classes.root}
                  >
                    <b>
                      Source-{' '}
                      <a
                        style={{ color: 'black' }}
                        href={a.source}
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
          );
        })}
      </div>
    </div>
  );
};

export default BookList;