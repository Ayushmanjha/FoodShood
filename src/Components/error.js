import ErrorImage from "../Asset/image/errorimg.png";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div>
        <img className="errorImg" src={ErrorImage} alt="Error imag" />
      </div>
      <h1>{err.data}</h1>
      <h3>{err.status}</h3>
      <h3>{err.statusText}</h3>
    </>
  );
};

export default Error;
