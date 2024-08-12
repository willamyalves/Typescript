import { useContext } from "react";
import { MyContext } from "../App.tsx";

const Context = () => {
  const details = useContext(MyContext);

  return (
    <>
      {details && (
        <div>
          <p>{details.language}</p>
          <p>{details.framework}</p>
          <p>{details.projects}</p>
        </div>
      )}
    </>
  );
};
export default Context;
