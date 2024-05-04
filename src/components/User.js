import { useEffect, useState } from "react";
import { USERS_API } from "../utils/constants";
import { getRandomInRange } from "../utils/helper";
const User = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [user, setUser] = useState({
    name: "",
    address: "",
  });
  const fetchUsers = async () => {
    const data = await fetch(USERS_API);
    const json = await data.json();
    const users = json?.users;
    const index = getRandomInRange(0, users?.length);
    setUser(users[index]);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("hi there from functional component!");
    }, 1000);
    fetchUsers();
    return () => {
      clearInterval(timer);
    };
  }, []);
  const { firstName, address } = user;
  return (
    <div className="user-card">
      <h2>{firstName}</h2>
      <p>{address?.city}</p>
      <p>@harikn77</p>
      <p>Count1: {count1}</p>
      <p>Count2: {count2}</p>
      <button
        onClick={() => {
          setCount1(count1 + 1);
          setCount2(count2 + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default User;
