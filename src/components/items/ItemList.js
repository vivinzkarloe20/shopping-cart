import React  from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import Item from './Item';

const styles = makeStyles(({
    wrapper: {
        marginLeft: '10%',
        marginRight: '10%',
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
        <Grid container spacing={2} className={classes.wrapper}>
            {itemList}
        </Grid>
    );
}

const mapStateToProps = state => ({
    items: state.item.items
})

export default connect(mapStateToProps)(ItemList);