import { useEffect, useState } from "react";
import { USERS_API } from "./constants";
import { getRandomInRange } from "../utils/helper";

const useUser = () => {
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
  return user;
};

export default useUser;
