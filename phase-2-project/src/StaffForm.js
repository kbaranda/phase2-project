import React, { Component } from 'react'

export class StaffForm extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        name: "",
        image: "",
        info: "",
        likes: 0
      }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()    
    fetch("http://localhost:3000/staff", {
      method: "POST",
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then((resp) => resp.json())
    .then((staff) => this.props.addStaff(staff)) 
  }
  
  render() {
    // console.log(this.state)
    return (
      <div>
        <h2>New Staff Member</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={this.handleChange}
          />
          <input type="text"
          name="image"
          value={this.state.image}
          placeholder="Image"
          onChange={this.handleChange}
          />
          <input type="text"
          name="info"
          value={this.state.info}
          placeholder="info"
          onChange={this.handleChange}
          />
        <button type="submit">Add Staff</button>
        </form>
      </div>
    )
  }
}

export default StaffForm
