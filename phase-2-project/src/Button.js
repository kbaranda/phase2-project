import React from "react";

class Button extends React.Component {
  render () {
    return (
      <button onClick={()=>this.props.handleBtn(this.props.id)}>click me</button>
    )
  }
}

export default Button;