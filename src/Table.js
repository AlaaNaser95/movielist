import React, { Component } from "react";
import TableRow from "./TableRow";
import SearchBar from "./SearchBar";
class Table extends Component {
  render() {
    let movies =
      this.props.movies.length > 0 ? (
        this.props.movies.map((movie, idx) => (
          <TableRow
            movie={movie}
            watched={this.props.watched}
            key={movie + idx}
          />
        ))
      ) : (
        <tr>
          <td>No Movies Found!!</td>
        </tr>
      );

    return (
      <div>
        <SearchBar watched={this.props.watched} />
        <table className="table">
          <tbody>{movies}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
