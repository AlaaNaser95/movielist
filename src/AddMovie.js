import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/index";
class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(event) {
    this.setState({ movie: event.target.value });
  }
  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type movie name..."
            aria-label=""
            aria-describedby="button-addon2"
            onChange={this.changeHandler}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primery"
              type="button"
              id="button-addon2"
              onClick={() => {
                if (this.state.movie) this.props.onaddMovie(this.state.movie);
              }}
            >
              Add Movie
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onaddMovie: value => dispatch(actionCreator.addmovie(value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddMovie);
