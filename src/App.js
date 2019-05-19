import React, { Component } from 'react';
import './css/App.css';
import Movie from './components/Movie'
import data from './components/MoviesData';
import { Footer } from './components/Footer';

class App extends Component {

  state = {
    query: ''
  }

  searchText = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {

    /* array of movie details */
    let movieImages = [];
    let movieNames = [];
    let movieDescriptions = [];

    /* pushes each data value to the according array */
    Object.keys(data).forEach(key => {
      movieImages.push(data[key].img);
      movieNames.push(data[key].title);
      movieDescriptions.push(data[key].description);
    });

    let filteredMovieNames = movieNames.filter( (movie) => {
      return movie.toLowerCase().indexOf(this.state.query) !== -1; 
    });

    return (
      <div className="App">

        <div className="input-container">
          <input type="text" placeholder="Search.." onKeyUp={this.searchText}/>
        </div>

        <div className="movies-container">
          {filteredMovieNames.map((movie, i) => { 
            return <Movie img={movieImages[movieNames.indexOf(movie)]} name={movie} description={movieDescriptions[movieNames.indexOf(movie)]} />
          })}
        </div>

        <Footer message="coded by" author="Marcelo Mariduena" link="https://github.com/marcelomariduena"/>
      </div>
    );
  }
}

export default App;
