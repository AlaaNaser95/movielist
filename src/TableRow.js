import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/index";
class TableRow extends Component {
  render() {
    const watching = () => {
      if (this.props.watched) {
        return "unwatch";
      }
      return "watch";
    };
    return (
      <tr>
        <td>{this.props.movie}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              if (!this.props.watched) {
                this.props.onWatchMovie(this.props.movie);
              } else {
                this.props.onUnwatchMovie(this.props.movie);
              }
            }}
          >
            {watching()}
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.onDeleteMovie(this.props.movie);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onWatchMovie: movie => dispatch(actionCreator.watchMovie(movie)),
    onUnwatchMovie: movie => dispatch(actionCreator.unwatchMovie(movie)),
    onDeleteMovie: movie => dispatch(actionCreator.deleteMovie(movie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TableRow);
