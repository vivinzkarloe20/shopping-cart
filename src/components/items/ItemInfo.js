import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemInfo extends Component {
    render() {
        // this.setState({
        //     itemId: item
        // });
        const { item } = this.props

        const itemInfo = item ? (
            <div>
                <p>{item.name}</p>
                <p>${item.price}</p>
            </div>
            
        ) : (<p>none</p>);
        return (
            <div>
                {itemInfo}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    return {
        item: state.item.items.find(item => item.id === id )
    }
}

export default connect(mapStateToProps)(ItemInfo);