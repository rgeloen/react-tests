import React, {
  Component
} from "react";

class IPAddress extends Component { //this component will be responsible for displaying the additional text of app

  //it is also ensuring our IP address is visually formatted exactly the way we want
  render() {
    return (
      <div>
        <h1>{this.props.ip}</h1>
        <p>( This is your IP address...probably :P )</p>
      </div>
    );
  }
}

export default IPAddress;
