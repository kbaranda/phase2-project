import React from "react";
import Class from "../src/Class"

class ClassesContainer extends React.Component {
  render() {
    const classes = this.props.classes
    return (
      <div className="container">
        <h1>Classes</h1>
        {classes.map((course) => (
          <Class
          key={course.id}
          name={course.name}
          description={course.description}
          />
        ))}
      </div>
    )
  }
}

export default ClassesContainer;