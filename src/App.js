import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles'
import './App.css';
import { blue, indigo } from '@material-ui/core/colors'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './components/homepage';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookDetails from './components/bookdetails';
import { Card } from '@material-ui/core';
import AppBarCustom from './components/appBarCustom';
const theme = createTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});
const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'center'
  },
  container: {
    maxHeight: 600,
  },
  tableIcons: {
    cursor: 'pointer'
  }
});
const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppBarCustom />
        <Card className={classes.root}>
          <Router>
            <div className="App">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/bookdetails" component={BookDetails} />
              </Switch>
            </div>
          </Router>
        </Card>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
