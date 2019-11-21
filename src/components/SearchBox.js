import React from 'react';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
    if (this.input.current) {
      this.input.current.value = '';
    }
  }

  componentDidMount() {
    const google = this.props.google;
    this.searchBox = new google.maps.places.SearchBox(this.input.current);
    this.searchBoxListener = this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }

  componentWillUnmount() {
    const google = this.props.google;
    google.maps.event.removeListener(this.searchBoxListener);
  }

  render() {
    return (
      <input
        style={styles.searchBox}
        type='text' 
        ref={this.input} 
        placeholder='Enter a location...'
      />
    );
  }
}

const styles = {
  searchBox: {
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: '1em'
  }
}