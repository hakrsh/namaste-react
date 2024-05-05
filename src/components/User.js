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
  const { firstName, address, username } = user;
  return (
    <div className="w-52 bg-gray-200 p-4 m-2 rounded-lg">
      <h2 className="py-1">Name: {firstName}</h2>
      <p className="py-1">Location: {address?.city}</p>
      <p className="py-1">Username: {username}</p>
      <p className="py-1">Count1: {count1}</p>
      <p className="py-1">Count2: {count2}</p>
      <button
        className="px-1 py-2 bg-green-100 rounded-lg"
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
