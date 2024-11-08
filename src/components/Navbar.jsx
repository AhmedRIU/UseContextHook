import { useContext } from "react";
import { Mycontext } from "../App";

const Navbar = () => {
  let navcontext = useContext(Mycontext);

  return (
    <>
      {navcontext.map((currValue, index) => {
        return <h1 key={index}>{currValue.Name}</h1>;
      })}
    </>
  );
};

export default Navbar;
