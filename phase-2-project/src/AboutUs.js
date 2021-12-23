import React from "react";
import Staff from "./Staff";
import StaffForm from "./StaffForm";

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

  handleBtn = (id) =>  {
    const newStaffArr = this.state.staff.map(member => {
      if (member.id === id){
        const newMember = {...member}
        newMember.likes ++
        fetch(`http://localhost:3000/staff/${id}`, {
          method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newMember)
        })
        return newMember
      } else {
        return member
      }
    })
    this.setState({ 
      staff: newStaffArr
    })
  }

  addStaff = (staff) => {
    const newStaff = [...this.state.staff, staff]
    this.setState({ staff: newStaff})
  }

  render(){
    const staff = this.state.staff
    // console.log(staff)
    return (
      <div> 
        <h1>About Us</h1>
        <p>Here at CPR Prime Services we care about giving the best to all our students so they can make the world a better place.</p>
        <h3>Meet our Staff</h3>
        {this.state.staff.map((member) => (
          <Staff
           key={member.id}
          name={member.name}
          info={member.info}
          likes={member.likes}
          id={member.id}
          handleBtn={this.handleBtn}
          />
        ))}
        < StaffForm 
        addStaff = { this.addStaff }
        />
      </div>
    )
  }
}

export default AboutUs;