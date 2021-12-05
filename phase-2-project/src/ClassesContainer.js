import React from "react";
import Class from "../src/Class"

class ClassesContainer extends React.Component {
  render() {
    const courses = this.props.courses
    return (
      <div className="container">
        <h1>Classes</h1>
        {courses.map((course) => (
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