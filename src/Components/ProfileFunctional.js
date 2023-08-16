import { useEffect, useState } from "react";

const ProfileFunction = ({ name }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //console.log("useEffeect called");
  });

  console.log("rendering");
  return (
    <>
      <div>
        <h2>This is profile Function section </h2>
        <p>Name is : {name}</p>
        <p>Count : {count}</p>
        <button
          onClick={() => {
            if (count === 0) setCount(1);
            if (count === 1) setCount(0);
          }}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default ProfileFunction;
