import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("counter");
    if (
      storedCount &&
      storedCount !== "undefined" &&
      storedCount !== "null" &&
      !isNaN(Number(storedCount)) &&
      Number(storedCount) !== 0
    ) {
      console.log(storedCount, count);
      setCount(Number(storedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  return (
    <div className="card">
      <Button variant={"contained"} onClick={() => setCount((c) => c + 1)}>
        {count}
      </Button>
    </div>
  );
};

export default Counter;
