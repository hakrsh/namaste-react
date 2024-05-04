import useUser from "../utils/useUser";
import { useState, useEffect } from "react";
const User = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount1((prevCount1) => prevCount1 + 1);
    }, 1000);
    return () => {
      console.log("Remove setInterval [Functional component]");
      clearInterval(timer);
    };
  }, []);
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
          setCount2(count2 + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default User;
