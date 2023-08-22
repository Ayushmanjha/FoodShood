import { useState, useEffect } from "react";

const useOffline = () => {
  const [onLine, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));
  }, []);

  return onLine;
};

export default useOffline;
