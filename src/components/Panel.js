import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import SearchBox from './SearchBox';
import Place from './Place';

export default class Panel extends Component {
  placeIsSaved = (savedPlaces, place) => {
    return savedPlaces.some(savedPlace => 
      savedPlace.name === place.name);
  }

  render() {
    const { google, place, handleSearch } = this.props;
    return (
      <Card style={styles.card}>
        <CardContent>
          {
            place
              ? <Place place={place} />
              : <SearchBox
                  google={google}
                  onPlacesChanged={handleSearch}
                />
          }
        </CardContent>
        {
          place
            ? <CardActions>
                {
                  !this.placeIsSaved(this.props.savedPlaces, place)
                  ? <Button 
                      variant='contained' 
                      color='primary'
                      onClick={() => this.props.savePlace(place)}
                    >
                      Save
                    </Button>
                  : <Button 
                      variant='contained' 
                      color='secondary'
                      onClick={() => this.props.removePlace(place)}
                    >
                      Remove
                    </Button>
                }
                {
                  this.props.savedPlaces.length > 0
                    ? <Link to="/places">
                        <Button
                          variant='outlined' 
                          color='primary'
                        >
                          My Places
                        </Button>
                      </Link> 
                    : <span></span>
                }
                <Button
                  variant='outlined' 
                  color='default'
                  onClick={this.props.clearPlace}
                >
                  Clear
                </Button>
              </CardActions>
            : <div></div>
        }
      </Card>
    )
  }
}

/*
<Button
  variant='outlined' 
  color='default'
  onClick={this.props.clearPlace}
>
  My Places
</Button>
*/

const styles = {
  card: { 
    position: 'absolute', 
    minWidth: '90%',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '99'
  }
}