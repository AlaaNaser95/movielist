import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/index";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(event) {
    if (this.props.watched) {
      return this.props.onFilterWatched(event.target.value);
    }
    return this.props.onFilterMovies(event.target.value);
  }
  render() {
    return (
      <input
        type="text"
        className="form-control"
        placeholder="Search Movies"
        aria-label=""
        aria-describedby="button-addon2"
        onChange={this.changeHandler}
      />
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFilterMovies: value => dispatch(actionCreator.filterMovies(value)),
    onFilterWatched: value => dispatch(actionCreator.filterWatched(value))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
