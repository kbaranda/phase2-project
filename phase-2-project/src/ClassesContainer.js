import React from "react";

class ClassesContainer extends React.Component {
  render() {
    console.log(this.props.classes)
    return (
      <div className="container">
        <h2>Classes</h2>
      </div>
    )
  }
}

export default ClassesContainer;