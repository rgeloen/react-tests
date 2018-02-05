import React, {
  Component
} from "react";
import IPAddress from "./IPAdress";


var xhr;

class IPAddressContainer extends Component { // component to acquire the IP from web service
  constructor(props, context) {
    super(props, context);

    this.state = {
      ip_address: "..."
    };

    this.processRequest = this.processRequest.bind(this);  // making this method work on other methods/functions.
  }

  componentDidMount() {//When component active, didMount method gets called and IP request is done.
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ipinfo.io/json", true);
    xhr.send();

    //When we hear a response back from the ipinfo service, call the processRequest func to help us deal with the result
    xhr.addEventListener("readystatechange", this.processRequest, false);
  }

  processRequest() { // method for getting the IP of user
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);//in DidMount, ipinfo.io return a string result, parsed to an object called response

      this.setState({
        ip_address: response.ip //  stores just the IP address from the response object into a state variable called ip_address
      });
    }
  }

  render() {
    return (
      <IPAddress ip={this.state.ip_address}/> // render IP Adress, prop "ip" created. ip_adress state variable created.
        //ensure that our IP value travels to IPAddress component's render method where it gets formatted and displayed.
    );
  }
};

export default IPAddressContainer;
