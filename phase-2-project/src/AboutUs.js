import React from "react";

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
    console.log(this.state)
    return (
      <div> 
        <h1>About Us</h1>
        <p>Here at CPR Prime Services we care about giving the best to all our students so they can make the world a better place.</p>
        <h4>Meet our Staff</h4>
      </div>
    )
  }
}

export default AboutUs;