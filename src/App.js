import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import AddMovie from "./AddMovie";
import List from "./List";
class App extends Component {
  render() {
    let text1 = "";
    if (this.props.movies.length < this.props.originalMovies.length) {
      text1 = `Showing${this.props.movies.length} out of ${
        this.props.originalMovies.length
      }`;
    } else {
      text1 = this.props.movies.length;
    }
    let text2 = "";
    if (this.props.watched.length < this.props.originalWatched.length) {
      text2 = `Showing${this.props.watched.length} out of ${
        this.props.originalWatched.length
      }`;
    } else {
      text2 = this.props.watched.length;
    }

    return (
      <div className="App">
        <AddMovie />
        <div className="row">
          <div className="col-6">
            <div>
              Watchlist <span>{text1}</span>
            </div>
            <List movies={this.props.movies} />
          </div>
          <div className="col-6">
            <div>
              Watched <span>{text2}</span>
            </div>
            <List watched={true} movies={this.props.watched} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.filteredMovies,
    watched: state.filteredWatched,
    originalMovies: state.movies,
    originalWatched: state.watched
  };
};

export default connect(mapStateToProps)(App);
