import { useEffect, useState } from "react";

const indiaTimeZone = { timeZone: "Asia/Kolkata" };

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    /* Clean up here  */
    return () => {
      clearInterval(intervalId);
      console.log("cancelled the interval");
    };
  }, []);

  return (
    <p>
      The current time is : {time.toLocaleDateString("en-IN", indiaTimeZone)}-{" "}
      {time.toLocaleTimeString("en-IN", indiaTimeZone)}
    </p>
  );
};
export default CurrentTime;
