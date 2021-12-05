import React from "react";
import Class from "../src/Class"

class ClassesContainer extends React.Component {
  render() {
    console.log(this.props.classes)
    return (
      <div className="container">
        <h2>Classes</h2>
        <Class />
      </div>
    )
  }
}

export default ClassesContainer;