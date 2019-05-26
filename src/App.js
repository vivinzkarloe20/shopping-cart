import React from 'react';

import ItemList from './components/items/ItemList';
import Navbar from './components/layout/Navbar';
import { CssBaseline, Grid } from '@material-ui/core';

const App = () => {
    return(
        <React.Fragment>
            <CssBaseline />
            <Navbar />
            <Grid container>
                <ItemList />
            </Grid>
        </React.Fragment>
    );
}

export default App;