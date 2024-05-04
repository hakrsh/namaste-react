import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    console.log("Parent constructor");
    super(props);
  }
  componentDidMount() {
    console.log("Parent component did mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <div className="counter-container">
          <User name={"Hari(function)"} location={"kerala"} />
          <UserClass name={"First"} location={"kerala"} />
          <UserClass name={"Second"} location={"kerala"} />
          <UserClass name={"Third"} location={"kerala"} />
        </div>
      </div>
    );
  }
}
export default About;
