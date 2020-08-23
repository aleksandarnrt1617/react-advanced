import React, { Component } from "react";
import withTooltip from "./withToolTip";

class Movie extends Component {
  render() {
    return <div>Movie{this.props.showToolTip && <div>Some Tool tip</div>}</div>;
  }
}

export default withTooltip(Movie);
