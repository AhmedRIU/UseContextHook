import { createContext } from "react";
import "./components/Navbar";
import Navbar from "./components/Navbar";
export let Mycontext = createContext();

function App() {
  let name = [
    {
      Name: "Ahmed",
      Age: "23",
    },
    {
      Name: "Sarab Bhai",
      Age: "27",
    },
    {
      Name: "Khan Bhai",
      Age: "28",
    },
    {
      Name: "Ahmed Bhai",
      Age: "30",
    },
    {
      Name: "Tayyab contriverse Bhai",
      Age: "31",
    },
  ];

  return (
    <>
      <Mycontext.Provider value={name}>
        <Navbar />
      </Mycontext.Provider>
    </>
  );
}

export default App;
