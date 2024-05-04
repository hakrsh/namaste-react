import useUser from "../utils/useUser";
import { useState } from "react";
const User = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const user = useUser();
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
