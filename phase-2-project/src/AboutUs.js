import React from "react";
import Staff from "./Staff";

class AboutUs extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        staff: []
      }
  }
  componentDidMount() {
    fetch("http://localhost:3000/staff")
    .then(resp => resp.json())
    .then(staff => this.setState({ staff }))
  }
  render(){
    const staff = this.state.staff
    return (
      <div> 
        <h1>About Us</h1>
        <p>Here at CPR Prime Services we care about giving the best to all our students so they can make the world a better place.</p>
        <h3>Meet our Staff</h3>
        {staff.map((member) => (
          <Staff
          key={member.id}
          name={member.name}
          info={member.info}
          />
        ))}
      </div>
    )
  }
}

export default AboutUs;