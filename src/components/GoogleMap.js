import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { geolocated } from 'react-geolocated';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../store/actions';
import * as Selector from '../store/reducers';

import Panel from './Panel';

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlace: null,
    }
  }

  handleSearch = (places) => {
    this.setState({ currentPlace: places[0] });
  }

  savePlace = (place) => {
    this.props.dispatch(actions.addPlace(place));
  }

  removePlace = (place) => {
    this.props.dispatch(actions.removePlace(place));
  }

  clearPlace = () => {
    this.setState({ currentPlace: null })
  }

  render() {
    if (this.props.coords && this.props.coords.latitude && this.props.coords.longitude) {
      const myLat = this.props.coords.latitude;
      const myLng = this.props.coords.longitude;
      const place = this.state.currentPlace;
      return (
        <div>
          <Panel
            google={this.props.google} 
            place={place} 
            savedPlaces={this.props.savedPlaces}
            handleSearch={this.handleSearch}
            savePlace={this.savePlace}
            removePlace={this.removePlace}
            clearPlace={this.clearPlace}
          />
          <Map 
            google={this.props.google} 
            zoom={14}
            initialCenter={{ 
              lat: myLat, 
              lng: myLng
            }}
            center={{ 
              lat: place ? place.geometry.location.lat() : myLat, 
              lng: place ? place.geometry.location.lng() : myLng
            }}
            streetViewControl={false}
            zoomControl={false}
            mapTypeControl={false}
            scaleControl={false}
            fullscreenControl={false}
          >
            { 
              place ?
              <Marker
                position={{
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng()
                }}
                name={place.name} 
              /> : <div></div>
            }
            { 
              // this.props.savedPlaces ?
              // this.props.savedPlaces.map(place => 
              //   <Marker
              //     position={{
              //       lat: place.geometry.location.lat(),
              //       lng: place.geometry.location.lng()
              //     }}
              //     name={place.name}
              //   />
              // ) : <div></div>
            }
          </Map>
        </div>
      );
    } else {
      return <div>Loading map data...</div>
    }
  }
}

const mapStateToProps = (state) => ({
  savedPlaces: Selector.getSavedPlaces(state)
});

export default compose(
  GoogleApiWrapper({apiKey: "AIzaSyD4bbUTo-fF9_Ht5pztE3dJHBpyVYmJeSg"}),
  geolocated({  userDecisionTimeout: 5000 }),
  connect(mapStateToProps)
)(GoogleMap);