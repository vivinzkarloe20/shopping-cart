import React from 'react'

import { makeStyles } from '@material-ui/styles';
import { Fab } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';

const BackButton = () => {
    const styles = makeStyles(({
        backButton: {
            position: 'fixed',
            bottom: 0,
            left: 1,
            margin: '25px'
        }
    })); 

    const classes = styles();

    return (
        <Fab color="primary" className={classes.backButton}>
            <ArrowBack/>
        </Fab>
    )
}

export default BackButton