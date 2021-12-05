import React from "react";

class Staff extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <p>{this.props.info}</p>
      </div>
    )
  }
}

export default Staff;