import { useState, useEffect } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    console.log("registering event listener [Functional]");
    const handleOnline = () => {
      setOnlineStatus(true);
    };

    const handleOffline = () => {
      setOnlineStatus(false);
    };
    addEventListener("online", handleOnline);
    addEventListener("offline", handleOffline);
    return () => {
      console.log("removing event listener [Functional]");
      removeEventListener("online", handleOnline);
      removeEventListener("offline", handleOffline);
    };
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
