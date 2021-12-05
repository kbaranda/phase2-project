import React from "react";

class Class extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Class;