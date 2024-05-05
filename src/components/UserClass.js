import React from "react";
import { USERS_API } from "../utils/constants";
import { getRandomInRange } from "../utils/helper";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
      user: {
        name: "",
        address: "",
        username: "",
      },
    };
    // console.log(this.props.name + "Child constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child component did mount");
    const data = await fetch(USERS_API);
    const json = await data.json();
    const users = json?.users;
    const index = getRandomInRange(0, users?.length);
    this.setState({
      user: users[index],
    });
    this.timer = setInterval(() => {
      this.setState({
        count1: this.state.count1 + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("Remove setInterval [Class component]");
    clearInterval(this.timer);
  }
  render() {
    // console.log(this.props.name + "Child render");
    const { firstName, address, username } = this.state.user;
    const { count1, count2 } = this.state;
    return (
      <div className="w-52 bg-gray-100 p-4 m-2 rounded-lg">
        <h2 className="py-1">Name: {firstName}</h2>
        <p className="py-1">Location: {address?.city}</p>
        <p className="py-1">Username: {username}</p>
        <p className="py-1">Count1: {count1}</p>
        <p className="py-1">Count2: {count2}</p>
        <button
          className="px-1 py-2 bg-green-100 rounded-lg"
          onClick={() => {
            // NEVER UPDATE THE STATE VARIABLES DIRECTLY this.state.count1++
            this.setState({
              count2: count2 + 1,
            });
          }}
        >
          increment
        </button>
      </div>
    );
  }
}

export default UserClass;
