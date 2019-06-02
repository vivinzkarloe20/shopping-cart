import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ItemList from './components/items/ItemList';
import Cart from './components/cart/Cart';
import ItemInfo from './components/items/ItemInfo';
import Navbar from './components/layout/Navbar';
import { CssBaseline, Grid } from '@material-ui/core';


const App = () => {
    return(
        <Router>
            <Navbar />
            <CssBaseline />
            <Grid container>
                <Switch>
                    <Route exact path="/shop" component={ItemList}></Route>
                    <Route exact path="/shop/item/:id" component={ItemInfo}></Route>
                    <Route exact path="/shop/cart" component={Cart}></Route>
                </Switch>
            </Grid>
        </Router>
    );
}

export default App;