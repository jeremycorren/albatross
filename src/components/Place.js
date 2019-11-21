import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

export default class Place extends Component {
  formatRating = (place) => {
    return place.rating ? '\u2605 ' + place.rating.toFixed(1) 
      + ' (' + place.user_ratings_total + ')' : undefined;
  }

  formatDescription = (place) => {
    const description = place.types[0]
      .split('_')
      .map(term => term.charAt(0).toUpperCase() + term.slice(1))
      .join('_')
      .replace(/_/g, ' ');
    if (place.price_level) {
      return description + ' • ' + '$'.repeat(place.price_level)
    }
    return description;
  }

  render() {
    const place = this.props.place;
    return (
      <span>
        <Typography variant='h6'>
        {place.name}
        </Typography>
        <Typography color='textSecondary'>
          {this.formatDescription(place)}
        </Typography>
        <Typography color='textSecondary'>
          {this.formatRating(place)}
        </Typography>
      </span>
    )
    
  }
}