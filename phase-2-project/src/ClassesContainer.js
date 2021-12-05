import React from "react";
import Class from "../src/Class"

class ClassesContainer extends React.Component {
  render() {
    const classes = this.props.classes
    return (
      <div className="container">
        <h2>Classes</h2>
        {classes.map((course) => (
          <Class
          key={course.id}
          />
        ))}
      </div>
    )
  }
}

export default ClassesContainer;