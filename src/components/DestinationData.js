import { Component } from "react";
import "./DestinationStyles.css";
import Jama from "../assests/Jama Majid.jpg";
import Travel2 from "../assests/travel2.jpg";
import Travel3 from "../assests/travel3.jpg";
import Travel4 from "../assests/travel4.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="dest-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.Jama} />
          <img alt="img" src={this.props.Travel2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
