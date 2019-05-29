import React  from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import Item from './Item';

const styles = makeStyles(theme => ({
    wrapper: {
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: 'auto',
    }
})); 

const ItemList = (props) => {
    const classes = styles();
    const { items } = props;

    const itemList = items.length ? (
        items.map(item => { 
            return(
                <Item item={item} key={item.id}/>
            )
        })
    ) : (
        <p>No Items Found!</p>
    )

    return(
        <Grid container spacing={40} className={classes.wrapper}>
            {itemList}
        </Grid>
    );
}

const mapStateToProps = state => ({
    items: state.item.items
})

export default connect(mapStateToProps)(ItemList);