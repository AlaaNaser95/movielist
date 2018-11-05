import React, { Component } from "react";
import Table from "./Table";
class List extends Component {
  render() {
    return (
      <div>
        <Table movies={this.props.movies} watched={this.props.watched} />
      </div>
    );
  }
}

export default List;
