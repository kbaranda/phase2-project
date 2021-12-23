import React from "react";
import Button from "../src/Button";

class Staff extends React.Component {
   
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <p>{this.props.info}</p>
        <h4>Likes</h4>
        <h5>{this.props.likes}</h5>
        <Button 
        id= {this.props.id}
        handleBtn={this.props.handleBtn}
        />
      </div>
    )
  }
}

export default Staff;