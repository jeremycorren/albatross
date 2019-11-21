import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Selector from '../store/reducers';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import Place from './Place';

class Places extends Component {
  render() {
    const list = this.props.savedPlaces.map(savedPlace => 
      <div>
        <ListItem>
          <Place place={savedPlace} />
        </ListItem>
        <Divider component="li" />
      </div>
    );
    return (
      <List>{list}</List>
    );
  }
}

const mapStateToProps = (state) => ({
  savedPlaces: Selector.getSavedPlaces(state)
});

export default connect(
  mapStateToProps
)(Places);