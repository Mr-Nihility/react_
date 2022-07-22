// import Section from './section/Section';
// import { FeaturesGallary } from './featuresGallary/FeaturesGallary';
import { mapper } from 'utils/mapper';
import { Component } from 'react';
import { Button } from './Button/Button';
import { MoviesGallary } from './MoviesGallary/MoviesGallary';

// import data from '../data/features.json';
import movies from '../data/data.json';
//-------------------------------------------------------///

class App extends Component {
  state = {
    films: mapper(movies),
    isShown: false,
  };

  handlerClick = () => {
    this.setState({ isShown: true });
  };
  onDelete = id => {
    this.setState(prevState => ({
      films: prevState.films.filter(item => item.id !== id),
    }));
  };

  onToggleStatus = filmId => {
    
    this.setState(prev => ({
      
      films: prev.films.map(item => {
        
        if (item.id === filmId) {
          
          return {...item, watched: !item.watched}
          
        }
        return item
      }),
    }));
  };

  render() {
    const { isShown, films } = this.state;
    return (
      <div>
        {!isShown && (
          <Button
            textContent="Show something"
            handlerClick={this.handlerClick}
          />
        )}

        {isShown && (
          <MoviesGallary
            onToggleStatus={this.onToggleStatus}
            films={films}
            onDelete={this.onDelete}
          />
        )}
      </div>
    );
  }
}

export { App };
