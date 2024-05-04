import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
class AboutClass extends Component {
  constructor(props) {
    // console.log("Parent constructor");
    super(props);
    this.state = {
      onlineStatus: true,
    };
  }
  componentDidMount() {
    // console.log("Parent component did mount");
    this.handleOnline = () => {
      this.setState({ onlineStatus: true });
    };
    this.handleOffline = () => {
      this.setState({ onlineStatus: false });
    };
    console.log("registering event listener [Class]");
    addEventListener("online", this.handleOnline);
    addEventListener("offline", this.handleOffline);
  }
  componentWillUnmount() {
    console.log("removing event listener [class]");
    removeEventListener("online", this.handleOnline);
    removeEventListener("offline", this.handleOffline);
  }
  render() {
    // console.log("Parent render");
    if (!this.state.onlineStatus) {
      return (
        <h1>
          Looks like you are offline, please check the internet connection!
        </h1>
      );
    }
    return (
      <div>
        <h1>About</h1>
        <div className="counter-container">
          <User />
          <UserClass name={"First"} />
          <UserClass name={"Second"} />
          <UserClass name={"Third"} />
        </div>
      </div>
    );
  }
}
export default AboutClass;
